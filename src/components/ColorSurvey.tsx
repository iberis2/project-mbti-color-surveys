import styles from './ColorSurvey.module.css'

type ColorSurveyProps = {
  value: {
    id: number
    mbti: string
    colorCode: string
  }
  onClick: () => void
}

function ColorSurvey({ value: { id, mbti, colorCode }, onClick }: ColorSurveyProps) {
  return (
    <li className={styles.colorSurvey} onClick={onClick}>
      <div className={styles.id}>{id}</div>
      <div className={styles.mbti}>{mbti}</div>
      <div className={styles.arrow}>
        <img className={styles.arrowIcon} src='/images/arrow.svg' alt='arrow' />
      </div>
      <div className={styles.colorChip} style={{ backgroundColor: colorCode }}></div>
      <div className={styles.colorCode}>{colorCode}</div>
    </li>
  )
}

export default ColorSurvey
