import { useEffect, useState } from 'react'
import { css } from 'linaria'
import { Button } from 'antd'
import { fetchAndInstantiate } from '~/utils'

const FIB = (number) => {
  if (number <= 1) {
    return number
  } else {
    return FIB(number - 1) + FIB(number - 2)
  }
}

export default function Home() {
  useEffect(() => {
    if (navigator.serviceWorker) {
      window.navigator.serviceWorker
        .register('/sw.worker.js', { scope: '/service-worker' })
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
        width: 100vw;
        margin-top: 200px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      `}
    >
      <div
        className={css`
          display: flex;
          justify-content: space-between;
          width: 200px;
        `}
      >
        <Button
          onClick={() => {
            fetchAndInstantiate('/fib.wasm').then(function (instance) {
              // 或者获取导出内存的缓存内容：
              console.time('fib-wasm')
              const FIB = instance.exports.FIB as CallableFunction
              const data = FIB(20)
              console.timeEnd('fib-wasm')
              console.log(data)
            })
          }}
        >
          fib-wasm
        </Button>
        <Button
          onClick={() => {
            console.time('fib-js')
            const data = FIB(20)
            console.timeEnd('fib-js')
            console.log(data)
          }}
        >
          fib-js
        </Button>
      </div>
    </div>
  )
}
