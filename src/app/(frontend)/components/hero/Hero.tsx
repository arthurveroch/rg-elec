import { HomePage } from '@/payload-types'
import styles from './hero.module.css'
import Button from '../reusable-ui/button/Button'

type Props = {
  heroData: NonNullable<HomePage['Hero']>
}

export default function Hero({ heroData }: Props) {
  return (
    <section
      style={
        typeof heroData.background === 'object'
          ? {
              background: `url(${heroData.background.url})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }
          : {}
      }
      className={styles.heroContainer}
    >
      <div className={styles.overlay}>
        <div className={styles.title}>
          <h1>{heroData.titre}</h1>
          <p>{heroData.sous_titre}</p>
          <div className={styles.buttonsContainer}>
            <Button link="/#contact" text={heroData.premier_cta} color="blue" />
            <Button link="/#services" text={heroData.deuxieme_cta} color="transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
