import React from "react";

// import TuneIcon from '@mui/icons-material/Tune';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {MdAccountCircle, MdPlaylistAdd, MdTune} from 'react-icons/md';
import {HiCurrencyDollar} from 'react-icons/hi'

import { useDispatch } from 'react-redux'
import { decrement, increment } from '../features/lists/counterSlice'

export default function Header() {
const dispatch = useDispatch();


    return <React.Fragment>
        <section className="header flex justify-around h-12 items-center bg-red-200">
            <button onClick={() => dispatch(increment())} >
                <MdAccountCircle className="h-6 w-6" />
            </button>
            <button onClick={() => dispatch(decrement())} >
                <MdPlaylistAdd className="h-6 w-6" />
            </button>
            <button>
                <HiCurrencyDollar className="h-6 w-6" />
            </button>
            <button>
                <MdTune className="h-6 w-6" />
            </button>
        </section>

    </React.Fragment>
}