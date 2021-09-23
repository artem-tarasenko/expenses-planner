import React, {useState} from "react";

import { Overlay } from "./includes/PopupContainer";

export default function Currency( {reset} ) {
    const [curr, setCurr] = useState("USD");

    function handleSubmit(e) {
        console.log("Change currency");
        //this function should dispatch action to change all currency around the app (converting)
        reset();
    }

    return <React.Fragment>
        <Overlay onClick={reset} />
        <div className="flex flex-col items-center">
            <h2 className="text-center mb-4">Change default currency</h2>
            
                <div className="formBtnGroup">
                    <button className={curr === "USD" ? 'selected' : ''} title="USD" onClick={ (e) => setCurr(e.target.title)}>USD</button>
                    <button className={curr === "RUB" ? 'selected' : ''} title="RUB" onClick={ (e) => setCurr(e.target.title)}>RUB</button>
                    <button className={curr === "CAD" ? 'selected' : ''} title="CAD" onClick={ (e) => setCurr(e.target.title)}>CAD</button>
                    <button className={curr === "EUR" ? 'selected' : ''} title="EUR" onClick={ (e) => setCurr(e.target.title)}>EUR</button>
                </div>
                <button className="formBtn w-32 my-4" onClick={handleSubmit} >Change</button>
        </div>
        </React.Fragment>
}