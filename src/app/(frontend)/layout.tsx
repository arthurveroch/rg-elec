import { manrope } from '../lib/fonts'
import './globals.css'

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={manrope.className}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
