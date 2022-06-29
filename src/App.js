import "./App.css";
import NavBar from "./components/navBar";
import Home from "./components/Home";
import Social from "./components/Social";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App dark:bg-gray-900 dark:bg-opacity-95 bg-white bg-opacity-90 text-gray-900 overflow-x-hidden ">
      <Social />
      <header className="">
        <NavBar />
      </header>
      <section id="Home">
        <Home />
      </section>
      <section id="Work" className="">
        <Work />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section id="Contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
