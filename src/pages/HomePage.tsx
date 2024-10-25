import BuyingReason from "../components/HomePage/BuyingReason"
import Comment from "../components/HomePage/Comment"
import FastContact from "../components/HomePage/FastContact"
import FastOrder from "../components/HomePage/FastOrder"
import Footer from "../components/HomePage/Footer"
import HeroSection from "../components/HomePage/HeroSection"
import Home_Header from "../components/HomePage/Home_Header"
import ServiceSection from "../components/HomePage/ServiceSection"


const HomePage = () => {
  return (
    <div>
      <Home_Header/>
      <HeroSection/>
      <FastOrder/>
      <BuyingReason/>
      <FastContact/>
      <ServiceSection/>
      <Comment/>
      <Footer/>
    </div>
  )
}

export default HomePage
