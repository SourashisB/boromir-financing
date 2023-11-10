"use client"

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper'
import { CustomButton, CustomButtonLink } from '@/components/Button';
import { TextfieldHelperLabel } from '@/components/TextFields';
import { Container } from '@mui/material';

export default function Landing() {

    return (
        <Container maxWidth={'md'}>
            <Paper sx={{
                position: 'relative',
                backgroundColor: 'secondary'
            }}
                elevation={4}>
                <Box>
                    <CustomButton buttonLink='' buttonText='lmao' onClickFunction={() => { console.log('hi') }} />
                    <TextfieldHelperLabel labelText='Name' helperText='Your Name here' />
                    <CustomButtonLink buttonLink='/' buttonText='Main' onClickFunction={{}} />
                </Box>
            </Paper>
        </Container>
    )
}
