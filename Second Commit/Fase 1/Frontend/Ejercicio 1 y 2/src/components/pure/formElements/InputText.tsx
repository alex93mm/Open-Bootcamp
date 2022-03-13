type Props = {
    type: string,
    name: string,
    label: string
}

export default function InputText({ type, name, label }: Props) {

    const placeholder: string = "Introduce tu " + label.toLocaleLowerCase();

  return (
    <div className="my-3">
        <div>
            <label className="text-xs font-bold text-white">
                { label }
            </label>
        </div>
        <div className="grid grid-row">
            <input className="h-10 pl-5 mt-1 text-xs font-bold text-white border rounded-lg bg-darkBlue bg-gradient-to-r from-slate-800 border-slate-600" 
            type={type} 
            name={name} 
            placeholder={ placeholder }/>
        </div>
    </div>
  )
}
