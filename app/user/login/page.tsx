"use client"

import React, { useState } from "react";

import styles from '@/app/styles.module.css';
import { Typography, TextField, Box } from "@mui/material";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";



export default function LoginPage() {

    const [user, setUser] = useState<String>("");
    const [password, setPassword] = useState<String>("");

    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser(event.target.value)
    }

    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }
    const theme = createTheme({
        typography: {
            fontFamily: 'Archivo'
        }
    })
    return (
        <div style={{ height: "auto" }}>
            <div className={styles.loginShell}>
                <div className={styles.roundedSquare}>
                    <Typography align="center" variant="h2" gutterBottom>
                        Login
                    </Typography>
                    <TextField id="username" variant="standard" sx={{marginLeft:'10px', marginBottom: '20px'}} label="Username" 
                    required value={user} onChange={handleChange1} ></TextField>
                    <TextField id="password" type="password" variant="standard" sx={{marginLeft:'10px', marginBottom: '20px'}} label="Password" 
                    required value={password} onChange={handleChange2 } ></TextField>
                </div>
            </div>
        </div>
    )

    /*return (
        <TextField value={user} onChange={handleChange} variant="standard"/>
    )*/

}
