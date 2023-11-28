"use client"

import { Container, Button } from '@mui/material';
import photo1 from '@/public/insurance-photo-1.jpg';
import Image from 'next/image';


export default function Landing() {

    return (
        <div>
            <Image src={photo1} alt='insurance-photo-1' style={{position: 'relative', display: 'inline-block'}}/>
            <Button sx={{
                position: 'absolute',
                top: '10%',
                left: '10%'}} variant='contained'>Hello</Button>
        </div>
    )
}
