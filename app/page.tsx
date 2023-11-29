"use client"

import React from "react"
import styles from './styles.module.css';
import Header from "@/components/Header";
import CarouselCards from "@/components/CarouselCards";
import { Typography, Link, IconButton } from "@mui/material";
import { ChevronRight } from '@mui/icons-material';
import { Info } from '@mui/icons-material';
import { navigateToUrl } from "@/components/utils";

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
      title: 'See Our Plans',
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
        <div className={styles.verticalDivider} />
        <div className={styles.box}>
          <Link variant="h5" sx={{ fontWeight: 'bold' }} color='#FFFFFF' underline="hover" className={styles.link2} align="left">
            Browse the newest MPF plans! {<IconButton sx={{ color: '#102542', marginTop: '-3.5px' }}><ChevronRight /></IconButton>}
          </Link>
          <br />
          <Typography variant="body2" color='#FFFFFF' align="left">
            Make climate conscious retirement decisions with our new GreenMPF Fund
          </Typography>
        </div>
        <div className={styles.verticalDivider} />
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
  function Q3() {
    return (
      <div className={styles.container2}>
          <div className={styles.box4}>
            <div className={styles.boxImage}>
              <img src="Q3-1.jpg" alt="pic 1" />
            </div>
            <div className={styles.box4bottom} >
              <Link variant="h4"  underline="hover" color={'black'} style={{'marginLeft':"10px"}}>Commercial Banking</Link>
              <Typography variant="body1" style={{ "scale": '1.0', "marginLeft": "15px" }}>Your needs are our highest priority</Typography>
            </div>
          </div>
        <div className={styles.box4}>
          <div className={styles.boxImage}>
            <img src="Q3-2.png" alt="pic 1" />
          </div>
          <div className={styles.box4bottom}>
            <Typography variant="h4" style={{ "scale": '1.0', "marginLeft": "10px" }}>Corporate Banking</Typography>
            <Typography variant="body1" style={{ "scale": '1.0', "marginLeft": "15px" }}>Your corporation is in the safest hands</Typography>
          </div>
        </div>
        <div className={styles.box4}>
          <div className={styles.boxImage}>
            <img src="Q3-3.jpg" alt="pic 1" />
          </div>
          <div className={styles.box4bottom}>
            <Typography variant="h4" style={{ "scale": '1.0', "marginLeft": "10px" }}>Consumer Banking</Typography>
            <Typography variant="body1" style={{ "scale": '1.0', "marginLeft": "13px" }}>Prepare for your future plans of success from today</Typography>
          </div>
        </div>
        <div className={styles.box4}>
          <div className={styles.boxImage}>
            <img src="Q3-4.png" alt="pic 1" />
          </div>
          <div className={styles.box4bottom}>
            <Typography variant="h4" style={{ "scale": '1.0', "marginLeft": "10px" }}>Criminal Banking</Typography>
            <Typography variant="body1" style={{ "scale": '1.0', "marginLeft": "15px" }}>Make sure your enterprise is safe from legal hands today</Typography>
          </div>
        </div>
      </div>
    )
  }
  function Q4() {
    return (
      <div className={styles.newsbox}>
        <div className={styles.newsboxText}>
          <Info style={{ "color": "white", "marginTop": "16px", "marginRight": "8px" }} />
          <p>From March 15, 2023 onwards, customers who have committed up to HKD 500,000 of tax fraud are no longer eligible
            to the reduced 5% commission rate for their agents. We apologize for the inconvenience this may cause. Let us be real, however, you should have seen
            this coming, after all, committing tax fraud is going to have some kind of repurcussion.</p>
        </div>
        <br />
        <br />
        <Info style={{ "color": "white", "marginTop": "16px", "marginRight": "8px" }} />
        <p className={styles.newsboxText}>From April 30, 2023 onwards, customers who refer other customers to join the Commercial banking or Criminal
          banking enterprise no longer receive benefits tied to the performance of the registered company or criminal enterprise</p>
      </div>
    )
  }
  return (
    <div style={{ "height": "800px" }}>
      <Header />
      <br />
      <Q1 />
      <br />
      <Q2 />
      <br />
      <br />
      <br />
      <Q3 />
      <br />
      <br />
      <Q4 />
    </div>
  )
}
