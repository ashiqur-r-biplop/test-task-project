import { useState, useEffect } from "react";
const useDataFetching = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response1 = await fetch(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        const jsonData1 = await response1.json();
        setData(jsonData1);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      // Cleanup logic if needed
    };
  }, []);
  return { data, isLoading, error };
};

export default useDataFetching;
