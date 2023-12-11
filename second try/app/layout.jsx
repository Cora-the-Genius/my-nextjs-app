import Navbar from '@/components/Navbar'
import './globals.css'


export const metadata = {
  title: 'Cora',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
