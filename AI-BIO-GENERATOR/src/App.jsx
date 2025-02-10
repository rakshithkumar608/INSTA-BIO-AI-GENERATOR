import Ads from "./components/Ads"
import Biosta from "./components/Biosta"
import Card from "./components/Card"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar";
import { FaUserCog } from "react-icons/fa";
import axios from "axios";


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
      <Ads />
      <Biosta />
      <Card />
      <Footer />
      <FaUserCog />
      <axios />

    </div>
  )
    

  
}


export default App
