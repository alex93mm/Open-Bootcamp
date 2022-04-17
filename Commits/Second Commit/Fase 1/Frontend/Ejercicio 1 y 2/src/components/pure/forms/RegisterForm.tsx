import { useState } from "react";
import { registerFetch } from "../../../axios/AuthController";
import { useAuth } from "../../../context/authContext";
import ButtonSubmit from "../formElements/ButtonSubmit";
import InputText from "../formElements/InputText";
import LegalConditionsCheck from "../formElements/LegalConditionsCheck";
import SecondButton from "../formElements/SecondButton";

export default function RegisterForm() {

  const [loading, setLoading] = useState(false)
  const {token, setToken} = useAuth()

  const registerMethod = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    
    setLoading(true)
    
    const target = e.target as typeof e.target & {
      email: { value: string }
      password: { value: string }
      name: { value: string }
    }
    
    const email = target.email.value
    const password = target.password.value
    const username = target.name.value

    const token: string = await registerFetch(email, password, username) || ''
   
    sessionStorage.setItem('token', token)

    setToken(token)

    setLoading(false)
  }

  return (
    <form className="grid grid-cols-1" onSubmit={ (event) => registerMethod(event) }>
        <InputText type="email" name="email" label="Email"/>
        <InputText type="password" name="password" label="Contraseña"/>
        <InputText type="name" name="name" label="Nombre"/>
        <LegalConditionsCheck/>
        <ButtonSubmit loading={ loading } text="Registrarse"/>
        <SecondButton href="/login" text="Inicio de sesion"/>
    </form>
  )
}
