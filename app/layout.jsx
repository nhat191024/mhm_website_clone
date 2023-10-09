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
        <!-- Google tag (gtag.js) -->
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-KX3B52PJD1"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-KX3B52PJD1');
            </script>
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
