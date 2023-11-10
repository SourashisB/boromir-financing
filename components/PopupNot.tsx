"use client"
import { Button, IconButton, Snackbar } from "@mui/material";
import { Fragment, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { FunctionComponent } from "react";

interface NotificationProps{
    message: string,
    buttonText: string
}
export const CustomSnackbar: FunctionComponent<NotificationProps> = ({message, buttonText}) => {

    const [open, setOpen] = useState(false);

    const clickOpen = () => {
        setOpen(true)
    }

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const action = (
        <Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                <CloseIcon/>
            </IconButton >
        </Fragment>
    )

    return (
        <div>
            <Button onClick={clickOpen} color="primary" variant="contained">{buttonText}</Button>
            <Snackbar open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                message={message}
                action={action}
            />
        </div>
    )
}