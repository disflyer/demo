import React from 'react'
import { css } from 'linaria'
import useSWR from 'swr'
import axios from 'axios'

export default function Home() {
  const { data } = useSWR('hello', async () => (await axios.get('/api/hello')).data)
  return (
    <div
      className={css`
        color: red;
      `}
    >
      {data?.name}
    </div>
  )
}
