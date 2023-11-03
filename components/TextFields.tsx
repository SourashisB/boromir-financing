"use client"
import React, { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import { Input, FormControl, InputLabel } from '@mui/material/';
import FormHelperText from '@mui/material/FormHelperText';

interface TextProps {
    labelText: string,
    helperText: string
}

export const TextfieldLabel: FunctionComponent<TextProps> = ({ labelText }) => {
    return (
        <Box
            component="form"

            noValidate
            autoComplete="off"
        >
            <FormControl variant="standard" color='secondary'>
                <InputLabel htmlFor="component-simple" variant='filled' focused={true}>{labelText}</InputLabel>
                <Input id="component-simple" defaultValue="" />
            </FormControl>
        </Box>
    )
}


export const TextfieldHelperLabel: FunctionComponent<TextProps> = ({ labelText, helperText }) => {
    return (
        <Box
            component="form"

            noValidate
            autoComplete="off"
            
        >
            <FormControl variant="standard" color='secondary'>
                <InputLabel htmlFor="component-simple" variant='filled' focused={true}>{labelText}</InputLabel>
                <Input id="component-simple" defaultValue="" color='success'/>
                <FormHelperText id="component-helper-text" >
                    {helperText}
                </FormHelperText>
            </FormControl>
        </Box>
    )
}
