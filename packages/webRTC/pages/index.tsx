import React from 'react'
import { css } from 'linaria'
import { Button, Card } from 'antd'
import Link from 'next/link'

const card = css`
  min-width: 250px;
`
export default function Home() {
  return (
    <div
      className={css`
        width: 100vw;
        box-sizing: border-box;
        padding: 20px;
        display: flex;
        justify-content: center;
      `}
      // id="appContainer"
    >
      <Link href="/photograph">
        <Card hoverable className={card}>
          <Button type="link">拍照</Button>
        </Card>
      </Link>
    </div>
  )
}
