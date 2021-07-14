import { css } from '@linaria/core'
import { Button } from 'antd'
import { fetchAndInstantiate } from '~/utils'
import { useEffect, useState } from 'react'

const FIB = (number) => {
  if (number <= 1) {
    return number
  } else {
    return FIB(number - 1) + FIB(number - 2)
  }
}

export default function Home() {
  const [time1, setTime1] = useState(null)
  const [time2, setTime2] = useState(null)
  const [result, setResult] = useState(null)
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
          margin-bottom: 20px;
        `}
      >
        两种不同的方式递归计算第35个斐波那契数需要的时间
      </div>
      <div
        className={css`
          display: flex;
          justify-content: space-between;
          width: 200px;
        `}
      >
        <div>
          <Button
            onClick={() => {
              fetchAndInstantiate('/fib.wasm').then(function (instance) {
                // 或者获取导出内存的缓存内容：
                const t1 = performance.now()
                const FIB = instance.exports.FIB as CallableFunction
                const data = FIB(35)
                const t2 = performance.now()
                setTime1(t2 - t1)
                setResult(data)
              })
            }}
          >
            fib-wasm
          </Button>
          <div
            className={css`
              text-align: center;
            `}
          >
            {time1 && Math.floor(time1) + 'ms'}
          </div>
        </div>
        <div>
          <Button
            onClick={() => {
              const t1 = performance.now()
              const data = FIB(35)
              const t2 = performance.now()
              setTime2(t2 - t1)
              setResult(data)
            }}
          >
            fib-js
          </Button>
          <div
            className={css`
              text-align: center;
            `}
          >
            {time2 && Math.floor(time2) + 'ms'}
          </div>
        </div>
      </div>
    </div>
  )
}
