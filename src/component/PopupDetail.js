import React from "react"

export default function PopUp(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}> Close</button>
                { props.children }
            </div>
        </div>
    ) : "";
}