
"use client"

import { Button } from "@mui/material";
import React, { FunctionComponent } from "react";

interface ButtonProps{
    onClickFunction: any,
    buttonText: string,
    buttonLink: string,
    
}

export const CustomButton: FunctionComponent<ButtonProps> = ({buttonText, onClickFunction}) => {
    return <Button onClick={()=> {onClickFunction()}} color="primary" variant="contained">{buttonText}</Button>
}


export const CustomButtonLink: FunctionComponent<ButtonProps>= ({buttonText, buttonLink}) => {
    return <Button href={buttonLink} color="primary" variant="contained">{buttonText}</Button>
}
