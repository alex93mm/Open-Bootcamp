type Props = {
  text: string,
  clickEvent: () => void,    
  }

export default function SecondButton({ text, clickEvent }: Props) {
  return (
    <button
    onClick={ clickEvent }
    className="p-4 text-sm font-bold text-slate-300 hover:underline">
      { text }
    </button>
  )
}
