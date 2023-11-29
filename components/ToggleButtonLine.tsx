import React, { FunctionComponent } from "react";
import styles from '@/components/styles.module.css';
import { ToggleButton } from "@mui/material";

interface ButtonLineProps {
    buttonText: string,
    IconComponent: React.ReactNode,
    stateVar: boolean,
    stateVarFunction: any
}

export const ToggleButtonLine: FunctionComponent<ButtonLineProps> = ({ buttonText, IconComponent, stateVar, stateVarFunction }) => {
    return (
        <div className={styles.buttonContainer}>
            <ToggleButton value="none" selected={stateVar}
                onChange={() => {
                    stateVarFunction(!stateVar);
                }} sx={{ "borderRadius": "30px", "color": "darkmode.main" }} color="primary">
                {stateVar ? IconComponent : null}  {buttonText}
            </ToggleButton>
        </div>
    )
}