import logo from "../../resources/images/logo.svg"

export default function UserData() {
  return (
    <div className='grid grid-cols-3 mr-10 transition duration-300 ease-in-out bg-white rounded-full hover:shadow-md hover:cursor-pointer'>
        <img className="bg-black rounded-full w-9 h-9" src={logo}/>
        <span className='text-xs font-bold leading-9'>UserName</span>
        <div className='pt-2 pl-8 text-slate-400'>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
        </div>
    </div>
  )
}
