import React, { useCallback, useState } from 'react'
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
  const onChangeName = useCallback((e) => {
    setInputName(e.target.value)
  }, [setInputName]);
  const onChangeEmail = (e) => {
    setInputEmail(e.target.value)
  };
  const onChangeIntroduction = (e) => {
    setInputIntroduction(e.target.value)
  };

  const handleSubmit = () => {

    setInputContent([
      ...inputContent,
      {
        id: 1+inputContent.length,
        name: inputName,
        email: inputEmail,
        introduction: inputIntroduction,
      },
    ])
    setInputName("")
    setInputEmail("")
    setInputIntroduction("")
  }

  // const onFinish = () => {
  //   alert("お問い合わせ内容を送信しました")
  // }
  
  return (
    <>
      <Card 
        style={{ width: '780px' }}
        title="お問い合わせ内容"
      >
        <Form {...layout} name="nest-messages" validateMessages={validateMessages}>
          <Form.Item
            name="name"
            label="名前"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input onChange={onChangeName} />
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
            <Input onChange={onChangeEmail} />
          </Form.Item>
          <Form.Item name="introduction" label="お問い合わせ内容">
            <Input.TextArea onChange={onChangeIntroduction} />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset:22 }}>
            <Button type="primary" onClick={handleSubmit}>
              送信
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <ContactContent inputContents={inputContent}/>
    </>
  )
}

export default ContactForm