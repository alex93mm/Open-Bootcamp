import React, { useState } from "react";
import { loginFetch } from "../../../axios/AuthController";
import { useAuth } from "../../../context/authContext";
import ButtonSubmit from "../formElements/ButtonSubmit";
import InputText from "../formElements/InputText";
import PasswordLink from "../formElements/PasswordLink";
import RememberCheck from "../formElements/RememberCheck";
import SecondButton from "../formElements/SecondButton";

export default function LoginForm() {

  const [loading, setLoading] = useState(false)
  const { token, setToken } = useAuth()

  const loginMethod = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    setLoading(true)

    const target = e.target as typeof e.target & {
      email: { value: string }
      password: { value: string }
      remember: { value: boolean }
    }

    const email = target.email.value
    const password = target.password.value
    const remember = target.remember

    const token: string = await loginFetch(email, password) || ''

    alert(remember)

    remember
      ?
      localStorage.setItem('token', token)
      :
      sessionStorage.setItem('token', token)

    setToken(token)

    setLoading(false)
  }

  return (
    <form className="grid grid-cols-1" onSubmit={(event) => loginMethod(event)}>
      <InputText type="email" name="email" label="Email" />
      <InputText type="password" name="password" label="Contraseña" />
      <div className="grid grid-cols-3 mt-6 ">
        <RememberCheck />
        <PasswordLink />
      </div>
      <ButtonSubmit loading={loading} text="Iniciar sesión" />
      <SecondButton href="/register" text="Registrarse" />
    </form>
  )
}
