import { Paper, Link } from '@mui/material'
import { Box } from '@mui/material';
import Image from 'next/image';
import baseLogo from '@/public/logo.jpg'
import { IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    return (
        <Paper sx={{
            marginTop: 'calc(10% + 60px)',
            position: 'absolute',
            bottom: 0,
            width: '100%'
        }}>
            <Box sx={{
                flexGrow: 1,
                justifyContent: "flex",
                display: "flex",
                my: 1,
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
                    <IconButton size='large'>
                        <InstagramIcon />
                    </IconButton>
                    <IconButton target='_blank' href='https://www.linkedin.com/in/sourashis-bhowmik-31366b156/' size='large'>
                        <LinkedInIcon />
                    </IconButton>
                </Box>
            </Box>
            <Box sx={{ px: '.6rem', my: 0, justifyContent: 'center', flexGrow: 1 }}>
                <Link target="_blank" rel="noopener noreferer"
                    underline="hover"
                    color={'rgba(108, 169, 216, 1)'} href="https://github.com/SourashisB">More from this creator
                </Link>
            </Box>
        </Paper>
    )
}