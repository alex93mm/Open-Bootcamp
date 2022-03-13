import ButtonSubmit from "../formElements/ButtonSubmit";
import InputText from "../formElements/InputText";
import PasswordLink from "../formElements/PasswordLink";
import RememberCheck from "../formElements/RememberCheck";
import SecondButton from "../formElements/SecondButton";

type Props = {
    changeForm: () => void
}

export default function LoginForm({ changeForm }: Props) {
  return (
    <form className="grid grid-cols-1">
        <InputText type="email" name="email" label="Email"/>
        <InputText type="password" name="password" label="Contraseña"/>
        <div className="grid grid-cols-3 mt-6 ">
            <RememberCheck/>
            <PasswordLink/>
        </div>
        <ButtonSubmit text="Iniciar sesión"/>
        <SecondButton clickEvent={ changeForm } text="Registrarse"/>
    </form>
  )
}
