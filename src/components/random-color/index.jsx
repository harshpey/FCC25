import { useState } from "react";

export default function RandomColor() {
  const [color, setColor] = useState("#000000");
  const [typeColor, setTypeColor] = useState("hex");

  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let hexColor = "#";

  function utility(length) {
    return Math.floor(Math.random() * length);
  }

  function generateHexColor() {
    for (let j = 0; j < 6; j++) {
      hexColor += hex[utility(hex.length)];
      console.log("hex");
    }
    return setColor(hexColor);
  }

  function generateRgbColor() {
    const red = utility(256);
    const green = utility(256);
    const blue = utility(256);
    console.log("rgb");

    return setColor(`rgb(${red},${green},${blue})`);
  }

  console.log({ color });

  return (
    <div
      className="container"
      style={{
        backgroundColor: color,
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="buttons" style={{display:'flex', gap: "1rem",}}>
        <button onClick={() => setTypeColor("hex")}>Create Hex Color</button>
        <button onClick={() => setTypeColor("RGB")}>Create RGB Color</button>
        <button
          onClick={() =>
            typeColor === "RGB" ? generateRgbColor() : generateHexColor()
          }
        >
          Generate Random Color
        </button>
      </div>

      <div className="color-container" style={{color:'#fff', display:'inline-flex', gap:"4rem", textAlign:"center", marginTop:"4rem"}}>
          <h3>{typeColor}</h3>
          <h3>{color}</h3>
      </div>
    </div>
  );
}
