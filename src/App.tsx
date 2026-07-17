import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
  Notes,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

      useEffect(() => {
        if (window.location.hash) {
          const id = window.location.hash.replace("#", "");
      
          setTimeout(() => {
            const element = document.getElementById(id);
      
            if (element) {
              const navbarHeight = 70;
      
              const y =
                element.getBoundingClientRect().top +
                window.pageYOffset -
                navbarHeight;
      
              window.scrollTo({
                top: y,
                behavior: "smooth",
              });
            }
          }, 100);
        }
      }, []);
      
    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
  <Routes>

    <Route
      path="/"
      element={
        <>
          <Main />
          <Expertise />
          <Timeline />
          <Project />
          <Contact />
        </>
      }
    />

    <Route
      path="/notes"
      element={<Notes />}
    />

  </Routes>
</FadeIn>
        <Footer />
    </div>
    );
}

export default App;