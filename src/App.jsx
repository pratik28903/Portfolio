import "./App.css";
import Cv from "./components/cv/Cv";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header.jsx";
import Project from "./components/projects/Project";
import ScrollUp from "./components/scrollup/ScrollUp";
import Qualification from "./components/qualification/Qualification";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Project />
        <Contact />
        <Footer />
        <ScrollUp />
      </main>
      <Router>
        <Routes>
          <Route path="/Cv" component={Cv} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
