import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Feature from "./sections/Features"
import Footer from "./sections/Footer";
import Timeline from "./sections/Timeline";
import "./index.css"
import Feedback from "./sections/Feedback";
export default function App() {
  return (
    <div className="min-h-0">
      <Navbar />
      <Hero />
      <Feature/>
      <Timeline/>
      <Feedback/>
      <Footer/>
    </div>
  );
}