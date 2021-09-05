import { Menu } from "antd"

const SideNav = () => {
  return (
    <>
    <div className="p-3 ">
        <a href="#" className="pl-3 text-2xl text-white">CC株式会社</a>
    </div>
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100vh', borderRight: 0, paddingTop: 20, backgroundColor: "#DDDDDD" }}
    >
      <Menu.Item key="1">FAQ~よくあるご質問~</Menu.Item>
      <Menu.Item key="2">WEBチャットbotへ</Menu.Item>
    </Menu>
  </>
  )
}

export default SideNav