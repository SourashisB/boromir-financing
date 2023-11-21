"use client"

import React, { useEffect, useState } from "react"
import styles from './styles.module.css';
import Header from "@/components/Header";
import CarouselCards from "@/components/CarouselCards";

interface CardProps {
  typeText: string,
  photograph: any

}

export default function Home() {
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
      <div>
        <CarouselCards items={items}/>
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
