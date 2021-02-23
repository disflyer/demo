import '../styles/globals.ts'
import React from 'react'
import { register } from '../config/subapp'
import { globalsCSS } from '~/styles/globals'
import { SideBar } from '~/components/SideBar'
import 'antd/dist/antd.css'
import { css } from 'linaria'

register()
function MyApp({ Component, pageProps }) {
  return (
    <div
      className={css`
        display: flex;
      `}
    >
      <SideBar />
      <div
        className={css`
          flex: 1;
        `}
      >
        <Component {...pageProps} />
      </div>
    </div>
  )
}
export const globals = globalsCSS

export default MyApp
