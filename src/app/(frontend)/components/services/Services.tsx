import { HomePage } from '@/payload-types'
import styles from './services.module.css'
import Title from '../reusable-ui/title/Title'
import ServiceCard from '../reusable-ui/services-cards/ServiceCard'

type Props = {
  servicesData: NonNullable<HomePage['services']>
}

export default function Services({ servicesData }: Props) {
  return (
    <section id="services" className={styles.servicesContainer}>
      <div className={styles.services}>
        <Title
          center={false}
          nomSection={servicesData.nom_section}
          title={servicesData.titre}
          subTitle={servicesData.sous_titre}
        />
        <div className={styles.servicesCards}>
          <ServiceCard
            width="600px"
            titreService={servicesData.cards.premiere_card.titre}
            descriptionService={servicesData.cards.premiere_card.description}
            background={
              typeof servicesData.cards.premiere_card.background === 'object'
                ? (servicesData.cards.premiere_card.background.url ?? '')
                : ''
            }
          />
          <ServiceCard
            width="808px"
            titreService={servicesData.cards.deuxieme_card.titre}
            descriptionService={servicesData.cards.deuxieme_card.description}
            background={
              typeof servicesData.cards.deuxieme_card.background === 'object'
                ? (servicesData.cards.deuxieme_card.background.url ?? '')
                : ''
            }
          />
          <ServiceCard
            width="458px"
            titreService={servicesData.cards.troisieme_card.titre}
            descriptionService={servicesData.cards.troisieme_card.description}
            background={
              typeof servicesData.cards.troisieme_card.background === 'object'
                ? (servicesData.cards.troisieme_card.background.url ?? '')
                : ''
            }
          />
          <ServiceCard
            width="458px"
            titreService={servicesData.cards.quatrieme_card.titre}
            descriptionService={servicesData.cards.quatrieme_card.description}
            background={
              typeof servicesData.cards.quatrieme_card.background === 'object'
                ? (servicesData.cards.quatrieme_card.background.url ?? '')
                : ''
            }
          />
          <ServiceCard
            width="458px"
            titreService={servicesData.cards.cinquieme_card.titre}
            descriptionService={servicesData.cards.cinquieme_card.description}
            background={
              typeof servicesData.cards.cinquieme_card.background === 'object'
                ? (servicesData.cards.cinquieme_card.background.url ?? '')
                : ''
            }
          />
        </div>
      </div>
    </section>
  )
}
