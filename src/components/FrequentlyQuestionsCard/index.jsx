import React, { useState } from 'react'
import { Card } from 'antd';
import MacFAQ from './MacFAQ';
import WindowsFAQ from './WindowsFAQ';
import IOSFAQ from './IOSFAQ';
import AndroidFAQ from './AndroidFAQ';
import IPadFAQ from './IPadFAQ';

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
  tab2: <WindowsFAQ />,
  tab3: <IOSFAQ />,
  tab4: <AndroidFAQ />,
  tab5: <IPadFAQ />,
};




const FrequentlyQuestionsCard = () => {
  const [device, setDevice] = useState('tab1')

  return (
    <div>
      <Card
        style={{ width: '780px' }}
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