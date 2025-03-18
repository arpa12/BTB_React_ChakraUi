import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Header from "./components/landingPage/Header";
// import Map from "./components/landingPage/Map";
import Notice from "./components/landingPage/Notice";
import Services from "./components/landingPage/Services";
import SliderAndMessage from "./components/landingPage/sliderAndMessage";
import TOandTGList from "./components/landingPage/tOandtGList";
import Video from "./components/landingPage/Video";
import PopularDestination from "./components/landingPage/popularDestination";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Define routes using element prop */}
        <Route path="/" element={<SliderAndMessage />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/services" element={<Services />} />
        <Route path="/to-and-tg-list" element={<TOandTGList />} />
        <Route path="/video" element={<Video />} />
        <Route path="/popular-destination" element={<PopularDestination />} />
        {/* Add a route for the Map if needed */}
        {/* <Route path="/map" element={<Map />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
