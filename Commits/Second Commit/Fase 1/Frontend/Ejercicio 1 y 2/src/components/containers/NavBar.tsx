import { Dispatch, SetStateAction, useState } from "react"
import NavItem from "../pure/NavItem"
import { HomeIcon } from '@heroicons/react/solid'

type Props = {
    selectedTheme: { name: string, image: string },
    setSelectedTheme: (theme: { name: string, image: string }) => void,
}

export default function NavBar({ selectedTheme, setSelectedTheme }: Props) {

    const themes: Object[] = [
        { name: "Angular", image: "/src/resources/tmpImages/Angular.svg" },
        { name: "Azure", image: "/src/resources/tmpImages/azure-2.svg" },
        { name: "Git", image: "/src/resources/tmpImages/Git.svg" },
        { name: "Java", image: "/src/resources/tmpImages/Java.svg" },
        { name: "Java Script", image: "/src/resources/tmpImages/JavaScript.svg" },
        { name: "React JS", image: "/src/resources/tmpImages/ReactJS.svg" },
        { name: "Spring", image: "/src/resources/tmpImages/Spring.svg" },
    ]

    return (
        <div className="w-10 text-sm font-bold xl:w-64">
            <h1 className="grid grid-cols-[0.2fr_0.8fr] py-4 pl-2 border-b-2">
                <HomeIcon className="w-6 h-6 xl:h-5 xl:w-5 text-greenOB"/>
                <span className="hidden xl:block">Home Page</span>
            </h1>

            <ul>
                {themes.map((theme: any, index) => {
                    return (
                        <NavItem
                            key={index}
                            onClick={() => { setSelectedTheme({ name: theme.name, image: theme.image }) }}
                            selected={selectedTheme.name == theme.name}
                            theme={theme.name}
                            imageSrc={theme.image} />
                    )
                })}
            </ul>
        </div>
    )
}
