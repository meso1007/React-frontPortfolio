import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Compo/About/About";
import Header from "./Compo/Header/Header";
import Contact from "./Compo/Contact/Contact";
import Footer from "./Compo/Footer/Footer";
import Works from "./Pages/Works/Works";
import Gallery from "./Pages/Gallery/Gallery";
import Hero from "./Compo/Hero/Hero";
import Games from "./Pages/Games/Games";
import ToGame from "./Compo/ToGame/ToGame";
import NotFound from "./Pages/NotFound/NotFound";
import ScrollToTopButton from "./Compo/ScrollToTopButton/ScrollToTopButton";

function App() {
  return (
    <div className="w-[100vw] overflow-hidden">
      <Header />
      <div className="bodyCompos bg-ori_white">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ScrollToTopButton />
                <Hero />
                <div className="relative w-full">
                  <img
                    src="./assets/steps.svg"
                    alt="step"
                    className="top-0 w-full z-10"
                  />
                </div>
                <About />
                <div className="relative w-full">
                  <img
                    src="./assets/wave-haikei.svg"
                    alt="step"
                    className=" top-0 w-full z-10"
                  />
                </div>
                <ToGame />
                <Contact />
                <div className="relative w-full">
                  <img
                    src="./assets/wave-layer.svg"
                    alt="step"
                    className="top-0 w-full z-10"
                  />
                </div>
              </>
            }
          />
          <Route path="/works" element={<Works />} />
          <Route
            className="absolute top-0"
            path="/gallery"
            element={<Gallery />}
          />
          <Route path="/games" element={<Games />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
