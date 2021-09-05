import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import BackBoard from '../components/BackBoard'
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import SideNav from '../components/SideNav';

const { Sider, Content } = Layout;

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head>
      <title>CC株式会社</title>
    </Head>
    <Layout>
      <Sider>
        <SideNav />
      </Sider>
      <Content className="overflow-x-auto">
        <BackBoard>
          <Component {...pageProps} />
        </BackBoard>
      </Content>
    </Layout>
  </>
  )
}

export default MyApp
