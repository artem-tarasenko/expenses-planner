import React from 'react';


export default function ListsNavPanel({next, prev}) {

    return <React.Fragment>
        <div className="my-4 flex justify-between">
            <button onClick={prev}>PREV</button>
            <p>Nav panel</p>
            <button onClick={next}>NEXT</button>
        </div>
    </React.Fragment>
}