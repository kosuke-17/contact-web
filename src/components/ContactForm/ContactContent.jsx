import React from 'react'
import { Card } from 'antd';

const contactContent = ({inputContents}) => {
  return (
    <Card
      style={{ width: '780px', marginTop: 20 }}
      title="Slackに送信したお問い合わせの内容"
    >
      {inputContents.map((inputContent) => {
        return (
          <ul>
            <li>
              名前：{inputContent.name}
            </li>
            <li>
              アドレス：{inputContent.email}
            </li>
            <li>
              内容：{inputContent.introduction}
            </li>
          </ul>
        )
      })}
    </Card>
  )
}

export default contactContent
