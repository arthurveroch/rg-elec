import styles from './title.module.css'

type Props = {
  nomSection: string
  title: string
  subTitle: string
}

export default function Title({ nomSection, title, subTitle }: Props) {
  return (
    <div className={styles.title}>
      <p className={styles.sectionName}>{nomSection}</p>
      <h2>{title}</h2>
      <p className={styles.subTitle}>{subTitle}</p>
    </div>
  )
}
