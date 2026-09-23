import {
  Nav,
  Hero,
  StatsBar,
  TrustedByLearners,
  Courses,
  LocationsHub,
  Why,
  Testimonials,
  Pricing,
  Faq,
  Footer,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Nav activePath="/" />
      <main>
        <Hero />
        <StatsBar />
        <TrustedByLearners />
        <Courses />
        <LocationsHub />
        <Why />
        <Testimonials />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
