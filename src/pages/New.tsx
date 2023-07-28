import { useState } from 'react'
import { Link } from 'react-router-dom'
import MBTISelect from '../components/MBTISelect'

function New() {
  const [formValue, setFormValue] = useState({
    mbti: 'ESTJ',
    colorCode: '#000000',
  })

  const handleChange = (type: string, value: string) => {
    setFormValue(prev => {
      return { ...prev, [type]: value }
    })
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
      <img src='/images/repeat.svg' alt='랜덤' />
      <input name={formValue.colorCode} onChange={e => handleChange('colorCode', e.target.value)} />
      <button type='button'>컬러 등록</button>
    </div>
  )
}

export default New
