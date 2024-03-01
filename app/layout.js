import { Open_Sans } from "next/font/google"
import "./globals.css"
import NavBar from "@/components/NavBar"

const opensans = Open_Sans({ subsets: ["latin"], weight: ["variable"] })

export const metadata = {
  title: "Industry 55",
  description: "Dejte své nemovitosti čerstvý nádech",
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png',
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={`${opensans.className} scroll-smooth`}>
        <NavBar />
        {children}</body>
    </html>
  )
}
