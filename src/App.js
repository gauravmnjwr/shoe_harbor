import "./App.css";
import AboutUs from "./components/About/AboutUs";
import Categories from "./components/Categories/Categories";
import Heading from "./components/Heading/Heading";
import Navbar from "./components/Navbar/Navbar";
import PromotionsAndOffers from "./components/PromotionsAndOffers/PromotionsAndOffers";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Heading />
      <PromotionsAndOffers />
      <Categories />
      <Testimonials />
      <AboutUs />
    </div>
  );
}

export default App;
