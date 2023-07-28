import { useState } from 'react'
import { Link } from 'react-router-dom'
import MBTISelect from '../components/MBTISelect'
import generateColorCode from '../utils/generateColorCode'

function New() {
  const [formValue, setFormValue] = useState({
    mbti: 'ESTJ',
    colorCode: '#000000',
  })

  const handleChange = (type: 'colorCode' | 'mbti', value: string) => {
    setFormValue(prev => {
      return { ...prev, [type]: value }
    })
  }

  const handleRandomClick = () => {
    const nextColorCode = generateColorCode()
    handleChange('colorCode', nextColorCode)
  }

  const handleColorCodeBlur = () => {
    const isValidColorCode = /^#[a-f0-9]{6}$/i.test(formValue.colorCode)
    if (!isValidColorCode) {
      handleChange('colorCode', '#000000')
    }
  }

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    console.log('formValue', formValue)
  }

  return (
    <div>
      <h1>새 컬러 등록하기</h1>
      <Link to='/'>
        <img src='/images/x.svg' alt='취소' />
      </Link>

      <h2>MBTI</h2>
      <MBTISelect value={formValue.mbti} onChange={newMBTI => handleChange('mbti', newMBTI)} />

      <h2>컬러</h2>
      <button type='button' onClick={handleRandomClick}>
        <img src='/images/repeat.svg' alt='랜덤' />
      </button>
      <input
        name={formValue.colorCode}
        onBlur={handleColorCodeBlur}
        onChange={e => handleChange('colorCode', e.target.value)}
      />
      <button type='submit' onClick={handleSubmit}>
        컬러 등록
      </button>
    </div>
  )
}

export default New
