import Head from 'next/head'
import BackBoard from '../../components/BackBoard'
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import SideNav from '../../components/SideNav';
import MoveToChatBot from '../../components/MoveToChatBot'


const { Sider, Content } = Layout;

const moveToChatBot = () => {
  return (
    <div>
      <Head>
        <title>WEbチャットbotへ</title>
      </Head>
      <Layout>
        <Sider>
          <SideNav />
        </Sider>
        <Content className="overflow-x-auto container mx-auto">
          <BackBoard>
            <MoveToChatBot />
          </BackBoard>
        </Content>
      </Layout>
    </div>
  )
}
export default moveToChatBot