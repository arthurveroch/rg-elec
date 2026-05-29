import styles from './title.module.css'

type Props = {
  nomSection: string | null
  title: string
  subTitle: string | null
  center: boolean
}

export default function Title({ nomSection, title, subTitle, center }: Props) {
  return (
    <div
      className={styles.title}
      style={center ? { alignItems: 'center', textAlign: 'center' } : {}}
    >
      {nomSection !== null && <p className={styles.sectionName}>{nomSection}</p>}
      <h2>{title}</h2>
      {subTitle !== null && <p className={styles.subTitle}>{subTitle}</p>}
    </div>
  )
}
