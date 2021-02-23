import React from 'react'
import { css } from 'linaria'

export default function Home() {
  return (
    <div
      className={css`
        color: red;
      `}
      id="appContainer"
    >
      请检查subapp服务是否打开
    </div>
  )
}
