import { HomePage } from '@/payload-types'
import Title from '../reusable-ui/title/Title'
import styles from './avis.module.css'
import AvisCard from '../reusable-ui/card-avis/AvisCard'

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
        <div className={styles.avisCards}>
          {avisData.avis_clients.map((avis) => {
            return (
              <AvisCard
                key={avis.id}
                avis={avis.avis}
                nom={avis.nom_client}
                typeAvis={avis.source_avis}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
