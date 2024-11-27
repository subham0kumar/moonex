import { useEffect, useRef, useState } from "react";
import "./App.css";
import Loader from "./Components/Loader/Loader";
import Navbar from "./Components/Navbar";
import { PreloadImages } from "./Components/Preloader";
import About from "./Sections/About";
import FAQs from "./Sections/FAQs";
import Features from "./Sections/Features";
import Footer from "./Sections/Footer";
import Hero from "./Sections/Hero";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);
  const faqsRef = useRef(null);
  const contactRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const imageUrls = [];

  useEffect(() => {
    let timer1 = setTimeout(async () => {
      try {
        await PreloadImages(imageUrls);
        setLoading(false);
      } catch (error) {
        console.error("Error loading images:", error);
        setLoading(false);
      }
    }, 1500);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="">
          <Navbar
            refs={{
              home: homeRef,
              about: aboutRef,
              features: featuresRef,
              faqs: faqsRef,
              contact: contactRef,
            }}
          />
          <Hero ref={homeRef} />
          <About ref={aboutRef} />
          <Features ref={featuresRef} />
          <FAQs ref={faqsRef} />
          <Footer ref={contactRef} />
        </div>
      )}
    </>
  );
}

export default App;
