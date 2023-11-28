"use client"
import { Suspense } from 'react';
import ThemeRegistry from './ThemeRegistry';
import Footer from '@/components/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Suspense>
          <div  style={{minHeight: 'auto'}}>
            <div style={{minHeight: 'auto'}}>
              <ThemeRegistry options={{ key: 'mui' }}>{children}</ThemeRegistry>
              <Footer />
            </div>
          </div>
        </Suspense>
      </body>
    </html>
  );
}