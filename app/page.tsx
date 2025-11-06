import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Stats from "./components/Stats";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import SchemaOrg from "./components/SchemaOrg";
import { localBusinessSchema, organizationSchema, websiteSchema } from "./utils/schemas";

export default function Home() {
  return (
    <>
      {/* Structured Data for SEO */}
      <SchemaOrg schema={localBusinessSchema} />
      <SchemaOrg schema={organizationSchema} />
      <SchemaOrg schema={websiteSchema} />
      
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Stats />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
