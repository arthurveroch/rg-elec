import { manrope } from '../lib/fonts'
import Navbar from './components/navbar/Navbar'
import './globals.css'

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={manrope.className}>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
