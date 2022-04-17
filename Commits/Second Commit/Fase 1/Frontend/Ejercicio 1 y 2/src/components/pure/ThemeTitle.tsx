import FollowButton from "./ButtonFollow"

type Props = {
    selectedTheme: {name: string, image: string},
    isLoading: boolean
}
export default function ThemeTitle({ selectedTheme, isLoading }: Props) {
  return (
    <div className="grid grid-cols-[0.2fr_0.9fr_0.1fr] pb-2 border-b-2 xl:grid-cols-[0.1fr_0.9fr_0.1fr]">
        {/* { !isLoading  */}
        {/* ? (<> */}
        <div className="absolute w-20 h-20 bg-white border-2 shadow-sm top-32 rounded-xl border-slate-300">
            <img className="" src={selectedTheme.image}/>
        </div>
        <span className="hidden w-40 pt-6 ml-24 text-xl font-bold align-text-bottom sm:block">
            {selectedTheme.name}
        </span>
        <FollowButton/>
        {/* </>) */}
        {/*  : (<LoadingTheme/>) */}
         {/* } */}
    </div>
  )
}
