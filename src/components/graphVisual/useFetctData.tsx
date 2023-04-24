import { useState, useCallback } from "react";
interface dataType {
  graph_data: {
    views: {
      [key: string]: number;
    };
  };
  top_locations: {
    country: string;
    count: number;
    percent: number;
  }[];
  top_sources: {
    source: string;
    count: number;
    percent: number;
  }[];
}

export interface ApiResponseType {
  fetchdata: () => Promise<void>;
  error: boolean;
  loading: boolean;
  responseData: dataType | null;
}

const useFetchData = (url: string): ApiResponseType => {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [responseData, setResponseData] = useState<dataType | null>(null);

  const fetchdata = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("something");
      }
      const data = await response.json();
      setResponseData(data);
      console.log(data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  }, [url]);
  return { fetchdata, responseData, error, loading };
};

export default useFetchData;
