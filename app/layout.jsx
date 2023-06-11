import '@styles/globals.css';
import Nav from '@components/navBar'
import Footer from '@components/footer'
import Social from '@components/socialMedia'
import SaleNew from '@components/saleNew';

export const metadata = {
  title: 'mhm clone',
  description: 'mhm clone',
}
const rootLayout = ({ children }) => {

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
          <Social />
          {children}
          <SaleNew />
          <Footer />
        </main>
      </body>
    </html>
  )
}

export default rootLayout