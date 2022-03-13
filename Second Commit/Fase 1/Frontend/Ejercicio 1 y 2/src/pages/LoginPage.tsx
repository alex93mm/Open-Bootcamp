import { useState } from "react";
import Footer from "../components/pure/Footer";
import LoginForm from "../components/pure/forms/LoginForm";
import RegisterForm from "../components/pure/forms/RegisterForm";
import Logo from "../components/pure/Logo";
import SloganSection from "../components/pure/SloganSection";

export default function LoginPage() {

  const [loginForm, setLoginForm] = useState(true)

  return (
    <div className='grid min-h-screen bg-darkBlue xl:grid-cols-[0.4fr_1fr]'>
        <div className="pt-24 mx-auto w-80">
          <Logo/>
          { loginForm 
          ?
          (<LoginForm changeForm={ () => {setLoginForm(!loginForm)} }/>)
          :
          <RegisterForm changeForm={ () => {setLoginForm(!loginForm)} }/>}
          <Footer/>
        </div>
        <div className="hidden xl:block">
          <div className="min-h-full bg-cover opacity-30 bg-sloganSection"></div>
            <SloganSection/>
        </div>
    </div>
  )
}
