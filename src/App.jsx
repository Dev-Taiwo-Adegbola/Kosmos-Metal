import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Portfolio from "./pages/Portfolio";
import OurServices from "./pages/OurServices";
import PageHeader from "./components/PageHeader";

function App() {
  return (
    <>
      <Router>
        <PageHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<OurServices />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
