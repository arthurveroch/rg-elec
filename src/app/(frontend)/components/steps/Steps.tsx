import { HomePage } from '@/payload-types'
import Title from '../reusable-ui/title/Title'
import styles from './steps.module.css'
import StepCard from '../reusable-ui/step-card/StepCard'

type Props = {
  stepsData: NonNullable<HomePage['Etapes']>
}

export default function Steps({ stepsData }: Props) {
  return (
    <section className={styles.stepsContainer}>
      <div className={styles.steps}>
        <Title
          nomSection={stepsData.nom_section}
          title={stepsData.titre}
          subTitle={stepsData.sous_titre}
          center={false}
        />
        <div className={styles.stepsCard}>
          {stepsData.etapes.map((etape) => (
            <StepCard
              key={etape.id}
              icone={
                typeof etape.icone === 'object' && etape.icone
                  ? { url: etape.icone.url ?? '', alt: etape.icone.alt ?? '' }
                  : undefined
              }
              title={etape.titre}
              description={etape.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
