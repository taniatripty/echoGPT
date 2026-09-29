import FAQ from "@/components/landing/FAQ";
import Hero from "@/components/landing/Hero";
import Pricing from "@/components/landing/Pricing";
import Testimonials from "@/components/landing/Testimonial";
import WhyChooseEchoGPT from "@/components/landing/WhyChoose";
import AIModels from "../(webapp)/chatDashboard/AllAIModels/page";
import Features from "./features/page";
import ProductPreview from "@/components/landing/ProductPreview";

export default function page() {
  return (
    <div>
      <Hero></Hero>
      <AIModels></AIModels>
      <Features></Features>
      <ProductPreview></ProductPreview>
      <FAQ></FAQ>
      <WhyChooseEchoGPT></WhyChooseEchoGPT>
      <Pricing></Pricing>
      <Testimonials></Testimonials>
    </div>
  );
}
