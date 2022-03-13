type Props = {
    text: string
}

export default function ButtonSubmit({ text }: Props) {
  return (
    <button
    className="p-4 text-sm font-bold transition duration-300 ease-in-out rounded-lg mt-9 w-80 bg-greenOB hover:brightness-75" 
    type="submit">
        { text }</button>
  )
}
