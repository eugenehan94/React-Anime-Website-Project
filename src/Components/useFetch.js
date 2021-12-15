import axios from "axios";
import { useState, useEffect } from "react";
const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    async function getData(url) {
      axios.get(url).then((response) => {
        setResponse(response.data);
      });
    }
    getData(url);
  }, [url]);
};

export default useFetch;
