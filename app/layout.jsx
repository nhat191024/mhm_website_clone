import '@styles/globals.css';
import Nav from '@components/navBar'

export const metadata = {
    title: 'mhm clone',
    description: 'mhm clone',
}
const rootLayout = ({ children }) => {
  return (
    <html lang='vi'>
        <body>
            <div className="main">
                <div className="gradient" />
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