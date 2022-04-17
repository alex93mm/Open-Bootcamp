export default function ThemeSearch() {
  return (
    <div className="py-3">
        <span className='absolute p-2 pl-3 text-slate-400'>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </span>
        <input className='w-24 p-1 pl-10 text-xs font-semibold rounded-lg sm:min-w-full h-9 bg-slate-200 focus:border-white' 
        type="text" 
        placeholder="Buscar..."/>
    </div>
  )
}
