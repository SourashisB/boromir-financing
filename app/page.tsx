"use client"

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Box, Container, Button } from "@mui/material";
import insPhoto from '/public/insurance-photo-1.jpg';

export default function Home() {


  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="lg" >
        <div style={{
          backgroundImage: 'url(@/public/insurance-photo-1.jpg)',
          height:'350px',
          width:'550px',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat'
        }}/>
        <Box sx={{ backgroundImage: `url(${insPhoto})`, height:'auto', width:'auto', display:'block' }}>
          <Button variant="contained" className="test-button">
            Test button
          </Button>
        </Box>
      </Container>
      <Footer />
    </React.Fragment >
  )
}