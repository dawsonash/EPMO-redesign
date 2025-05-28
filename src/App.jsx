import "./App.css";
import Header from "./components/layout/Header";
import AboutUs from "./components/pages/AboutUs";
import Contact from "./components/pages/Contact";
import Donate from "./components/pages/Donate";
import Home from "./components/pages/Home";
import OurObservatory from "./components/pages/OurObservatory";
import Projects from "./components/pages/Projects";
import Resources from "./components/pages/Resources";
import Visit from "./components/pages/Visit";
import Volunteer from "./components/pages/Volunteer";
import { Provider } from "./components/ui/provider";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Provider>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/ourobservatory" element={<OurObservatory />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/visit" element={<Visit />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Provider>
  );
}

export default App;
