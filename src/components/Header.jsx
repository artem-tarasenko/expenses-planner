import React, {useState} from "react";
import Settings from './Settings';
import UserInfo from './UserInfo';
import AddList from './AddList';
import Currency from "./Currency";
import PopupWrapper from "./includes/PopupContainer";

// ICONS
import {MdAccountCircle, MdPlaylistAdd, MdTune} from 'react-icons/md';
import {HiCurrencyDollar} from 'react-icons/hi'

//REDUX
import { useDispatch } from 'react-redux'
import { decrement, increment } from '../features/lists/counterSlice'


export default function Header() {
    // const dispatch = useDispatch();
    const [state, setState] = useState(null);

    // console.log("MENU STATE: ", state);

    function resetPanels() {
        setState(null)
    }

    function updateState(name) {
        if(state === name) return setState(null);
        setState(name);
    }

    function RenderPopup() {
        switch (state) {
            case 'userinfo': return <PopupWrapper><UserInfo reset={resetPanels} /></PopupWrapper>
            case 'addlist':  return <PopupWrapper><AddList  reset={resetPanels} /></PopupWrapper>
            case 'currency': return <PopupWrapper><Currency reset={resetPanels} /></PopupWrapper>
            case 'settings': return <PopupWrapper><Settings reset={resetPanels} /></PopupWrapper>
        
            default: return null;
        }
    }

    return <React.Fragment>
        <section className="header">
            
            {
                <RenderPopup />
            }
            
            <div className="flex justify-around h-12 items-center bg-red-200">
                <button onClick={() => updateState('userinfo') } >
                    <MdAccountCircle className="h-6 w-6" />
                </button>
                <button onClick={() => updateState('addlist') } >
                    <MdPlaylistAdd className="h-6 w-6" />
                </button>
                <button onClick={() => updateState('currency') } >
                    <HiCurrencyDollar className="h-6 w-6" />
                </button>
                <button onClick={() => updateState('settings')} >
                    <MdTune className="h-6 w-6" />
                </button>
            </div>
            
        </section>

    </React.Fragment>
}