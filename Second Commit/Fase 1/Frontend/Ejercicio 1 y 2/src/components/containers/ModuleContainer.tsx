import ModuleCard from "./ModuleCard";

type Props = {
    selectedTheme: {name: string, image: string}
}

export default function ModuleContainer({ selectedTheme }: Props) {


    const modules: Object[] = [
        {id:"1" , name: "General", title:"Dudas Generales", image: "/src/resources/tmpImages/Angular.svg", discusses: "123"},
        {id:"2" , name: "Errores", title:"Errores", image: "/src/resources/tmpImages/azure-2.svg", discusses: "123"},
        {id:"3" , name: "Proyectos", title:"Proyectos", image: "/src/resources/tmpImages/Git.svg", discusses: "123"},
        {id:"4" , name: "Modulo 1", title:"Hola mundo", image: "/src/resources/tmpImages/Java.svg", discusses: "123"},
        {id:"5" , name: "Modulo 2", title:"Primer archivo", image: "/src/resources/tmpImages/Java.svg", discusses: "123"},
        {id:"6" , name: "Modulo 3", title:"Variables", image: "/src/resources/tmpImages/Java.svg", discusses: "123"},
        {id:"7" , name: "Modulo 4", title:"Aprendido lo basico del framework", image: "/src/resources/tmpImages/Java.svg", discusses: "12"},
        {id:"8" , name: "Modulo 5", title:"Subida archivo", image: "/src/resources/tmpImages/Java.svg", discusses: "123"},
        {id:"9" , name: "Modulo 6", title:"Librerias", image: "/src/resources/tmpImages/Java.svg", discusses: "123"},
        {id:"10" , name: "Modulo 7", title:"Bucles", image: "/src/resources/tmpImages/Java.svg", discusses: "123"},
        {id:"11" , name: "Modulo 8", title:"Condicionales", image: "/src/resources/tmpImages/Java.svg", discusses: "123"},
        {id:"12" , name: "Modulo 9", title:"Exportaciones", image: "/src/resources/tmpImages/Java.svg", discusses: "123"},
        {id:"13" , name: "Modulo 10", title:"API REST", image: "/src/resources/tmpImages/Java.svg", discusses: "123"},
        {id:"14" , name: "Modulo 11", title:"Controladores", image: "/src/resources/tmpImages/Java.svg", discusses: "123"},
        {id:"15" , name: "Modulo 12", title:"Servicios", image: "/src/resources/tmpImages/Java.svg", discusses: "123"},
        {id:"16" , name: "Modulo 13", title:"Modelo de datos", image: "/src/resources/tmpImages/Java.svg", discusses: "123"},
    ]

  return (
    <div className="grid grid-cols-2 gap-3 xl:grid-cols-5 sm:grid-cols-3 md:grid-cols-4">
        {selectedTheme.name != '' 
        ? (modules.map((module: any, index)=> {
            return <ModuleCard key={index} module={module}/>;
        }))
        : null}
    </div>
  )
}
