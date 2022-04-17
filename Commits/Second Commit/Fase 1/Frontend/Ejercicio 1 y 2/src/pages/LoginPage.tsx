import Footer from "../components/containers/Footer";
import LoginForm from "../components/pure/forms/LoginForm";
import HomeBackground from "../components/pure/BackgroundHome";
import Logo from "../components/pure/Logo";
import SloganSection from "../components/pure/SloganSection";

export default function LoginPage() {

  return (
    <div className='grid min-h-screen bg-darkBlue 
        xl:grid-cols-[0.4fr_1fr]'>
        <div className="pt-24 mx-auto w-80">
          <Logo/>
          <LoginForm />
          <Footer/>
        </div>
        <div className="hidden xl:block">
          <HomeBackground/>
          <SloganSection/>
        </div>
    </div>
  )
}
