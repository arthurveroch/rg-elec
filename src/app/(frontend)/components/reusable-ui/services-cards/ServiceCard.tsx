import styles from './service-card.module.css'

type Props = {
  width: string
  titreService: string
  descriptionService: string
  background: string
}

export default function ServiceCard({
  width,
  titreService,
  descriptionService,
  background,
}: Props) {
  return (
    <div
      className={styles.card}
      style={{
        width: width,
        background: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className={styles.shadowBlock}>
        <h3>{titreService}</h3>
        <p>{descriptionService}</p>
      </div>
    </div>
  )
}
