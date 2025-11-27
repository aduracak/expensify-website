import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Expensify – Premium Digital Solutions</title>
        <meta 
          name="description" 
          content="Expensify delivers premium digital solutions. Specialized in web development, modern design, and digital strategies that bring results." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" 
          rel="stylesheet" 
        />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
