import FAQ from '@/components/landing/FAQ'
import Hero from '@/components/landing/Hero'
import Pricing from '@/components/landing/Pricing'
import Testimonials from '@/components/landing/Testimonial'
import WhyChooseEchoGPT from '@/components/landing/WhyChoose'
import React from 'react'

export default function page() {
  return (
    <div>
     <Hero></Hero>
    <FAQ></FAQ>
<WhyChooseEchoGPT></WhyChooseEchoGPT>
<Pricing></Pricing>
<Testimonials></Testimonials>
    </div>
  )
}
