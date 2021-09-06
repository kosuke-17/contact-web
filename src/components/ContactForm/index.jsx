import React, { useState } from 'react'
import { Form, Input, Button, Card } from 'antd';
import ContactContent from './ContactContent';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: '${label}をご記入ください',
  types: {
    email: '正しく入力してください',
  },
};

const ContactForm = () => {
  const [inputName, setInputName] = useState("")
  const [inputEmail, setInputEmail] = useState("")
  const [inputIntroduction, setInputIntroduction] = useState("")
  const [inputContent, setInputContent] = useState([])

  //onchangeでinput_valueを保存
  const onChangeName = (e) => {
    setInputName(e.target.value)
  };
  const onChangeEmail = (e) => {
    setInputEmail(e.target.value)
  };
  const onChangeIntroduction = (e) => {
    setInputIntroduction(e.target.value)
  };

  const handleSubmit = () => {

    setInputContent([
      ...inputContent,
      inputName,
      inputEmail,
      inputIntroduction,
    ])
    setInputName("")
    setInputEmail("")
    setInputIntroduction("")
  }

  const onFinish = () => {
    alert("送信しました")
  }
  
  return (
    <>
      <Card 
        style={{ width: '780px' }}
        title="お問い合わせ内容"
      >
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
          <Form.Item
            name="name"
            label="名前"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input onChange={onChangeName} value={inputName} />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                type: 'email',
              },
            ]}
          >
            <Input onChange={onChangeEmail} value={inputEmail} />
          </Form.Item>
          <Form.Item name="introduction" label="お問い合わせ内容">
            <Input.TextArea onChange={onChangeIntroduction} value={inputIntroduction} />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset:22 }}>
            <Button type="primary" htmlType="submit" onClick={handleSubmit}>
              送信
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <ContactContent inputContent={inputContent}/>
    </>
  )
}

export default ContactForm