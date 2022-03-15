import ButtonSubmit from "../formElements/ButtonSubmit";
import InputText from "../formElements/InputText";
import LegalConditionsCheck from "../formElements/LegalConditionsCheck";
import SecondButton from "../formElements/SecondButton";

type Props = {
    changeForm: () => void
}

export default function RegisterForm({ changeForm }: Props) {
  return (
    <form className="grid grid-cols-1">
        <InputText type="email" name="email" label="Email"/>
        <InputText type="password" name="password" label="Contraseña"/>
        <InputText type="name" name="name" label="Nombre"/>
        <LegalConditionsCheck/>
        <ButtonSubmit text="Registrarse"/>
        <SecondButton clickEvent={ changeForm } text="Iniciar sesión"/>
    </form>
  )
}
