"use client"

import React from "react";
import { useState, useEffect } from "react";
import styles from '@/app/styles.module.css';
import Header from "@/components/Header";
import { Typography } from "@mui/material";
import { Computer, Checklist } from "@mui/icons-material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ToggleButtonLine } from "@/components/ToggleButtonLine";
import { AddBusiness, Public } from "@mui/icons-material";
import { Curtain } from "@/components/Curtain";


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
    const [thirdSelect, setThirdSelect] = useState(false)
    const [fourthSelect, setFourthSelect] = useState(false)
    
    //set up button lines
    const buttonLineStuff = [
        {
            buttonText: "Select All",
            IconComponent: <Checklist />,
            stateVar: selected,
            stateVarFunc: setSelected
        },
        {
            buttonText: "Digital",
            IconComponent: <Computer />,
            stateVar: secondSelect,
            stateVarFunc: setSecondSelect
        },
        {
            buttonText: "Financing",
            IconComponent: <AddBusiness />,
            stateVar: thirdSelect,
            stateVarFunc: setThirdSelect
        },
        {
            buttonText: "International",
            IconComponent: <Public />,
            stateVar: fourthSelect,
            stateVarFunc: setFourthSelect
        }
    ]

    //curtain items
    const curtainItemsDigital = [
        {
            imageURL:"commercial/dig-c-1.png",
            hoverText:"Boromir Financing Innovation",
            IconComponent:<Computer style={{"scale":"0.8"}}/>
        },
        {
            imageURL:"commercial/dig-c-2.png",
            hoverText:"Beware of Phishing",
            IconComponent:<Computer style={{"scale":"0.8"}}/>
        },
        {
            imageURL:"commercial/dig-c-3.png",
            hoverText:"Boromir Financing HK CyberSafe App",
            IconComponent:<Computer style={{"scale":"0.8"}}/>
        }
    ]

    const curtainItemsFinancing = [
        {
            imageURL:"commercial/fin-c-1.png",
            hoverText:"Powering the businesses of tomorrow",
            IconComponent:<AddBusiness style={{"scale":"0.8"}}/>
        },
        {
            imageURL:"commercial/fin-c-2.png",
            hoverText:"Receivables Finance",
            IconComponent:<AddBusiness style={{"scale":"0.8"}}/>
        },
        {
            imageURL:"commercial/fin-c-3.png",
            hoverText:"Maximize your TradePay app",
            IconComponent:<AddBusiness style={{"scale":"0.8"}}/>
        },
    ]

    const curtainItemsInternational = [
        {
            imageURL:"commercial/tra-c-1.png",
            hoverText:"Business VISA™ Apply now and fly high",
            IconComponent:<Public style={{"scale":"0.8"}}/>
        },
        {
            imageURL:"commercial/tra-c-2.png",
            hoverText:"Doing business in Hong Kong",
            IconComponent:<Public style={{"scale":"0.8"}}/>
        },
        {
            imageURL:"commercial/tra-c-3.png",
            hoverText:"How does Belt and Road affect your business",
            IconComponent:<Public style={{"scale":"0.8"}}/>
        }
    ]
//change active curtain along with state variables
    interface CurtainType {
        imageURL: string,
        hoverText: string,
        IconComponent: React.ReactNode
    }

    const [activeCurtain, setActiveCurtain] = useState(curtainItemsDigital)

    

    useEffect(() => {
        if (selected == true) {
            setSecondSelect(false);
            setThirdSelect(false);
            setFourthSelect(false);
            setActiveCurtain(curtainItemsDigital)
        }
        else {
            setSecondSelect(false);
            setThirdSelect(false);
            setFourthSelect(false);
        }
    }, [selected])

    useEffect(() => {
        if (secondSelect == true){
            setActiveCurtain([]);
            setActiveCurtain(curtainItemsDigital);
        }
    },[secondSelect])
    
    useEffect(() => {
        if (thirdSelect == true){
            setActiveCurtain([]);
            setActiveCurtain(curtainItemsFinancing);
        }
    },[thirdSelect])

    useEffect(() => {
        if (fourthSelect == true){
            setActiveCurtain([]);
            setActiveCurtain(curtainItemsInternational);
        }
    },[fourthSelect])



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
                            {buttonLineStuff.map((bouton) => (
                                <ToggleButtonLine buttonText={bouton.buttonText} IconComponent={bouton.IconComponent} stateVar={bouton.stateVar} stateVarFunction={bouton.stateVarFunc} />
                            ))}
                        </div>
                        <div className={styles.curtainContainer}>
                            {activeCurtain.map((item) => (
                                <Curtain hoverText={item.hoverText} imageURL={item.imageURL} IconComponent={item.IconComponent}/>
                            ))}
                        </div>
                    </div>
                </ThemeProvider>
            </div>
            <div className={styles.belowheadline} />

        </div>
    )
}