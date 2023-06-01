import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}
