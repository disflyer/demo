import { css } from '@linaria/core'
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
        <div>
          <Card hoverable className={card}>
            <Button type="link">photo</Button>
          </Card>
        </div>
      </Link>
      <Link href="/transcode">
        <div>
          <Card hoverable className={card}>
            <Button type="link">audio transcode</Button>
          </Card>
        </div>
      </Link>
      <Link href="/service-worker">
        <div>
          <Card hoverable className={card}>
            <Button type="link">service worker</Button>
          </Card>
        </div>
      </Link>
      <Link href="/webgl">
        <div>
          <Card hoverable className={card}>
            <Button type="link">webgl</Button>
          </Card>
        </div>
      </Link>
    </div>
  )
}
