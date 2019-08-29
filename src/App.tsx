import React, { useState } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Typography from 'antd/lib/typography';
import Card from 'antd/lib/card';
import Icon from 'antd/lib/icon';
import Authenticators from './components/authenticators';
import Calc from './components/calc';
import Encrypt from './components/encrypt';

const { Title } = Typography;

const tabList = [
  {
    key: 'authenticators',
    tab: <span><Icon type={'idcard'} />认证器</span>,
  },
  {
    key: 'calc',
    tab: <span><Icon type={'calculator'} />计算器</span>,
  },
  {
    key: 'encrypt',
    tab: <span><Icon type={'lock'} />加密</span>,
  }
];
const contentList = {
  authenticators: <Authenticators />,
  calc: <Calc />,
  encrypt: <Encrypt />,
};

function App() {
  const [key, setKey] = useState('authenticators');
  return (
    <div>
      <Row type={'flex'} justify={'center'}>
        <Col>
          <Title level={2}>{'2FA认证工具'}</Title>
        </Col>
      </Row>
      <Row type={'flex'} justify={'center'}>
        <Col style={{padding: '0 8px'}} span={24} md={20} xl={16}>
          <Card
            style={{marginBottom: 16}}
            tabList={tabList}
            activeTabKey={key}
            onTabChange={key => setKey(key)}
          >
            {contentList[key as keyof typeof contentList]}
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default App;
