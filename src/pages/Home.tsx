import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ColorSurvey from '../components/ColorSurvey'
import { getData } from '../api/api'
import styles from './Home.module.css'

type itemsType = {
  colorCode: string
  createdAt: number
  id: number
  mbti: string
  updatedAt: number
}[]

function Home() {
  const [filter, setFilter] = useState<null | string>(null)
  const [items, setItems] = useState<itemsType>([])

  useEffect(() => {
    ;(async (mbti: string | null) => {
      const response: itemsType = await getData(mbti)
      setItems(response)
    })(filter)
  }, [filter])

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
              <button className={styles.filter} type='button' onClick={() => setFilter(null)}>
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
          {items.map(item => (
            <ColorSurvey key={item.id} value={item} onClick={() => setFilter(item.mbti)} />
          ))}
        </ul>
      </main>
    </div>
  )
}

export default Home
