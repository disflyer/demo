import { useEffect, useState } from 'react'
import { css } from '@linaria/core'
import { Button, message, Upload } from 'antd'
import { transcode2MP3, transcode2GIF } from '~/utils'
export default function Home() {
  const [audioUrl, setAudioUrl] = useState<string>()
  const [loading, setLoading] = useState<boolean>(false)
  const [GIFloading, setGIFLoading] = useState<boolean>(false)
  const [GIFUrl, setGIFUrl] = useState<string>()
  const [videoUrl, setVideoUrl] = useState<string>()
  return (
    <div
      className={css`
        margin-top: 40px;
        display: flex;
        > div {
          flex: 1 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}
    >
      <div>
        <h2>将任何其他格式的音频转为MP3格式</h2>

        <Upload
          name="file"
          showUploadList={false}
          accept="audio/*"
          className={css`
            margin: 20px 0;
          `}
          beforeUpload={() => false}
          onChange={async (info) => {
            setLoading(true)
            const blob = await transcode2MP3(info.file)
            const url = URL.createObjectURL(blob)
            setLoading(false)
            setAudioUrl(url)
            console.debug(url)
          }}
        >
          <Button>转换音频</Button>
        </Upload>
        {audioUrl && <audio controls src={audioUrl}></audio>}
        {loading && <div>转码中……</div>}
      </div>
      <div>
        <h2>将视频转为GIF图</h2>
        {videoUrl && <video width={500} src={videoUrl} controls></video>}
        <Upload
          name="file"
          showUploadList={false}
          accept="video/*"
          className={css`
            margin: 20px 0;
          `}
          beforeUpload={() => false}
          onChange={async (info) => {
            setGIFLoading(true)
            setVideoUrl(URL.createObjectURL(info.file as any))
            const blob = await transcode2GIF(info.file)
            const url = URL.createObjectURL(blob)
            setGIFLoading(false)
            setGIFUrl(url)
            console.debug(url)
          }}
        >
          <Button>生成GIF</Button>
        </Upload>
        {GIFUrl && (
          <img
            className={css`
              width: 500px;
            `}
            src={GIFUrl}
          />
        )}
        {GIFloading && <div>生成中……</div>}
      </div>
    </div>
  )
}
