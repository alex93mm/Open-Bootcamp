import logo from "../../resources/images/logo.svg";

export default function HeaderLogo() {
  return (
    <div className="grid w-24 grid-cols-2 ml-12 sm:ml-24">
        <img className="w-8 h-8" src={logo}/>
        <h2 className="font-extrabold leading-8 text-md">OpenBootcamp</h2>
    </div>
  )
}