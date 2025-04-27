import React from "react";
import useCustomUrl from "./useCustomUrl";

const CustomUrl = () => {
  const url = "https://dummyjson.com/users";
  const data = useCustomUrl(url);
  return <div>{data.map((item, index) => item.firstName)}</div>;
};

export default CustomUrl;
