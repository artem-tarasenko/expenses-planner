import React, { useState } from "react";

function BudgetSettings() {
    const [sum, setSum] = useState(0);

    function handleBudgetChange(e) {
        console.log(`Budget ${sum} is saved.`);
        setSum(0)
    }

    return <React.Fragment>
        <div className="m-4">
            <p className="text-sm font-light">Set new bugdet for of your all lists</p>
            <div>
                <input className="formInput mr-2" value={sum} onChange={ (e) => setSum(e.target.value)} />
                <button className="formBtn text-base" onClick={handleBudgetChange}>Save</button>
            </div>
        </div>
    </React.Fragment>
}

function RatesSettings() {
    const [rates, setRates] = useState({RUB: 0.00, EUR: 0.00, CAD: 0.00, USD: 0.00});

    

    return <React.Fragment>
        <div className="m-4">
            <p>Rates settings</p>
        </div>
    </React.Fragment>
}

function MoreSettings() {

    return <React.Fragment>
        <div className="m-4">
            <p>More settings</p>
        </div>
    </React.Fragment>
}

export {BudgetSettings, RatesSettings, MoreSettings}