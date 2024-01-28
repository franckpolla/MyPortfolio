import "./App.css";
import Header from "./components/Header/header";
import Nav from "./components/nav/nav";
import About from "./components/about/About";
import Experience from "./components/experience/experience";
import Services from "./components/services/services";
import Portfolio from "./components/portfolio/portfolio";
import Testimonial from "./components/testimonial/testimonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <div>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
