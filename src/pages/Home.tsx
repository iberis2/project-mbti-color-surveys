import { Link } from 'react-router-dom'
import mock from '../mock.json'
import { useState } from 'react'

function Home() {
  const [filter, setFilter] = useState('')
  return (
    <div>
      <h1>MBTI별 좋아하는 컬러</h1>
      {filter && (
        <button type='button' onClick={() => setFilter('')}>
          {filter}
          <img src='/images/x.svg' alt='필터 삭제' />
        </button>
      )}
      <div>
        <Link to='/new'> + 새 컬러 등록하기</Link>
      </div>
      <ul>
        {mock.map(item => (
          <li key={item.id} onClick={() => setFilter(item.mbti)}>
            {item.id}
            {item.mbti} --- {item.colorCode}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
