"use client"

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Box, Container, Button, Typography } from "@mui/material";
import insPhoto from '../public/insurance-photo-1.jpg';
import { Card, CardActionArea, CardMedia, CardContent } from "@mui/material";
import Image from "next/image";


export default function Home() {

  const media = {
    width: "100px",
    height: "100px",

  }
  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="lg" sx={{ py: 0.5, my: 0.5 }}>
        <Box sx={{ mx: 0.5, fontWeight: 'bold', display: 'flex', justifyContent: 'center' }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia>
                <Image src={insPhoto} alt="insurance photo" width='380' height='230' />
              </CardMedia>
              <CardContent>
                <Typography justifyContent='center' fontWeight='bold' fontSize='14' overflow='hidden' gutterBottom>Find out more </Typography>
                <Typography justifyContent='center' gutterBottom fontSize='12'>
                  Explore a wide variety of insurance products tailored specifically to you and your family
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Container>
      <Footer />
    </React.Fragment >
  )
}
