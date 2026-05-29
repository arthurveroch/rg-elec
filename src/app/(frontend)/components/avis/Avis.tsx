import { HomePage } from '@/payload-types'
import Title from '../reusable-ui/title/Title'
import styles from './avis.module.css'

type Props = {
  avisData: NonNullable<HomePage['avis']>
}

export default function Avis({ avisData }: Props) {
  return (
    <section className={styles.avisContainer}>
      <div className={styles.avis}>
        <Title
          nomSection={avisData.nom_section}
          title={avisData.titre}
          subTitle={avisData.sous_titre}
          center
        />
        <div className={styles.avisCards}></div>
      </div>
    </section>
  )
}
