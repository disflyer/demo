import { useCallback, useEffect, useRef } from 'react'
import { css } from '@linaria/core'
import { Button } from 'antd'
import { uploadFile } from '~/utils'

export default function Page() {
  const videoRef = useRef<HTMLVideoElement>()
  const canvasRef = useRef<HTMLCanvasElement>()
  const mediaStream = useRef<MediaStream>()
  const takePicture = useCallback(() => {
    const context = canvasRef.current.getContext('2d')
    const height = videoRef.current.videoHeight * (500 / videoRef.current.videoWidth)
    canvasRef.current.width = 500
    canvasRef.current.height = height
    context.drawImage(videoRef.current, 0, 0, 500, height)
    canvasRef.current.toBlob((file) => {
      uploadFile(file)
    })
  }, [])
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then(function (stream) {
        videoRef.current.srcObject = stream
        mediaStream.current = stream
        videoRef.current.play()
      })
      .catch(function (err) {
        console.log('An error occurred: ' + err)
      })
    return () => {
      mediaStream.current.getTracks().forEach((el) => el.stop())
    }
  }, [videoRef])
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      <div>
        <video
          className={css`
            height: 500px;
            width: 500px;
          `}
          ref={(ref) => (videoRef.current = ref)}
        >
          Video stream not available.
        </video>
      </div>
      <Button onClick={takePicture} type="primary">
        Take photo
      </Button>
      <div
        className={css`
          margin-top: 20px;
        `}
      >
        <canvas ref={(ref) => (canvasRef.current = ref)}></canvas>
      </div>
    </div>
  )
}
