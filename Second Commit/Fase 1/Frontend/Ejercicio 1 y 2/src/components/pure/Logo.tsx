import logo from "../../resources/images/logo.svg";

export default function Logo() {
  return (
    <div className="grid grid-cols-2 p-10 mx-auto w-80">
        <img className="w-12 h-12 col-end-1 mr-3 ml-9" src={logo}/>
        <h2 className="mt-1 text-xl font-semibold leading-5 text-white align-bottom font-poppins">Open <br/> Bootcamp</h2>
    </div>
  )
}
