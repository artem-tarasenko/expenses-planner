import React from "react";

export default function PopupWrapper({children}) {

    return <React.Fragment>
        <div className="popup-bottom p-4 bg-gray-200 absolute bottom-12 w-full z-20">
            {children}
        </div>
    </React.Fragment>
}

const Overlay = (props) => <button className="overlayBtn" {...props}></button>

export {Overlay}