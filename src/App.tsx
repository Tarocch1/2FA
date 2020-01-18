import React, { useState, useEffect } from 'react';
import { Layout, Row, Col, Typography, Button, Modal } from 'antd';
import { useModel } from '@tarocch1/use-model';
import { loginModel } from './models';
import Loading from './components/Loading';
import Login from './components/Login';
import List from './components/List';
import Calc from './components/Calc';

function App() {
  const _loginModel = useModel(loginModel);
  const [showCalc, setShowCalc] = useState(false);
  useEffect(() => {
    _loginModel.initAuth();
  }, []);
  return (
    <Layout>
      <Layout.Header style={{ padding: '0 16px' }}>
        <Row style={{ height: '100%' }} type="flex" justify="center" align="middle">
          <Col style={{ maxWidth: 1000, flexGrow: 1, paddingRight: 10 }}>
            <Row type="flex" justify="space-between" align="middle">
              <Col>
                <Typography.Title style={{ color: '#fff', marginBottom: 0 }} level={4}>
                  2FA认证工具
                </Typography.Title>
              </Col>
              <Col>
                {_loginModel.inited && _loginModel.logged && (
                  <React.Fragment>
                    <Button style={{ marginRight: 8 }} type="primary" onClick={() => setShowCalc(true)}>
                      计算器
                    </Button>
                    <Button type="danger" onClick={_loginModel.logout}>
                      退出
                    </Button>
                  </React.Fragment>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </Layout.Header>
      <Layout.Content style={{ height: 'calc(100vh - 64px)', padding: 16, overflowY: 'scroll' }}>
        {!_loginModel.inited && <Loading />}
        {_loginModel.inited && !_loginModel.logged && <Login />}
        {_loginModel.inited && _loginModel.logged && <List />}
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
