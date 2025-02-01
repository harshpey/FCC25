import { useState } from "react";
import { FaStar } from "react-icons/fa";
import '../accordian/styles.css';

export default function StarRating({ numStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function onMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function onMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="star-container">
      {[...Array(numStars)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => onMouseEnter(index)}
            onMouseLeave={() => onMouseLeave()}
            size={30}
          />
        );
      })}
    </div>
  );
}
