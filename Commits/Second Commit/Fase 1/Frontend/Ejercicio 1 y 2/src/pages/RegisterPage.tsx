import Footer from "../components/containers/Footer";
import RegisterForm from "../components/pure/forms/RegisterForm";
import HomeBackground from "../components/pure/BackgroundHome";
import Logo from "../components/pure/Logo";
import SloganSection from "../components/pure/SloganSection";

export default function RegisterPage() {


  return (
    <div className='grid min-h-screen bg-darkBlue 
        xl:grid-cols-[0.4fr_1fr]'>
        <div className="pt-24 mx-auto w-80">
          <Logo/>
          <RegisterForm />
          <Footer/>
        </div>
        <div className="hidden xl:block">
          <HomeBackground/>
          <SloganSection/>
        </div>
    </div>
  )
}
