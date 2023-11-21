"use client"

import React, { useEffect, useState } from "react"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Grid, Container, Typography, Box, Paper } from "@mui/material";
import { Card, CardActionArea, CardMedia, CardContent } from "@mui/material";
import Image from "next/image";
import Carousel from 'react-material-ui-carousel';
import photo1 from '@/public/insurance-photo-1.jpg';
import photo2 from '@/public/insurance-photo-2.jpg';
import photo3 from '@/public/insurance-photo-3.jpg';
import styles from './styles.module.css'

interface CardProps {
  typeText: string,
  photograph: any

}

export default function Home() {


  const EachCard: React.FC<CardProps> = ({ typeText, photograph }) => {
    return (
      <Container sx={{ maxWidth: 400, direction: 'column', }}>
        <Card sx={{ maxWidth: 380, }}>
          <CardActionArea>
            <CardMedia sx={{ maxWidth: 500 }}>
              <Image src={photograph} alt="insurance photo" width='380' height='230' />
            </CardMedia>
            <CardContent>
              <Typography justifyContent='center' gutterBottom fontSize='12'>
                {typeText}
              </Typography>
              <Typography justifyContent='center' fontWeight='bold' fontSize='14' overflow='hidden' gutterBottom>Find out more </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
    )
  }

  const duplicateCards = [<EachCard typeText="Explore a wide variety of insurance products for sale" photograph="photo1" />,
  ]

  return (
    <>
      <Header />
      <br />
      <Container sx={{ mx: 'sm' }}>
        <Box sx={{ maxWidth: 480 }} flexGrow={1} >
          <Carousel className="my-component" navButtonsAlwaysVisible={false} animation="slide" stopAutoPlayOnHover={true} indicatorContainerProps={{ style: { margin: "20px" } }} >
            <Container >
              <EachCard typeText="Explore a wide variety of insurance products that suit your needs" photograph={photo1} />
            </Container>
            <Container>
              <EachCard typeText="See how you can keep your family safe from life's events" photograph={photo2} />
            </Container>
            <Container  >
              <EachCard typeText="Keep yourself protected when vacationing abroad" photograph={photo3} />
            </Container>
          </Carousel>
        </Box>
      </Container>
      <br />
      <div className={styles.container}>
        <div className={styles.box}>
          <p>Hi</p>          
        </div>
        <div className={styles.box}>
          <p>Hello</p>      
        </div>
        <div className={styles.box}>
          <p>Yo</p>
        </div>
      </div>
      <br/>
    </ >
  )
}
