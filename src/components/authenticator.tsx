import React, { useState, useEffect } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';
import Statistic from 'antd/lib/statistic';
import message from 'antd/lib/message';
import Divider from 'antd/lib/divider';
import { pki } from 'node-forge';
import { Base64 } from 'js-base64';
import { authenticator } from 'otplib';
import copy from 'copy-to-clipboard';
import { ICode } from './authenticators';

interface IProps {
  code: ICode;
  privateKey: pki.rsa.PrivateKey;
}

function Authenticator(props: IProps) {
  const [key, setKey] = useState('');
  const [token, setToken] = useState('000000');
  const [deadline, setDeadline] = useState(Date.now());
  useEffect(() => {
    setKey(props.privateKey.decrypt(Base64.decode(props.code.code)));
  }, []);
  useEffect(calc, [key]);
  function calc() {
    if (key.length !== 0) {
      setToken(authenticator.generate(key));
      setDeadline(Date.now() + authenticator.timeRemaining() * 1000);
    }
  }
  function onCopyHandle() {
    copy(token);
    message.success('复制成功')
  }
  return (
    <Col span={24} lg={12}>
      <Row type={'flex'}>
        <Divider />
        <Col span={8}>
          <Statistic value={props.code.title} valueStyle={{fontSize: 20}} />
        </Col>
        <Col span={8}>
          <Row type={'flex'} justify={'center'}>
            <Col>
              <Statistic value={token} groupSeparator={''} suffix={<Button size={'small'} type={'link'} onClick={onCopyHandle}><Icon type={'copy'} /></Button>} valueStyle={{fontSize: 20}} />
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <Row type={'flex'} justify={'end'}>
            <Col>
              <Statistic.Countdown value={deadline} format={'s 秒'} onFinish={calc} valueStyle={{fontSize: 20}} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
}

export default Authenticator;
