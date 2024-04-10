import { useEffect, useRef } from "react";
import "./App.css";
import MainGate from "@components/section/MainGate";
import Header from "@components/Header";
import Skills from "@components/section/Skills";
import Background from "@components/section/Background";
import Projects from "@components/section/Projects";
import Contact from "@components/section/Contact";
import Cursor from "./components/Cursor";

function App() {
  const firstContentRef = useRef(null);

  const goToWorkContent = () => {
    if (!firstContentRef?.current) {
      return;
    }

    firstContentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    console.log("App component mounted", firstContentRef.current);
  }, [firstContentRef]);

  return (
    <>
      <Header />
      <MainGate goToWorkContent={goToWorkContent} />
      <div ref={firstContentRef}>
        <Skills />
      </div>
      <Background />
      <Projects />
      <Contact />
      <Cursor />
    </>
  );
}

export default App;
