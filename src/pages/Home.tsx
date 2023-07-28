import { Link } from 'react-router-dom'
import mock from '../mock.json'
import { useState } from 'react'
import ColorSurvey from '../components/ColorSurvey'
import styles from './Home.module.css'

function Home() {
  const [filter, setFilter] = useState('')
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <header className={styles.header}>
          <h1 className={styles.heading}>
            MBTI별 <br />
            <span className={styles.accent}>좋아하는 컬러</span>
          </h1>
          <div>
            {filter && (
              <button className={styles.filter} type='button' onClick={() => setFilter('')}>
                {filter}
                <img className={styles.removeIcon} src='/images/x.svg' alt='필터 삭제' />
              </button>
            )}
          </div>
        </header>
      </div>
      <main className={styles.content}>
        <Link className={styles.addItem} to='/new'>
          + 새 컬러 등록하기
        </Link>
        <ul className={styles.items}>
          {mock.map(item => (
            <ColorSurvey key={item.id} value={item} onClick={() => setFilter(item.mbti)} />
          ))}
        </ul>
      </main>
    </div>
  )
}

export default Home
