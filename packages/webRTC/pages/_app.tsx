import '../styles/globals.ts'
// import { register } from '../config/subapp'
// import { globalsCSS } from '~/styles/globals'
// import { SideBar } from '~/components/SideBar'
import 'antd/dist/antd.css'
import { css } from 'linaria'
import { useEffect } from 'react'

// register()
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (navigator.serviceWorker) {
      window.navigator.serviceWorker
        .register('/sw.worker.js', { scope: '/' })
        .then((reg) => {
          console.debug('注册成功', reg)
        })
        .catch((error) => {
          console.debug('注册失败', error)
        })
    }
  }, [])
  return (
    <div
      className={css`
        display: flex;
      `}
    >
      {/* <SideBar /> */}
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
// export const globals = globalsCSS

export default MyApp
