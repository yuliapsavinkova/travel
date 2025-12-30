import Image from 'next/image'
import Link from 'next/link'
import './HeaderFooter.css'

export default function Header() {
  const links = ['Home', 'About', 'Services', 'Blog']

  return (
    <header className="header">
      <div className="logoWrapper">
        <Image src="/logo.svg" alt="Logo" width={40} height={40} />
        <span>MyApp</span>
      </div>
      <nav className="navLinks">
        {links.map(link => (
          <Link key={link} href={`/${link.toLowerCase()}`}>{link}</Link>
        ))}
        <button className="contactBtn">Contact</button>
      </nav>
    </header>
  )
}
