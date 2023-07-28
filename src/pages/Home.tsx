import { Link } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import ColorSurvey from '../components/ColorSurvey'
import { getData, getNextPageData } from '../api/api'
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
  const nextPageRef = useRef<string | null>(null)
  const isLoadingRef = useRef<boolean>(false)

  const handleLoad = async (mbti: null | string) => {
    const { results, next }: { results: itemsType; next: string | null } = await getData(mbti)
    nextPageRef.current = next
    setItems(results)
  }

  const handleLoadNext = async () => {
    if (nextPageRef.current) {
      const { results, next } = await getNextPageData(nextPageRef.current)
      setItems(prev => [...prev, ...results])
      nextPageRef.current = next
    }
  }

  useEffect(() => {
    handleLoad(filter)
    const handleScroll = async () => {
      if (!nextPageRef.current || isLoadingRef.current) return
      isLoadingRef.current = true
      const maxScrollTop = document.documentElement.offsetHeight - window.innerHeight - 100
      const currentScrollTop = document.documentElement.scrollTop
      if (currentScrollTop >= maxScrollTop) {
        await handleLoadNext()
      }
      isLoadingRef.current = false
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
