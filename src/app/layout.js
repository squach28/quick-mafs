import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import AuthProvider from '@/components/AuthProvider/AuthProvider'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Quick Mafs',
  description: 'Super Duper Fun Math Game!',
}

export default function RootLayout({ children }) {
  return (
      <html>
        <body className={inter.className}>
        <AuthProvider>
          <div>
            <Navbar />
            {children}
          </div>
        </AuthProvider>
        </body>
      </html>
  )
}
