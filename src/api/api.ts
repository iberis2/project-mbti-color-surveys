import axios from './instance'

export const getData = async (mbti: string | null) => {
  try {
    const { data } = await axios.get('/color-surveys/', {
      params: { mbti, liit: 20 },
    })
    return data
  } catch (error: unknown) {
    console.log('fail to load data', error)
  }
}

export const getNextPageData = async (url: string) => {
  try {
    const { data } = await axios.get(url)
    return data
  } catch (error) {
    console.log('fail to load next page', error)
  }
}

type formValueType = {
  mbti: string
  colorCode: string
}

export const postData = async (formValue: formValueType) => {
  try {
    const { status } = await axios.post('/color-surveys/', {
      ...formValue,
      password: '0000',
    })
    return status === 201
  } catch (error: unknown) {
    console.log('fail to post data', error)
  }
}
