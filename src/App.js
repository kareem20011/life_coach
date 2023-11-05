import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Testimonials from "./pages/Testimonials";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import NoPage from "./pages/NoPage";
class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
  componentDidMount() {
    AOS.init();
  }
}
export default App;
