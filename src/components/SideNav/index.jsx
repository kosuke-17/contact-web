import { Menu } from "antd"
import Link from 'next/link'

const SideNav = () => {
  return (
    <>
      <Link href="/">
        <div className="p-4 text-lg text-white cursor-pointer">
          CCアプリについて
        </div>
      </Link>
      <Menu
        mode="inline"
        style={{ height: '100vh', borderRight: 0, paddingTop: 20, backgroundColor: "#DDDDDD" }}
      >
        <Menu.Item key="1">
          <Link href="/frequentlyQuestionsCard">
            FAQ~よくあるご質問~
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link href="/moveToChatBot">
            WEBチャットbotへ
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link href="/contactForm">
            お問い合わせ
          </Link>
          </Menu.Item>
      </Menu>
  </>
  )
}

export default SideNav