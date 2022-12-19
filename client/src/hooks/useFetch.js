import { useEffect, useState } from "react";

const UseFetch = (url) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const dataFetch = async (url) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const result = await response.json();
      setLoading(false);
      setMessage("");
      setData(result);
    } catch (error) {
      setLoading(false);
      setMessage(error.message);
    }
  };

  useEffect(() => {
    dataFetch(url);
  }, [url]);

  return { data, message, loading };
};

export default UseFetch;
