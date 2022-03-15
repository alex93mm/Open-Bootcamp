import { useState } from "react";
import Footer from "../components/containers/Footer";
import LoginForm from "../components/pure/forms/LoginForm";
import RegisterForm from "../components/pure/forms/RegisterForm";
import HomeBackground from "../components/pure/BackgroundHome";
import Logo from "../components/pure/Logo";
import SloganSection from "../components/pure/SloganSection";

export default function LoginPage() {

  const [loginForm, showLoginForm] = useState(true)

  const setForm = () => {
    return loginForm 
    ? (<LoginForm changeForm={ () => {showLoginForm(!loginForm)} }/>)
    : (<RegisterForm changeForm={ () => {showLoginForm(!loginForm)} }/>)
  }

  return (
    <div className='grid min-h-screen bg-darkBlue 
        xl:grid-cols-[0.4fr_1fr]'>
        <div className="pt-24 mx-auto w-80">
          <Logo/>
          { setForm() }
          <Footer/>
        </div>
        <div className="hidden xl:block">
          <HomeBackground/>
          <SloganSection/>
        </div>
    </div>
  )
}
