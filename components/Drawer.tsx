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
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';

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
            <List >
                <ListItem key={"AI"} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ContactSupportIcon />
                            <ListItemText primary={"Contact AI Support"} />
                        </ListItemIcon>

                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <React.Fragment>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleOpenDrawer}>
                <MenuIcon />
            </IconButton>
            <Drawer open={state} onClose={handleCloseDrawer} onClick={handleCloseDrawer}>
                {list()}
            </Drawer>
        </React.Fragment>

    )
}

