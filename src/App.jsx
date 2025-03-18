import Header from "./components/landingPage/Header";
import Notice from "./components/landingPage/Notice";
import Services from "./components/landingPage/Services";
import SliderAndMessage from "./components/landingPage/sliderAndMessage";
import TOandTGList from "./components/landingPage/tOandtGList"
import Video from "./components/landingPage/Video";

function App() {
  return (
    <>
       <Header/>
       <SliderAndMessage />
       <Notice />
       <Services />
       <TOandTGList />
       <Video />
    </>
 
  )
}

export default App;
