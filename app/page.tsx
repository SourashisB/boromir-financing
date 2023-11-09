"use client"

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Box, Container } from "@mui/material";
export default function Home() {
  return (
    <React.Fragment>
      <Header/>
        <Container maxWidth="lg" >
        <Box sx={{ bgcolor: '#cfe8fc', height: '100%' }}>
            
          </Box>
        </Container>
      <Footer/>
    </React.Fragment>
  )
}