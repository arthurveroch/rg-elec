import { HomePage } from '@/payload-types'
import Title from '../reusable-ui/title/Title'
import styles from './about.module.css'
import { RichText } from '@payloadcms/richtext-lexical/react'

type Props = {
  aboutData: NonNullable<HomePage['histoire']>
}

export default function About({ aboutData }: Props) {
  return (
    <section id="about" className={styles.aboutContainer}>
      <div className={styles.about}>
        <div className={styles.content}>
          <Title
            center={false}
            nomSection={aboutData.nom_section}
            title={aboutData.titre}
            subTitle={null}
          />
          <RichText data={aboutData.paragraphe} />
        </div>
        <div
          className={styles.image}
          style={
            typeof aboutData.image === 'object'
              ? {
                  background: `url(${aboutData.image.url})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }
              : {}
          }
        />
      </div>
    </section>
  )
}
