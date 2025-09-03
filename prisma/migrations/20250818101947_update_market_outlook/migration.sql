-- Step 1: Convert marketOutlook column to TEXT temporarily
ALTER TABLE "IndustryInsight" 
ALTER COLUMN "marketOutlook" TYPE TEXT 
USING "marketOutlook"::TEXT;

-- Step 2: Drop the old enum type if it exists
DO $$ BEGIN
  DROP TYPE IF EXISTS "MarketOutlook";
EXCEPTION
  WHEN undefined_object THEN null;
END $$;

-- Step 3: Create new enum with correct uppercase values
CREATE TYPE "MarketOutlook" AS ENUM ('POSITIVE', 'NEUTRAL', 'NEGATIVE');

-- Step 4: Convert the old text values into new enum values
ALTER TABLE "IndustryInsight" 
ALTER COLUMN "marketOutlook" TYPE "MarketOutlook" 
USING (
  CASE "marketOutlook"
    WHEN 'Positive' THEN 'POSITIVE'::"MarketOutlook"
    WHEN 'Neutral'  THEN 'NEUTRAL'::"MarketOutlook"
    WHEN 'Negative' THEN 'NEGATIVE'::"MarketOutlook"
  END
);
