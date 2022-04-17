import { ReactElement, useState } from "react";

export default function ButtonFollow() {

    const [follow, setFollow] = useState(false)

    const styleButton: string = "w-40 mt-4 h-10 p-2.5 pl-6 col-start-12 transition duration-300 ease-in-out hover:shadow-md font-semibold text-sm" 

    const styledConditional:string = follow 
        ? " bg-green-100 rounded-lg text-green-500" 
        : " bg-white rounded-lg text-black";
    
    const textButton: ReactElement<any, any> = follow 
        ?(<div className="grid grid-cols-[0.1fr_0.8fr]">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Siguiendo
        </div>)
        : (<div className="grid grid-cols-[0.1fr_0.8fr]">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Seguir
        </div>) 
    
    
  return (

    <button onClick={() => setFollow(!follow)} className={styleButton + styledConditional}>
        { textButton }
    </button>
        
  )
}
