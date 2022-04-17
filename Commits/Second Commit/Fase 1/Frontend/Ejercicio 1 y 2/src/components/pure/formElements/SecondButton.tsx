import { Link } from "wouter"

type Props = {
  text: string,
  href: string,
}

export default function SecondButton({ text, href }: Props) {
  return (
    <Link
      href={href}
      className="p-4 text-sm font-bold text-center text-slate-300 hover:underline">
      {text}
    </Link>
  )
}
