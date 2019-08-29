import React, { useState } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';
import Statistic from 'antd/lib/statistic';
import message from 'antd/lib/message';
import { authenticator } from 'otplib';
import copy from 'copy-to-clipboard';

function Calc() {
  const [key, setKey] = useState('');
  const [disable, setDisable] = useState(true);
  const [token, setToken] = useState('000000');
  const [deadline, setDeadline] = useState(Date.now());
  function onChangeHandle(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
    setDisable(event.target.value.length === 0);
    if (event.target.value.length === 0) {
      setToken('000000');
      setDeadline(Date.now());
    }
  }
  function onCalcHandle() {
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
    <div>
      <Row style={{marginBottom: 16}} type={'flex'} gutter={8}>
        <Col style={{flexGrow: 1}}>
          <Input placeholder={'密钥'} allowClear onChange={e => onChangeHandle(e)} />
        </Col>
        <Col>
          <Button type={'primary'} disabled={disable} onClick={onCalcHandle}>{'计算'}</Button>
        </Col>
      </Row>
      <Row type={'flex'} gutter={16}>
        <Col span={12}>
          <Row type={'flex'} justify={'end'}>
            <Col>
              <Statistic value={token} groupSeparator={''} suffix={<Button size={'small'} type={'link'} onClick={onCopyHandle}><Icon type={'copy'} /></Button>} valueStyle={{fontSize: 20}} />
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <Statistic.Countdown value={deadline} format={'s 秒'} onFinish={onCalcHandle} valueStyle={{fontSize: 20}} />
        </Col>
      </Row>
    </div>
  );
}

export default Calc;
