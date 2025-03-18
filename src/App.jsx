import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes instead of Switch
import Header from "./components/landingPage/Header";
import Notice from "./components/landingPage/Notice";
import Services from "./components/landingPage/Services";
import SliderAndMessage from "./components/landingPage/sliderAndMessage";
import TOandTGList from "./components/landingPage/tOandtGList";
import Video from "./components/landingPage/Video";
import PopularDestination from "./components/landingPage/popularDestination";
import Contact from "./components/landingPage/Contact"; // Import the Contact component
import Map from "./components/landingPage/Map";
import Footer from "./components/landingPage/Footer";

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
              <div id="services"><Services /></div> {/* Services section */}
              <TOandTGList />
              <Video />
              <PopularDestination />
              <Map />
              <Footer />
            </>
          }
        />
        {/* Define route for Contact page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
