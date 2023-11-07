import { Box, SwipeableDrawer, Toolbar } from "@mui/material";
import * as React from 'react';
import { AppBar } from "@mui/material";
import { IconButton } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';
import { Typography } from "@mui/material";
import { MenuItem } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Image from "next/image";
import Menu from '@mui/material/Menu';
import flatLogo from '@/public/logo-flat.png';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import List from '@mui/icons-material/List';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';


export default function Header() {
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

    const [state, setState] = React.useState(false)

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

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
                <ListItem  disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <CreditCardIcon />
                            <ListItemText primary="Orders" />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                <ListItem  disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ShowChartIcon />
                            <ListItemText primary="Market" />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                <ListItem  disablePadding>
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
                <ListItem  disablePadding>
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
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleOpenDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <Image
                        src={flatLogo}
                        alt="Logo Pictures"
                        width={550}
                        height={90} />
                    <Box flexGrow={1} />

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
            <SwipeableDrawer open={state} onClose={handleCloseDrawer} onOpen={handleOpenDrawer}>
                {list()}
            </SwipeableDrawer>
        </React.Fragment>
    )
}