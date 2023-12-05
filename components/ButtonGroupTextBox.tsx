import React, { FunctionComponent, useState } from 'react';
import styles from '@/components/styles.module.css';
import { ToggleButton, ToggleButtonGroup, Typography, Button } from '@mui/material';


type buttonGroupTextBoxItems = {
    title: string,
    buttonText: string,
    boxTitle: string,
    boxText: string,
    buttonIcon: React.ReactNode,
    boxButtonText: string
}

interface thisComponentProps {
    TextBoxItems: buttonGroupTextBoxItems[];
}

export const ButtonGroupTextBox: FunctionComponent<thisComponentProps> = ({ TextBoxItems }) => {

    const [currentButton, setCurrentButton] = useState(TextBoxItems[0]);
    const [currentBox, setCurrentBox] = useState(0);

    const handleBoxClick = (
        event: React.MouseEvent<HTMLElement>,
        newBoxClick: buttonGroupTextBoxItems | null,
    ) => {
        if (newBoxClick !== null) {
            setCurrentButton(newBoxClick);
        }
    };


    console.log(currentButton)
    return (
        <div className={styles.groupTextBoxContainer}>
            <ToggleButtonGroup orientation='vertical' exclusive onChange={handleBoxClick} value={currentButton}>
                {TextBoxItems.map((item) => (
                    <ToggleButton value={item}
                    style={{
                        transition: 'transform 0.3s ease-in-out',
                        transform: currentButton == item? 'scale(1.2)':'scale(1)',
                        margin: currentButton == item? '10px':'0px',
                        fontWeight: currentButton == item? 'bold':'',
                        border: 'none'
                    }}>
                        {item.buttonIcon} {item.buttonText}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
            <div className={styles.textBox}>
                <Typography variant='h4' sx={{marginTop: '5px', marginLeft: '25px'}} gutterBottom>
                    {currentButton.title}
                </Typography>
                <Typography variant='body2' sx={{marginTop: '30px', marginLeft: '25px'}}>
                    {currentButton.boxText}
                </Typography>
                <Button sx={{color: 'white', backgroundColor: 'black', margin: '5%'}} variant='contained' >
                    {currentButton.boxButtonText}
                </Button>
            </div>
        </div>
    )
}