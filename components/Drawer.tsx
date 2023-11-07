import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import Button from '@mui/material/Button';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { CustomButton } from './Button';



export default function CustomDrawer() {
    const [state, setState] = React.useState(false)

    const handleOpenDrawer = () => {
        setState(true)
    }

    const handleCloseDrawer = () => {
        setState(false)
    }

    const list = () => (

        <Box
            role="presentation"
        >
            <List>
                <ListItem key={'Orders'} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <CreditCardIcon />
                            <ListItemText primary="Orders" />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                <ListItem key={"Inbox"} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ShowChartIcon />
                            <ListItemText primary="Market" />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                <ListItem key={"Portfolio"} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <RequestQuoteIcon />
                            <ListItemText primary="Portfolio" />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List sx={{ justifyContent: "flex-end" }}>
                <ListItem key={"AI"} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ContactSupportIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Contact AI Support"} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <React.Fragment>
            <Button onClick={handleOpenDrawer}>Hello</Button>
            <SwipeableDrawer open={state} onClose={handleCloseDrawer} onOpen={handleOpenDrawer}>
                {list()}
            </SwipeableDrawer>
        </React.Fragment>

    )
}