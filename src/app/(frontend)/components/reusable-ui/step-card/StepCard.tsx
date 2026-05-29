import Image from 'next/image'
import styles from './step-card.module.css'

type Props = {
  icone?: {
    url: string
    alt: string
  }

  title: string
  description: string
}

export default function StepCard({ icone, title, description }: Props) {
  return (
    <div className={styles.stepCard}>
      {icone && <Image src={icone.url} width={40} height={40} alt={icone.alt} />}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
