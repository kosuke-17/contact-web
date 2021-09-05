import Head from 'next/head'
import BackBoard from '../../components/BackBoard'
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import SideNav from '../../components/SideNav';
import ContactForm from '../../components/ContactForm';

const { Sider, Content } = Layout;

const contactForm = () => {
  return (
    <div>
      <Head>
        <title>お問い合わせ</title>
      </Head>
      <Layout>
        <Sider>
          <SideNav />
        </Sider>
        <Content className="overflow-x-auto container mx-auto">
          <BackBoard>
            <ContactForm />
          </BackBoard>
        </Content>
      </Layout>
    </div>
  )
}
export default contactForm