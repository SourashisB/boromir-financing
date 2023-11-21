"use client"
import { Suspense } from 'react';
import ThemeRegistry from './ThemeRegistry';
import Footer from '@/components/Footer';


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Suspense>
          <div className="w-full">
            <div className="mx-8 max-w-2xl py-20 sm:mx-auto">
            <ThemeRegistry options={{ key: 'mui' }}>{children}</ThemeRegistry>
            <Footer />
            </div>
          </div>
        </Suspense>
      </body>
    </html>
  );
}