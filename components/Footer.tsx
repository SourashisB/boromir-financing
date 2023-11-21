import { Paper, Link } from '@mui/material'
import { Box } from '@mui/material';
import Image from 'next/image';
import baseLogo from '@/public/logo.jpg'
import { IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react';
import styles from '@/components/styles.module.css'



const  Footer: React.FC = () => {

    return (
        <footer className={styles.footer}>
            <Box sx={{
                flexGrow: 1,
                justifyContent: "flex",
                display: "flex",
                p: '1'
            }}>
                <Image src={baseLogo} alt='Boromir Financing Logo'
                    width={163}
                    height={79.448} />
                <Box sx={{
                    flexGrow: 1,
                    justifyContent: "flex-end",
                    display: "flex",
                    my: 1,
                    px: '2rem'
                }}>
                    <IconButton  className={styles.growButton} size='large' disableFocusRipple disableRipple>
                        <InstagramIcon />
                    </IconButton>
                    <IconButton className={styles.growButton} target='_blank' href='https://www.linkedin.com/in/sourashis-bhowmik-31366b156/' size='large' disableFocusRipple disableRipple>
                        <LinkedInIcon />
                    </IconButton>
                </Box>
            </Box>
            <Box sx={{ my: 0, py: 0, justifyContent: 'flex-end', flexGrow: 1 }}>
                <Link target="_blank" rel="noopener noreferer"
                    underline="hover"
                    color={'rgba(108, 169, 216, 1)'} href="https://github.com/SourashisB">More from this creator
                </Link>
            </Box>
        </footer>
    )
}

export default Footer;