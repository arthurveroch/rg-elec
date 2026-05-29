import Link from 'next/link'
import styles from './button.module.css'

type Props = {
  text: string
  color: 'blue' | 'transparent'
  link: string
}

export default function Button({ text, color, link }: Props) {
  return (
    <div
      style={
        color === 'blue'
          ? { background: '#0082F8' }
          : color === 'transparent'
            ? { background: 'transparent', border: '1px solid #0082F8' }
            : {}
      }
      className={styles.button}
    >
      <Link href={link}>{text && text}</Link>
    </div>
  )
}
