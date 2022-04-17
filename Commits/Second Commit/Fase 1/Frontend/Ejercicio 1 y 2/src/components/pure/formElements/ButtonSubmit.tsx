import loadIcon from '../../../resources/icons/loading.png'

type Props = {
    text: string,
    loading: boolean
}

export default function ButtonSubmit({ text, loading }: Props) {
  return (
    <button
    className="p-4 text-sm font-bold transition duration-300 ease-in-out rounded-lg mt-9 w-80 bg-greenOB hover:brightness-75" 
    type="submit">
        { loading ? (<img className='w-5 mx-auto animate-spin' src={ loadIcon }/>) : text }
    </button>
  )
}
