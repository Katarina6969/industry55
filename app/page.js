import Hero from "@/components/Hero"
import { AboutUs, Engineer, Services, Testimonials, Map, ContactForm, Footer } from "@/components/"
export default function Home() {
  return (
    <main className="dark:bg-gray-800 bg-white relative  ">
      <Hero />
      <AboutUs />
      <Engineer dark={true} />
      <Services />
      <Testimonials />
      <Map />
      <ContactForm />
      <Footer />
    </main>
  )
}
