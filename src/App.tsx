import React, { useState } from 'react';
import { Layout, Row, Col, Typography, Button, Modal } from 'antd';
import List from './components/List';
import Calc from './components/Calc';

function App() {
  const [showCalc, setShowCalc] = useState(false);
  return (
    <Layout>
      <Layout.Header style={{ padding: '0 16px' }}>
        <Row style={{ height: '100%' }} justify="center" align="middle">
          <Col style={{ maxWidth: 1000, flexGrow: 1 }}>
            <Row justify="space-between" align="middle">
              <Col>
                <Typography.Title
                  style={{ color: '#fff', marginBottom: 0 }}
                  level={4}
                >
                  MFA认证工具
                </Typography.Title>
              </Col>
              <Col>
                <Button type="primary" onClick={() => setShowCalc(true)}>
                  计算器
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Layout.Header>
      <Layout.Content
        style={{
          height: 'calc(100vh - 64px)',
          padding: 16,
          overflowY: 'auto',
        }}
      >
        <List />
      </Layout.Content>
      <Modal
        destroyOnClose
        maskClosable={false}
        title="计算器"
        footer={null}
        visible={showCalc}
        onCancel={() => setShowCalc(false)}
      >
        <Calc />
      </Modal>
    </Layout>
  );
}

export default App;
