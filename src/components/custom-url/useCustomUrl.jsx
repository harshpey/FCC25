import { useEffect, useState } from "react";

export default function useCustomUrl(defaultUrl) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(defaultUrl);
        const result = await response.json();
        setData(result.users)
      } catch {
        console.log("Error");
      }
    }
    fetchData();
  }, []);
  return data;
}
