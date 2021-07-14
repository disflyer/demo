import { useEffect, useState } from 'react'
import { css } from '@linaria/core'
import { Button, message, Upload } from 'antd'
import { transcode } from '~/utils'
export default function Home() {
  const [audioUrl, setAudioUrl] = useState<string>()
  const [loading, setLoading] = useState<boolean>(false)
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
      <Upload
        name="file"
        showUploadList={false}
        accept="audio/*"
        className={css`
          margin-bottom: 20px;
        `}
        beforeUpload={() => false}
        onChange={async (info) => {
          setLoading(true)
          const blob = await transcode(info.file)
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
  )
}
