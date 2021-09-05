import { Menu } from "antd"
import Link from 'next/link'

const SideNav = () => {
  return (
    <>
    <div className="p-3 ">
        <a href="#" className="pl-3 text-lg text-white">CCアプリについて</a>
    </div>
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100vh', borderRight: 0, paddingTop: 20, backgroundColor: "#DDDDDD" }}
    >
      <Menu.Item key="1">
        <Link href="/">
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