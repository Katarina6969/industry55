import { Open_Sans } from "next/font/google"
import "./globals.css"
import NavBar from "@/components/NavBar"

const opensans = Open_Sans({ subsets: ["latin"], weight: ["variable"] })

export const metadata = {
  title: "Industry 55",
  description: "Dejte své nemovitosti čerstvý nádech",
  url: "https://www.industry55.cz",
  images: [
    {
      url: "/public/Industry55_me.webp",
      width: 1200,
      height: 630,

    },
    {
      url: "/public/Industry55_x.webp",
      width: 1200,
      height: 600,

    }
  ],
  locale: "cs-CZ",
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-touch-icon.png',
    },

  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>



        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://industry55.vercel.app/" />
        <meta property="og:title" content="Industry 55" />
        <meta property="og:description" content="Dejte své nemovitosti čerstvý nádech" />
        <meta property="og:image" content="https://industry55.vercel.app/Industry55_me.webp" />


        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://industry55.vercel.app/" />
        <meta property="twitter:title" content="Industry 55" />
        <meta property="twitter:description" content="Dejte své nemovitosti čerstvý nádech" />
        <meta property="twitter:image" content="https://industry55.vercel.app/Industry55_x.webp" />
      </head>
      <body className={`${opensans.className} scroll-smooth`}>
        <NavBar />
        {children}</body>
    </html>
  )
}
