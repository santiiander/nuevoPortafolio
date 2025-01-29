import Link from "next/link"

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 mb-8">
      <h1 className="text-2xl font-bold">Santiago Andermatten</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="#experience" className="hover:text-blue-600">
              Experiencia
            </Link>
          </li>
          <li>
            <Link href="#education" className="hover:text-blue-600">
              Educación
            </Link>
          </li>
          <li>
            <Link href="#skills" className="hover:text-blue-600">
              Habilidades
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

