import React, { useEffect, useState } from "react";

import { MoreSettings, BudgetSettings, RatesSettings } from "./includes/settingsIncludes";
import { Overlay } from "./includes/PopupContainer";

import {AiOutlineDollar, AiOutlineBarChart, AiOutlineBuild} from 'react-icons/ai';







export default function Settings({reset}) {
    const [state, setState] = useState(null);
    
    
    console.log("Settings state:", state);
    // console.log("Settings rates:", rates);
    

    

    function handleClick(e) {
        if(state === e.target.title) return setState(null);
        setState(e.target.title);
    }

    const RenderSettingsBlock = e => {
        switch (state) {
            case 'budget':
                return <BudgetSettings />

            case 'rates':
                return <RatesSettings />

            case 'more':
                return <MoreSettings />
        
            default:
                break;
        }
    }

    



    return <React.Fragment>
        <Overlay onClick={reset} />
        <div className="flex flex-col items-center z-10">
            <h2 className="text-center mb-4">Settings</h2>
            <div className="flex">
                <button className="formBtn mx-2 flex items-center" title="budget" onClick={handleClick} >
                    <AiOutlineDollar className="mr-1" />
                    budget
                </button>
                <button className="formBtn mx-2 flex items-center" title="rates" onClick={handleClick}>
                    <AiOutlineBarChart className="mr-1" />
                    Rates
                </button>
                <button className="formBtn mx-2 flex items-center" title="more" onClick={handleClick}>
                    <AiOutlineBuild className="mr-1" />
                    More
                </button>
            </div>
            {
                state && <RenderSettingsBlock />
            }
        </div>
    </React.Fragment>
}