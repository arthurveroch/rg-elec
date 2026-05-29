'use client'

import Image from 'next/image'
import styles from './navbar.module.css'
import Button from '../reusable-ui/button/Button'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isScroll, setIsScroll] = useState(false)

  const scroll = () => {
    if (window.scrollY > 0) {
      setIsScroll(true)
    } else {
      setIsScroll(false)
    }
  }
  window.addEventListener('scroll', scroll)

  return (
    <nav className={`${styles.navbar} ${isScroll && styles.navbarScroll}`}>
      <Image src={'/logo.svg'} width={144} height={40} alt="Logo officiel de RG Elec" />
      <div className={styles.menu}>
        <ul>
          <li>
            <Link href={'/#'}>Accueil</Link>
          </li>
          <li>
            <Link href={'/#services'}>Services</Link>
          </li>
          <li>
            <Link href={'/#about'}>A propos</Link>
          </li>
        </ul>
        <Button color="blue" text="Demandez votre devis" link="/#contact" />
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
