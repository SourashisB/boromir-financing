"use client"

import React from "react"
import styles from './styles.module.css';
import Header from "@/components/Header";
import CarouselCards from "@/components/CarouselCards";
import { Typography, Link, IconButton } from "@mui/material";
import { ChevronRight } from '@mui/icons-material'

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

  function Q1() {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '.6rem', width: '100%' }}>
        <CarouselCards items={items} />
        <img src="/clipart3.png" style={{ width: '310px', height: '280px', opacity: 0.9 }} />
        <div className={styles.box2}>
          <Link variant="h4" color='#FFFFFF' underline="hover" className={styles.link2}>
            {messageBox[0]}
          </Link>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }} color='#FFFFFF'>
            Just a few more steps for you to {<br />} access the BF app on your phone
          </Typography>
          <div className={styles.divider} />
          <Link variant="h4" color='#FFFFFF' underline="hover" className={styles.link2}>
            {messageBox[1]} {<br />} {messageBox[2]}
          </Link>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }} color='#FFFFFF'>
            Receive exclusive discounts {<br />} when your referral code is used
          </Typography>
        </div>

      </div>
    )
  }
  function Q2() {
    return (
      <div className={styles.container}>
        <div className={styles.box}>
          <Link variant="h5" sx={{ fontWeight: 'bold' }} color='#FFFFFF' underline="hover" className={styles.link2} align="left">
            Worry Free Tax Season! {<IconButton sx={{ color: '#102542', marginTop: '-3.5px' }}><ChevronRight /></IconButton>}
          </Link>
          <br />
          <Typography variant="body2" color='#FFFFFF' align="left">
            Apply for Cash Instalment Plan at a monthly handling fee as low as 0.13%
          </Typography>
        </div>
        <div className={styles.verticalDivider}/>
        <div className={styles.box}>
          <Link variant="h5" sx={{ fontWeight: 'bold' }} color='#FFFFFF' underline="hover" className={styles.link2} align="left">
            Browse the newest MPF plans! {<IconButton sx={{ color: '#102542', marginTop: '-3.5px' }}><ChevronRight /></IconButton>}
          </Link>
          <br />
          <Typography variant="body2" color='#FFFFFF' align="left">
            Make climate conscious retirement decisions with our new GreenMPF Fund
          </Typography>
        </div>
        <div className={styles.verticalDivider}/>
        <div className={styles.box}>
          <Link variant="h5" sx={{ fontWeight: 'bold' }} color='#FFFFFF' underline="hover" className={styles.link2} align="left">
            Unlock the trendiest Travel Rewards! {<IconButton sx={{ color: '#102542', marginTop: '-3.5px' }}><ChevronRight /></IconButton>}
          </Link>
          <br />
          <Typography variant="body2" color='#FFFFFF' align="left">
            Earn a 12% extra cashback and no international fees at selected restaurants with your cards
          </Typography>
          <Typography variant="body2" color='#FFFFFF' style={{ scale: 0.8 }} >
            T&C Apply
          </Typography>
        </div>
      </div>
    )
  }
  return (
    <>
      <Header />
      <br />
      <Q1/>
      <br />
      <Q2/>
      <br />
      <div className={styles.container2}>
        <div className={styles.box4}>
          <img src="/Q3-1.jpg" className={styles.boxImage}/>
        </div>
        <div className={styles.box4}>
          <p>hi</p>
        </div>
        <div className={styles.box4}>
          <p>hello</p>
        </div>
        <div className={styles.box4}>
          <p>pls help tall man</p>
        </div>
      </div>
    </ >
  )
}
