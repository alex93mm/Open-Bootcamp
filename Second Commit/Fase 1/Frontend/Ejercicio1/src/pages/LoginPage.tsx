import Footer from "../components/pure/Footer";
import LoginForm from "../components/pure/forms/LoginForm";
import Logo from "../components/pure/Logo";

export default function LoginPage() {
  return (
    <div className='min-h-screen bg-darkBlue'>
        <div className="mx-auto w-72">
          <Logo/>
          <LoginForm/>
          <Footer/>
        </div>
        <div>
          another col
        </div>
    </div>
  )
}
