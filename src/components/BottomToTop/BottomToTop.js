import React, { useEffect, useState } from "react";
import "./BottomToTop.css";
import { FaArrowCircleUp } from "react-icons/fa";
import { scrollToTopBackground, scrollToTopColor } from "../../styles";

const BottomToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <FaArrowCircleUp
          onClick={scrollToTop}
          style={{ color: scrollToTopColor, background: scrollToTopBackground }}
          className="back-to-top"
        />
      )}
    </>
  );
};

export default BottomToTop;
