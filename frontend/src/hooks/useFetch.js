import { useEffect, useState } from "react";

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then(setData)
      .catch(setError);
  }, [url]);

  return { data, error };
};
