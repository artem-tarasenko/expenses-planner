import React, { useState } from "react";
import {MdExpandLess, MdExpandMore} from 'react-icons/md';



function ListsTotals(props) {
    const [isExpanded, setIsExpanded] = useState(false);


    // const [open, setOpen] = useState(false); //false - RUB, true - CAD
    // const { settings, sum, rate } = props;

    // const formatter = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: (settings.appCurrency ? settings.appCurrency : "CAD") });
    
    // //updating state
    // const handleOpen = () => { setOpen(true) };
    // const handleClose = () => { setOpen(false) };
    // const budgetResult = normalizedBudget() - (sum.before + sum.after);

    // function normalizedBudget() {
    //     if(settings.appCurrency !== settings.budgetCurrency) {
    //         return settings.budgetCurrency === "rub" 
    //             ? (Math.round((settings.budget / rate) * 100)) /100
    //             : (Math.round((settings.budget * rate) * 100)) /100
    //     } else {
    //         return settings.budget
    //     }
    // }

    // function toggleCurrencySwitch(e) {
    //     props.onSwitch();
    // }


    //  <p className='text-2xl'>{formatter.format(normalizedBudget())}</p> 

//! hidden currency exchange btn and 2 more lines for lists totals but they must be changed as well

    return <div className={`totals flex justify-between bg-blue-100 px-8 py-6 relative ${isExpanded ? 'flex-col' : ''}`}>
                <div className={`total-group flex items-end ${isExpanded ? 'justify-between' : 'flex-col'}`}>
                    <p className="totals budget">
                        Budget: 
                    </p>
                    <p className='text-2xl'>7000</p>
                </div>

                <div className={`total-group flex items-end ${isExpanded ? 'justify-between' : 'hidden'}`}>
                    <p className={`totals sum `}>
                        Before: 
                    </p>
                    <p>1500</p>
                </div>

                <div className={`total-group flex items-end ${isExpanded ? 'justify-between' : 'hidden'}`}>
                    <p className={`totals sum`}>
                        After: 
                    </p>
                    <p>2500</p>
                </div>

                <div className={`total-group flex items-end ${isExpanded ? 'justify-between' : 'flex-col'}`}>
                    <p>
                        Total: 
                    </p>
                    <p className='text-2xl'>
                        3000
                    </p>
                </div>
                

                {/* <div className="currency-change" >
                    <button className={"currency-button " + (settings.appCurrency === "cad" ? "active" : "")} onClick={props.onSwitch} >CAD</button> 
                    <FormControlLabel value="bottom" className="currency-switch" label="" labelPlacement="top" control={
                        <Switch color="primary" color="default" 
                            onChange={toggleCurrencySwitch}
                            checked={settings.appCurrency === "cad" ? false : true}
                        />
                    }/>
                    <button className={"currency-button " + (settings.appCurrency === "rub" ? "active" : "")} onClick={props.onSwitch} >RUR</button>
                </div> */}

                <div className="absolute -bottom-4  left-0 right-0 flex justify-center">
                    {isExpanded 
                        ? <button 
                            onClick={ () => setIsExpanded(false)} 
                            className="w-8 h-8 rounded-2xl border-gray-300 border-2 bg-white text-gray-400 flex">
                                <MdExpandLess className="w-8 h-8 -mt-0.5" />
                            </button> 
                        : <button 
                            onClick={ () => setIsExpanded(true)}
                            className="w-8 h-8 rounded-2xl border-gray-300 border-2 bg-white text-gray-400 flex">
                                <MdExpandMore className="w-8 h-8"  />
                            </button>
                    }
                </div>
    
            </div>
}

export default ListsTotals;