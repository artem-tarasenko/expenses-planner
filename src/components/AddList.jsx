import React, { useState } from "react";
import { Overlay } from "./includes/PopupContainer";

export default function AddList({reset}) {
    const [name, setName] = useState('')

    function handleSubmit(e) {
        console.log("EVENT!");
        setName('')
        e.preventDefault();
    }

    return <React.Fragment>
        <Overlay onClick={reset} />
        <div className="flex flex-col items-center">
            <h2 className="text-center mb-4">Add new list {name}</h2>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <label className="formLabel">List name</label>
                <input className="formInput mt-2 mb-4" type="text" value={name} onChange={ (e) => setName(e.target.value)} />
                <input className="formBtn w-32" type="submit" value="Create list" disabled={name !== '' ? false : true} />
            </form>
        </div>
            
    </React.Fragment>
}