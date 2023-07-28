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
    console.log('data post error', error)
  }
}
