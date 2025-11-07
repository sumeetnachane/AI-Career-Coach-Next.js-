import { useState } from "react";
import { toast } from "sonner";

const useFetch = (cb) => {
  const [data, setData] = useState(undefined); // API से आने वाला result store होगा
  const [loading, setLoading] = useState(null); // true/false => data load हो रहा है या नहीं
  const [error, setError] = useState(null); // अगर API fail हो तो error यहां store होगा

  const fn = async (...args) => {
    // यह function actual API को call करेगा
    setLoading(true); // call शुरू होते ही loading = true
    setError(null); // नया call शुरू हुआ तो पुराना error हटा देंगे

    try {
      const response = await cb(...args); // cb = callback function (जैसे fetch API)
      setData(response); // success होने पर data store
      setError(null);
    } catch (error) {
      setError(error); // error store
      toast.error(error.message); // UI में error दिखाने के लिए toast
    } finally {
      setLoading(false); // call खत्म → loading false
    }
  };

  return { data, loading, error, fn, setData }; // बाहर components में use करने के लिए return
};

export default useFetch;
