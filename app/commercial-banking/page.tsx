"use client"

import React from "react";
import { useState } from "react";
import styles from '@/app/styles.module.css';
import Header from "@/components/Header";
import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import { ToggleButton } from "@mui/material";
import { Computer, Checklist } from "@mui/icons-material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ToggleButtonLine } from "@/components/ToggleButtonLine";

declare module '@mui/material/styles' {
    interface Palette {
        darkModeButton: Palette['primary'];
    }

    interface PaletteOptions {
        darkModeButton?: PaletteOptions['primary'];
    }
}

declare module '@mui/material/ToggleButton' {
    interface ButtonPropsColorOverrides {
        darkModeButton: true;
    }
}

let theme = createTheme({})

theme = createTheme(theme, {
    // Custom colors created with augmentColor go here
    palette: {
        darkMode: theme.palette.augmentColor({
            color: {
                main: '#102542',
            },
            name: 'darkMode',
        }),
    },
});


export default function CommercialBanking() {
    const [selected, setSelected] = useState(false)
    const [secondSelect, setSecondSelect] = useState(false)
    return (
        <div style={{ "height": "800px" }}>
            <Header />
            <div className={styles.headline}>
                <ThemeProvider theme={theme}>
                    <div className={styles.insideHeadline}>
                        <Typography variant="h4" component="h1" gutterBottom className={styles.headlineText} align="center" maxWidth="100%">
                            Solutions for your company's evolving needs
                        </Typography>
                        <br />
                        <div className={styles.buttonContainer}>
                        <ToggleButtonLine buttonText="Select All" IconComponent={<Checklist />} stateVar={selected} stateVarFunction={setSelected} />
                            <ToggleButtonLine buttonText="Digital" IconComponent={<Computer />} stateVar={secondSelect} stateVarFunction={setSecondSelect} />
                        </div>

                    </div>
                </ThemeProvider>
            </div>
            <div className={styles.belowheadline} />
        </div>
    )
}