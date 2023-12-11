import { Box, Toolbar } from "@mui/material";
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
import CustomDrawer from "./Drawer";
import PersonIcon from '@mui/icons-material/Person';
import { useRouter } from "next/router";
import {Link} from "@mui/material";


const Header: React.FC = () => {
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

    const settings2=[
        {
            name:'Profile',
            link:''
        },
        {
            name:'Account',
            link:''
        },
        {
            name:'Dashboard',
            link:''
        },
        {
            name:'Login',
            link:'/user/login'
        }
    ]




    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleClick = (link:string) => {}

    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar>
                    <React.Fragment>
                        <CustomDrawer />
                    </React.Fragment>
                    <Box justifyContent="center" flexGrow={1} display={"flex"}>
                        <Image
                            src={flatLogo}
                            alt="Boromir Financing Logo"
                            width={550}
                            height={90}
                            blurDataURL="bleeeee"
                            
                        />
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="User">
                                    <PersonIcon/>
                                </Avatar>
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
                            {settings2.map((setting) => (
                                <MenuItem key={setting.name} >
                                    <Link  href={setting.link} underline='none' sx={{color:'black'}}>{setting.name}</Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}


export default Header;