import React from 'react';
import { Row, Col, Result, Button } from 'antd';
import { oauth_base, api } from '../../constants/api';

function Login() {
  return (
    <Row style={{ height: '100%' }} type="flex" justify="center" align="middle">
      <Col>
        <Result
          status="403"
          title="403"
          extra={
            <Button
              type="primary"
              href={`${oauth_base}${api.login}?redirect=${window.location.origin}${window.location.pathname}`}
            >
              登录
            </Button>
          }
        />
      </Col>
    </Row>
  );
}

export default Login;
