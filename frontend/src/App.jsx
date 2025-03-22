import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/landingPage/Header";
import Notice from "./components/landingPage/Notice";
import Services from "./components/landingPage/Services";
import SliderAndMessage from "./components/landingPage/sliderAndMessage";
import TOandTGList from "./components/landingPage/tOandtGList";
import Video from "./components/landingPage/Video";
import PopularDestination from "./components/landingPage/popularDestination";
import Contact from "./components/landingPage/Contact";
import Map from "./components/landingPage/Map";
import Footer from "./components/landingPage/Footer";
import RegistrationForm from "./components/registrationLogin/registrationForm"; 
import LoginForm from "./components/registrationLogin/loginForm";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SliderAndMessage />
              <Notice />
              <div id="services"><Services /></div>
              <TOandTGList />
              <Video />
              <PopularDestination />
              <Map />
              <Footer />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<RegistrationForm />} /> 
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
