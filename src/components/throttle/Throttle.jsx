import React, { useEffect, useState } from "react";

const ThrottleDemo = () => {
  const [scrollY, setScrollY] = useState(0);

  function throttle(func, limit) {
    let inThrottle;
    return (...args) => {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrollY(window.scrollY);
    }, 500);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        height: "400vh",
      }}
    >
      <h2 style={{ backgroundColor: "green", position: "fixed" }}>
        You scrolled {scrollY}.
      </h2>
    </div>
  );
};

export default ThrottleDemo;
