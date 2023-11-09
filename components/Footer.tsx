import { Paper, Link } from '@mui/material'
import { Box } from '@mui/material';
import Image from 'next/image';
import baseLogo from '@/public/logo.jpg'


export default function Footer() {
    return (
        <Paper sx={{
            marginTop: 'calc(10% + 60px)',
            position: 'fixed',
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
                    width={203.76}
                    height={99.36} />

            </Box>
            <Box sx={{ px: '1rem', my: 0, justifyContent: 'center', flexGrow: 1 }}>
                <Link target="_blank" rel="noopener noreferer" underline="hover" color={'rgba(108, 169, 216, 1)'} href="https://github.com/SourashisB">More from this creator</Link>
            </Box>
        </Paper>
    )
}