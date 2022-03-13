import logo from "../../resources/images/logo.svg";

export default function Logo() {
  return (
    <div className="p-4 grid grid-cols-2 w-72 mx-auto">
        <img className="col-end-1 ml-9 mr-3 w-12 h-12" src={logo}/>
        <h2 className="text-white align-bottom font-poppins text-xl font-semibold leading-5 mt-1">Open <br/> Bootcamp</h2>
    </div>
  )
}
