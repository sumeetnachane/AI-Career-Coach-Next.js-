import { getUserOnboardingStatus } from "@/actions/user";
import { industries } from "@/data/industries";
import { redirect } from "next/navigation";
import OnboardingForm from "./_components/onboarding-form";

const OnboardingPage = async () => {
  // Check if user is already onboarding
  const { isOnboarded } = await getUserOnboardingStatus();

  if (isOnboarded) {
    redirect("/dashboard");
  }

  return (
    <main>
      {/* onboardingForm is a client component and client component need to use client directive */}
      <OnboardingForm industries={industries} />
    </main>
  );
};

export default OnboardingPage;
