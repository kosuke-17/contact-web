import { Menu } from "antd"

const SideNav = () => {
  return (
    <>
    <div className="bg-gray-400 p-3 ">
        <a href="#" className="pl-3 text-2xl text-black">CC株式会社</a>
    </div>
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100vh', borderRight: 0, paddingTop: 20, backgroundColor: "#999999" }}
    >
      <Menu.Item key="1">FAQ~よくあるご質問~</Menu.Item>
      <Menu.Item key="2">WEBチャットbotへ</Menu.Item>
    </Menu>
  </>
  )
}

export default SideNav