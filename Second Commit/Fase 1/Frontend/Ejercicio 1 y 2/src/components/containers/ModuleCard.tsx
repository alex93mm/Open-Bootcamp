type Props = {
    module: {id: string, name: string, title: string, image: string, discusses: string}
}

export default function ModuleCard({ module }: Props) {
  return (
    <div className="duration-300 ease-in-out transform bg-white rounded-lg h-52 hover:cursor-pointer hover:shadow-xl">
        <div className="grid h-20 grid-cols-[0.33fr_0.66fr] p-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-t-lg">
            <div className="w-10 h-10 p-0.5 text-2xl font-semibold text-center bg-darkBlue rounded-full text-white">
                {module.id}
            </div>
            <span className="pt-2 font-bold text-white">{ module.name }</span>
        </div>
        <div className="h-24 p-6 font-bold">
            {module.title}
        </div>
        <div className="grid grid-cols-[0.1fr_0.6fr] pl-6 text-xs font-semibold text-slate-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
            <span className="p-0.5 w-40">{module.discusses} Respuestas</span> 
        </div>
    </div>
  )
}
