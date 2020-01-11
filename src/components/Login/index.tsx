import React from 'react';
import { Row, Col, Button } from 'antd';
import { oauth_base, api } from '../../constants/api';

function Login() {
  return (
    <Row style={{ height: '100%' }} type="flex" justify="center" align="middle">
      <Col>
        <Button
          icon="aliyun"
          href={`${oauth_base}${api.login}?redirect=${window.location.origin}${window.location.pathname}`}
        >
          使用阿里云登录
        </Button>
      </Col>
    </Row>
  );
}

export default Login;
