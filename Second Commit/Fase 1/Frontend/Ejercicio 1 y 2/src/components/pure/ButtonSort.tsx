export default function ButtonSort() {
  return (
    <div className="col-start-12 pt-3">
        <span className='absolute p-2 pl-3 text-slate-600'>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
        </svg>
        </span>
        <select className="w-40 p-2 pl-8 text-xs font-semibold rounded-lg h-9 bg-slate-200">
            <option className="m-2" selected hidden>Ordenar por</option>
            <option className="m-2">Nombre (Asc)</option>
            <option className="m-2">Nombre (Desc)</option>
            <option className="m-2">Respuestas (Asc)</option>
            <option className="m-2">Respuestas (Desc)</option>
            <option className="m-2">Ultima modificacion</option>
            <option className="m-2">Primera modificacion</option>
        </select>
    </div>
  )
}
