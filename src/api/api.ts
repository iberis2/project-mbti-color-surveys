import axios from './instance'

export const getData = async (mbti: string | null) => {
  try {
    const { data } = await axios.get('/color-surveys/', {
      params: { mbti, liit: 20 },
    })
    return data.results
  } catch (error: unknown) {
    console.log('data load error', error)
  }
}
