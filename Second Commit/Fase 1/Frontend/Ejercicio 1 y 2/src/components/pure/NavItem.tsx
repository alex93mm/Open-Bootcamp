type Props = {
    theme: string,
    imageSrc: string,
    selected: boolean,
    onClick: () => void,
}

export default function NavItem({ theme, imageSrc, onClick, selected }: Props) {

  const styleItem: string = "grid grid-cols-1 p-2 rounded-md my-1 hover:cursor-pointer xl:grid-cols-[0.15fr_0.85fr]";

  const styleSelected: string = selected 
  ? " bg-slate-200" 
  : " hover:bg-slate-200";

  return (
    <div 
    className={ styleItem + styleSelected }
        onClick={onClick}>
        <img className="w-6 h-6 xl:w-5 xl:h-5" src={imageSrc}/>
        <span className="hidden xl:block"> {theme} </span>
    </div>
  )
}
