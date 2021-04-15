import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import Hero from '../components/Hero.js'
import Clouds from '../components/Clouds.js'
import Metrics from '../components/Metrics.js'
import Features from '../components/Features.js'
import Footer from '../components/Footer.js'

export default function Home() {
  return (
    <div>

      <Hero></Hero>
      <Clouds></Clouds>

      <Features></Features>
      <Metrics></Metrics>

      
      <Footer></Footer>
      
       

      
    </div>
  )
}
