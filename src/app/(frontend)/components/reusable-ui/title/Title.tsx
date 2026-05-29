import styles from './title.module.css'

type Props = {
  nomSection: string | null
  title: string
  subTitle: string | null
}

export default function Title({ nomSection, title, subTitle }: Props) {
  return (
    <div className={styles.title}>
      {nomSection !== null && <p className={styles.sectionName}>{nomSection}</p>}
      <h2>{title}</h2>
      {subTitle !== null && <p className={styles.subTitle}>{subTitle}</p>}
    </div>
  )
}
