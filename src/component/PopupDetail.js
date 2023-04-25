import React, { useEffect } from "react";

export default function PopUp(props) {
  useEffect(() => {
    const close = (event) => {
      if (event.key === "Escape") {
        props.setTrigger(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [props]);

  return props.trigger ? (
    <>
      <div className="popup">
        <div className="popup-inner">
          <button className="close-btn" onClick={() => props.setTrigger(false)}>
            <i className="fa-solid fa-x"></i>
          </button>
          {props.children}
        </div>
      </div>
    </>
  ) : (
    ""
  );
}
