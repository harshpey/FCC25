import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

export default function ImageSlider(url, page = 1, limit = 5) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errMessage, setErrMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(url) {
    try {
      setLoading(true);
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
      );
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
      console.log(data);
    } catch (e) {
      setErrMessage(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== 0) fetchImages(url);
  }, [url]);

  if (loading) {
    return <h3>Loading..., Please wait!</h3>;
  }

  if (errMessage !== null) {
    return <h3>An error has occured.</h3>;
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((item, index) => (
            <img
              src={item.download_url}
              alt={item.download_url}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator "
                    : "current-indicator inactive-indicator"
                }
                onClick={()=>setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
