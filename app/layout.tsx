import ClientOnly from './components/ClientOnly';
import RegisterModal from './components/modal/RegisterModal';
import Navbar from './components/navbar/Navbar';
import './globals.css'
import { Nunito } from 'next/font/google';
import ToasterProvider from './providers/ToasterProvider';
import LoginModal from './components/modal/LoginModal';

export const metadata = {
  title: 'SN-HUSTLER',
  description: 'SN-Hustler is a blogger',
}

const font = Nunito({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider/>
          <RegisterModal/>
          <LoginModal/>
          <Navbar/>
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
