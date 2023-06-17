// import './App.css';
import Navbar from "./components/Navbar";
import HomeCarousel from "./components/HomeCarousel";
import HomeCards from "./components/HomeCards";
import HomePropertyCards from "./components/HomePropertyCards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeCarousel />
      <HomeCards />
      {/* <HomePropertyCards/> */}
      <Footer />
    </div>
  );
}

export default App;
