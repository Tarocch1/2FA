import React from 'react';
import { Row, Col, Result, Button } from 'antd';
import { auth_base, api } from '../../constants/api';

function Login() {
  const login = () => {
    window.location.assign(
      `${auth_base}${api.login}?redirect=${window.location.href}`,
    );
  };
  return (
    <Row style={{ height: '100%' }} justify="center" align="middle">
      <Col>
        <Result
          status="403"
          title="403"
          extra={
            <Button type="primary" onClick={login}>
              登录
            </Button>
          }
        />
      </Col>
    </Row>
  );
}

export default Login;
