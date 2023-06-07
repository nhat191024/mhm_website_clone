"use client"

import '@styles/globals.css';
import Nav from '@components/navBar'
import { useEffect } from 'react';

export const metadata = {
  title: 'mhm clone',
  description: 'mhm clone',
}
const rootLayout = ({ children }) => {
  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour > 18 || currentHour < 6) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, []);

  return (
    <html lang='vi'>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div className="">
          <div className=' bg-secondary-color' />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  )
}

export default rootLayout