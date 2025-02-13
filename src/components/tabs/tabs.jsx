import React, { useState } from "react";
import "./index.css";

export default function Tab({ tabContent, onChange }) {
  const [tabCurrentIndex, setTabCurrentIndex] = useState(0);

  return (
    <div className="wrapper">
      <div className="heading">
        {tabContent.map((tabItem,index) => (
          <div key={tabItem.label} onClick={()=>setTabCurrentIndex(index)} className={`tab-item ${tabCurrentIndex===index ? "active" : ""}`}>
            <span>{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content">
        {tabContent[tabCurrentIndex] && tabContent[tabCurrentIndex].content}
      </div>
    </div>
  );
}
