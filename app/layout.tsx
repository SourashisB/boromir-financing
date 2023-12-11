"use client"
import { Suspense } from 'react';
import ThemeRegistry from './ThemeRegistry';
import Footer from '@/components/Footer';
import styles from './styles.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={styles.mainBody}>
        <div id="root">
          <div className="content">
            <Suspense>
              <ThemeRegistry options={{ key: 'mui' }}>{children}</ThemeRegistry>
            </Suspense>
          </div>
          <footer className='footer'>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}