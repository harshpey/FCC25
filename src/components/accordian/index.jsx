import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multipleSelect, setMultipleSelect] = useState([]);

  function handleSingleSelection(getCurrentId) {
    selected === getCurrentId ? setSelected(null) : setSelected(getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let multiple = [...multipleSelect]
    const findIndexOfId = multiple.indexOf(getCurrentId)
    if(findIndexOfId === -1) multiple.push(getCurrentId);
    else (multiple.splice(findIndexOfId, 1))
    setMultipleSelect(multiple)
  }
  console.log(multipleSelect);

  return (
    <div className="wrapper">
      <div className="accordian">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        {console.log(enableMultiSelection)}
          Enable Multiple Selection
        </button>
        {data && data.length > 0 ? (
          data.map((dataItem, index) => (
            <>
              <div
                className="items"
                key={index}
                onClick={
                  enableMultiSelection
                    ? ()=>handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <div> <div className="question">{dataItem.question} <span>+</span></div>
                {selected === dataItem.id || multipleSelect.includes(dataItem.id) ? (
                <div className="answer" key={dataItem.id}>{dataItem.answer}</div>
              ) : null}
                </div>
              </div>

            </>
          ))
        ) : (
          <strong>Data Unavailable</strong>
        )}
      </div>
    </div>
  );
}
