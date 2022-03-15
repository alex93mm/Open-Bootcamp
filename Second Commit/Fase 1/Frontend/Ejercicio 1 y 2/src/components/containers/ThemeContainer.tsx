import { useState } from "react";
import ThemeSection from "./ThemeSection";
import NavBar from "./NavBar";
import ModuleContainer from "./ModuleContainer";

export default function ThemeContainer() {

    const [selectedTheme, setSelectedTheme] = useState({name: '', image: ''})
    // const [isLoading, setLoading] = useState(false)

    const setTheme = (theme: {name: string, image: string}) => {
        // setLoading(true)
        // setTimeout(() => {setSelectedTheme(theme); setLoading(false);}, 1500);
        setSelectedTheme(theme);
        
    }

  return (
    <div className=' grid grid-cols-[0.2fr_0.8fr] gap-4 p-10 mx-0 xl:px-24 xl:grid-cols-[0.2fr_0.9fr] md:px-10 sm:px-6'>   
            <NavBar selectedTheme={ selectedTheme } setSelectedTheme={ setTheme }/>
            {/* Theme / Modules container */}
            <div className="grid grid-cols-1 gap-12">  
                <ThemeSection selectedTheme={ selectedTheme } isLoading= { false } />
                <ModuleContainer selectedTheme={ selectedTheme }/>
            </div> 
    </div>
  )
}
