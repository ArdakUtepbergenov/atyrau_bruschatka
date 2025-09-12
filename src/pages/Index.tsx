import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import PavingCatalog from "@/components/PavingCatalog";
import Advantages from "@/components/Advantages";
import Contacts from "@/components/Contacts";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PavingCatalog />
        <About />
        <Portfolio />
        <Advantages />
        <ContactForm />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
