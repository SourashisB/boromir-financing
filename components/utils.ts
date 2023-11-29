import { url } from "inspector";
import React, { FunctionComponent } from "react";

export  const buttonPressed = () => {
    console.log('hi')
}


export const navigateToUrl = (url:string) => {
    window.location.href = url
}