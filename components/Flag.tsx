import React, { FunctionComponent, useState, useEffect } from 'react';
import styles from '@/components/styles.module.css';
import { Typography, Button } from '@mui/material';


interface FlagProps {
    title?: string,
    text?: string,
    buttonText?: string
}

export const Flag: FunctionComponent<FlagProps> = ({ title, text, buttonText }) => {
    
    const randomBackgrounds = [
        <div className={styles.background1}/>,
        <div className={styles.background2}/>,
        <div className={styles.background3}/>,
        <div className={styles.gradient}/>,
        <div className={styles.gradient2}/>,
        <div className={styles.gradient3}/>
    ]

    function randomClass(){
        return randomBackgrounds[Math.floor(Math.random()*randomBackgrounds.length)]
    }
        
    
    return (
        <div className={styles.flagBox}>
            <div className={styles.flagLeft}>
                <div>
                    <Typography variant='h4' gutterBottom>{title}</Typography>
                    <Typography variant='body2' gutterBottom>{text}</Typography>
                    <Button sx={{color: "black"}} variant='contained'>
                        {buttonText}
                    </Button>
                </div>
                
            </div>
            {randomClass()}
        </div>
    )
}