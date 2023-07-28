import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MBTISelect from '../components/MBTISelect'
import generateColorCode from '../utils/generateColorCode'
import ColorInput from '../components/ColorInput'
import styles from './New.module.css'
import Button from '../components/common/Button'
import { postData } from '../api/api'

function New() {
  const [formValue, setFormValue] = useState({
    mbti: 'ESTJ',
    colorCode: '#000000',
  })
  const navigate = useNavigate()

  const handleChange = (type: 'colorCode' | 'mbti', value: string) => {
    setFormValue(prev => {
      return { ...prev, [type]: value }
    })
  }

  const handleRandomClick = () => {
    const nextColorCode = generateColorCode()
    handleChange('colorCode', nextColorCode)
  }

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const response = await postData(formValue)
    if (response) {
      return navigate('/')
    }
    return alert('컬러 등록에 실패했습니다. 잠시 후 다시 시도해주세요.')
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.heading}>새 컬러 등록하기</h1>
        <Link className={styles.cancel} to='/'>
          <img className={styles.cancelIcon} src='/images/x.svg' alt='취소' />
        </Link>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>MBTI</h2>
        <MBTISelect value={formValue.mbti} onChange={newMBTI => handleChange('mbti', newMBTI)} />
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>
          컬러
          <button className={styles.random} type='button' onClick={handleRandomClick}>
            <img className={styles.repeatIcon} src='/images/repeat.svg' alt='랜덤' />
          </button>
        </h2>
        <ColorInput
          value={formValue.colorCode}
          onChange={(value: string) => handleChange('colorCode', value)}
        />
      </section>
      <Button className={styles.submit} onClick={handleSubmit}>
        컬러 등록
      </Button>
    </div>
  )
}

export default New
