"use client"

import React, { useEffect, useState } from "react"
import styles from './styles.module.css';
import Header from "@/components/Header";
import CarouselCards from "@/components/CarouselCards";
import { Typography, Link } from "@mui/material";

interface CardProps {
  typeText: string,
  photograph: any

}

export default function Home() {

  const messageBox = ["Switching Phones?  >", "Refer your friends", "now!"]
  const items = [
    {
      image: '/insurance-photo-1.jpg',
      title: 'Find Out More',
      description: 'Explore a wide variety of insurance prodcuts for sale',
    },
    {
      image: '/insurance-photo-2.jpg',
      title: 'Find Out More',
      description: 'See how you can keep your family safe from life challenges',
    },
    {
      image: '/insurance-photo-3.jpg',
      title: 'Find Out More',
      description: 'Travel Stress Free with our unique and customisable options'
    }
    // Add more items as needed...
  ];
  return (
    <>
      <Header />
      <br />
      <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: '.6rem', width: '100%'}}>
        <CarouselCards items={items} />
        <img src="/clipart2.png" style={{width: '280px', height: '280px', opacity: 0.75}}/>
        <div className={styles.box2}>
          <Link variant="h4" color='#FFFFFF'>
            {messageBox[0]}
          </Link>

          <Typography variant="body1" sx={{fontWeight: 'bold'}} color='#FFFFFF'>
            Just a few more steps for you to {<br/>} access the BF app on your phone
          </Typography>
          <div className={styles.divider}/>
          <Link variant="h4" color='#FFFFFF'>
            {messageBox[1]} {<br/>} {messageBox[2]}
          </Link>
          <Typography variant="body1" sx={{fontWeight: 'bold'}} color='#FFFFFF'>
            Receive exclusive discounts {<br/>} when your referral code is used
          </Typography>
        </div>

      </div>
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
      <br />
    </ >
  )
}
