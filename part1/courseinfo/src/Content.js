import {Part} from "./Part";
import React from "react";

export const Content = (props) => {
    return (
        <>
            <Part part={props.parts[0]}/>
            <Part part={props.parts[1]}/>
            <Part part={props.parts[2]}/>
        </>)
};
