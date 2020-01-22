import React, { useEffect } from 'react';
import { Row, Col, Result, Button } from 'antd';
import { useModel } from '@tarocch1/use-model';
import { loginModel } from '../../models';
import { oauth_base, api } from '../../constants/api';
import * as config from '../../constants/config';

let w: Window | null;

function Login() {
  const _loginModel = useModel(loginModel);
  useEffect(() => {
    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);
  const login = () => {
    _loginModel.setLogging(true);
    w = window.open(`${oauth_base}${api.login}?redirect=${config.oauthRedirect}`, '_blank');
  };
  const handleMessage = (e: MessageEvent) => {
    if (config.oauthRedirect.startsWith(e.origin) && !e.data.erred && e.data.type === config.oauthMessageType) {
      window.localStorage.setItem('jwt', JSON.stringify(e.data.jwt));
      w?.close();
      _loginModel.setLogging(false);
      _loginModel.setLogged(true);
    }
  };
  return (
    <Row style={{ height: '100%' }} type="flex" justify="center" align="middle">
      <Col>
        <Result
          status="403"
          title="403"
          extra={
            <Button type="primary" loading={_loginModel.logging} onClick={login}>
              登录
            </Button>
          }
        />
      </Col>
    </Row>
  );
}

export default Login;
