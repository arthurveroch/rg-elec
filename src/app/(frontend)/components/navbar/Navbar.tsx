import Image from 'next/image'
import styles from './navbar.module.css'
import Button from '../reusable-ui/button/Button'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Image src={'/logo.svg'} width={144} height={40} alt="Logo officiel de RG Elec" />
      <div className={styles.menu}>
        <ul>
          <li>
            <Link href={''}>Accueil</Link>
          </li>
          <li>
            <Link href={''}>Services</Link>
          </li>
          <li>
            <Link href={''}>A propos</Link>
          </li>
        </ul>
        <Button color="blue" text="Demandez votre devis" link="" />
      </div>
      <Image
        className={styles.burger}
        src={'/burger.svg'}
        width={40}
        height={40}
        alt="Icone de menu burger"
      />
    </nav>
  )
}
