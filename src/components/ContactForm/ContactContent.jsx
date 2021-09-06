import React from 'react'
import { Card } from 'antd';

const contactContent = ({inputContent}) => {
  console.log(inputContent);
  return (
    <Card
      style={{ width: '780px', marginTop: 20 }}
    >
      <p>
        {inputContent[0]}
      </p>
      <p>
        {inputContent[1]}
      </p>
      <p>
        {inputContent[2]}
      </p>
    </Card>
  )
}

export default contactContent
