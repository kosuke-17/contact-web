import React from 'react'
import { Card } from 'antd';

const contactContent = ({inputContents, id, name, email, introduction}) => {
  // 代入すれば切ると思ったができなかった
  const contents = inputContents
  console.log(inputContents)
  // オブジェクトを表示させたい(まだできてない)
  return (
    <Card
      style={{ width: '780px', marginTop: 20 }}
      title="Slackに送信したお問い合わせの内容"
    >
      <p>
        名前：{contents.name}
      </p>
      <p>
        アドレス：{contents.email}
      </p>
      <p>
        内容：{contents.introduction}
      </p>
    </Card>
  )
}

export default contactContent
