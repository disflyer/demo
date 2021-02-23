import axios from 'axios'

export const getProvision = async () => {
  const res = await fetch(`/api/photo`, {
    method: 'get'
  })
  const token = (await res.json()).token
  return token
}
export const uploadFile = async (file: Blob) => {
  const token = await getProvision()
  const formData = new FormData()
  formData.append('token', token)
  formData.append('file', file)
  try {
    const { data } = await axios.post('https://up-z2.qiniup.com', formData)
    return data.file
  } catch (err) {
    console.log(err)
    throw err
  }
}
