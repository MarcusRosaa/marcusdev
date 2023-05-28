import Image from 'next/image';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="bg-emerald-950 w-100 pl-4 pr-4 pt-1 pb-1">
      <div className="max-w-7xl ml-auto mr-auto">
        <Image
          src="/logo.png"
          width={100}
          height={100}
          alt="Logomarca Marcus Dev"
        />
        <nav>
          <ul>
            <li>
              <Link href="#Habilidades">Habilidades</Link>
            </li>
            <li>
              <Link href="#Projetos">Projetos</Link>
            </li>
            <li>
              <Link href="#Tecnologias">Tecnologias</Link>
            </li>
            <li>
              <Link href="#Curriculo">Baixar CV</Link>
            </li>
          </ul>
        </nav>
        <div>
          <a href="#">GitHub</a>
        </div>
      </div>
    </main>
  )
}
