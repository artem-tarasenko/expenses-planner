import React from "react";
import { Overlay } from "./includes/PopupContainer";

export default function UserInfo({reset}) {

    return <React.Fragment>
        <Overlay onClick={reset} />
        <p>User Info panel</p>
    </React.Fragment>
}