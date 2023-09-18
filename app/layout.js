import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    subsets: ["latin"],
    weight:["100","300","400","500","700","900"] 
  })

export const metadata = {
  title: 'Saqib Hussain',
  description: 'Saqib Hussain, a skilled Frontend Web Developer equiped with modern tools like React and NextJs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=' scroll-smooth scroll-pt-16 sm:scroll-pt-12'>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
