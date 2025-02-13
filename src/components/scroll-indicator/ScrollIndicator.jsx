import React, { useEffect, useState } from "react";
import "./scroll.css";

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [percentage, setPercentage] = useState(0);

  async function fetchData(url) {
    const response = await fetch(url);
    const result = await response.json();
    setData(result.products);
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollpercentage() {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollpercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div>
      
      <div className="progress-container">
      <h2 style={{ textAlign: "center" }}>Custom Scroll Indicator</h2>
        <div
          className="current-progress-container"
          style={{ width: `${percentage}%` }}
        >
           { console.log(percentage)}
        </div>
      </div>
      {data && data.length
        ? data.map((item, index) => (
            <div className="scroll-container" key={item.id}>
              {item.title}
            </div>
          ))
        : null}
    </div>
  );
};

export default ScrollIndicator;
