import React, { useState } from 'react'
import { Card } from 'antd';
import MacFAQ from './MacFAQ';

const tabList = [
  {
    key: 'tab1',
    tab: 'Mac',
  },
  {
    key: 'tab2',
    tab: 'Windows',
  },
  {
    key: 'tab3',
    tab: 'iOS',
  },
  {
    key: 'tab4',
    tab: 'Android',
  },
  {
    key: 'tab5',
    tab: 'iPad',
  },
];

const contentList = {
  tab1: <MacFAQ />,
  tab2: <p>WindowsのFAQ</p>,
  tab3: <p>iOSのFAQ</p>,
  tab4: <p>AndroidのFAQ</p>,
  tab5: <p>iPadのFAQ</p>,
};




const FrequentlyQuestionsCard = () => {
  const initialDevice = {
    key: 'tab1',
  };
  const [device, setDevice] = useState(initialDevice)

  return (
    <div>
      <Card
        style={{ width: '100%' }}
        title="よくあるご質問"
        tabList={tabList}
        activeTabKey={device}
        onTabChange={(key) => setDevice(key)}
      >
        {contentList[device]}
      </Card>
    </div>
  )
}

export default FrequentlyQuestionsCard