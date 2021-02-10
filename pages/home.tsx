import React from 'react'
import { css } from 'linaria'

const ProgressItem = (props) => {
  return (
    <div
      className={css`
        color: rgb(212, 209, 223);
        margin-bottom: 30px;
      `}
    >
      <div>{props.children}:</div>
      <div
        className={css`
          height: 18px;
          border-radius: 18px;
          margin-top: 14px;
          overflow: hidden;
          background-color: rgb(237, 238, 240);
        `}
      >
        <div
          className={css`
            height: 100%;
            width: 20%;
            border-radius: 18px;
            background-image: linear-gradient(to right, rgb(57, 193, 253), rgb(123, 247, 254));
          `}
        ></div>
      </div>
    </div>
  )
}
const Home = () => {
  return (
    <div
      className={css`
        padding: 40px;
      `}
    >
      <ProgressItem>progress</ProgressItem>
      <ProgressItem>progress</ProgressItem>
      <ProgressItem>progress</ProgressItem>
      <ProgressItem>progress</ProgressItem>
    </div>
  )
}

export default Home
