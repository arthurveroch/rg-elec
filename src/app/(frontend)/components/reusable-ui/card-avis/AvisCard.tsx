import styles from './avis-card.module.css'

type Props = {
  avis: string
  nom: string
  typeAvis: string
}

export default function AvisCard({ avis, nom, typeAvis }: Props) {
  return (
    <div className={styles.avisCard}>
      <p>{avis}</p>
      <div className={styles.infosAvis}>
        {nom} <span className={styles.bullet} />
        {typeAvis}
      </div>
    </div>
  )
}
