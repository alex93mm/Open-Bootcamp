export default function ButtonBack() {
  return (
    <div className="grid grid-cols-2 col-end-1 ml-12">
        <button className="grid w-32 grid-cols-[0.1fr_0.9fr] p-2 pl-4 text-sm font-extrabold rounded-lg bg-slate-300 transition duration-300 ease-in-out hover:shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
            Volver
        </button>
    </div>
  )
}
