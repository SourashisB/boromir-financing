"use client"

import React, {useState, useEffect} from "react";
import Header from "@/components/Header";
import styles from '@/app/styles.module.css';
import { Link } from '@mui/material';
import { Feed, Newspaper, AssuredWorkload } from "@mui/icons-material";

export default function CorporateBanking() {
    
    const [currentTitle, setCurrentTitle] = useState(0);

    const titleItems = [
        {
            title: 'Business Opportunities in ASEAN  ',
            icon: <Feed style={{ color: 'white', scale: '2', marginTop: '5px', marginRight: '25px' }} />,
            subtext: ''
        },
        {
            title: 'Meet the leaders of tomorrow  ',
            icon: <Newspaper style={{ color: 'white', scale: '2 ', marginTop: '5px', marginRight: '25px' }} />,
            subtext: ''
        },
        {
            title: 'Where have all the jobs gone  ',
            icon: <AssuredWorkload style={{ color: 'white', scale: '2 ', marginTop: '5px', marginRight: '25px' }} />,
            subtext: ''
        }
    ]
    
    useEffect(()=> {
        setCurrentTitle(Math.floor(Math.random() * titleItems.length))
    }, [])
    
    
    return (
        <div style={{ height: '1200px' }}>
            <Header />
            <div className={styles.headline2} style={{ backgroundImage: `url('corporate/headline.png')`, "backgroundSize": "cover", height: "45%" }}>
                <div className={styles.insideTitle}>
                    <Link variant="h2" style={{ color: 'white', paddingLeft: '25px', cursor:'pointer' }} underline="hover">
                        {titleItems[currentTitle].icon}
                        {titleItems[currentTitle].title}
                    </Link>
                </div>
            </div>
        </div>
    )
}