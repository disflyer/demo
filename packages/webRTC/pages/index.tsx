import React, { useEffect } from 'react'
import { css } from 'linaria'
import { Button, Card } from 'antd'
import Link from 'next/link'
import { getProvision } from '~/utils'

const card = css`
  min-width: 250px;
`
export default function Home() {
  useEffect(() => {
    getProvision().then(console.log)
  }, [])
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
        <div>
          <Card hoverable className={card}>
            <Button type="link">拍照</Button>
          </Card>
        </div>
      </Link>
    </div>
  )
}
