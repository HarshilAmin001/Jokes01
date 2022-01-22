import React from "react";
import navigationString from "../Constants/navigationString";
import Tabroute from "./Tabroute";

export default function (Stack) {

    return (
        <>
            <Stack.Screen
                name={navigationString.TABS}
                component={Tabroute}
            />
        </>

    )

}