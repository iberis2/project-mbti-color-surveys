import styles from './ColorInput.module.css'

const isValidColorCode = (value: string) => {
  return /^#[a-fA-F0-9]{6}$/.test(value)
}

type ColorInputProps = {
  value: string
  onChange: (value: string) => void
}

function ColorInput({ value, onChange }: ColorInputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  const handleBlur = () => {
    if (!isValidColorCode(value)) {
      onChange('#000000')
    }
  }

  return (
    <div className={styles.colorInput}>
      <input
        className={styles.input}
        value={value}
        maxLength={7}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {isValidColorCode(value) && (
        <span className={styles.chip} style={{ backgroundColor: value }}></span>
      )}
    </div>
  )
}

export default ColorInput
