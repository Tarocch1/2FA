import React, { useRef, useState, useEffect } from 'react';
import { Row, Col, Input, Progress, Typography } from 'antd';
import { authenticator } from 'otplib';

let timer = 0;

function Calc() {
  const inputRef = useRef<Input>(null);
  const [timeRemain, setRemain] = useState(30);
  const [token, setToken] = useState('000000');
  useEffect(() => {
    return () => {
      window.clearInterval(timer);
    };
  }, []);
  const onPressEnterHandle = () => {
    window.clearInterval(timer);
    if (inputRef.current!.input.value) {
      calc();
      cron();
      timer = window.setInterval(cron, 1000);
    } else {
      setRemain(30);
      setToken('000000');
    }
  };
  const cron = () => {
    const remain = authenticator.timeRemaining();
    setRemain(remain);
    if (remain === 30) {
      calc();
    }
  };
  const calc = () => {
    setToken(authenticator.generate(inputRef.current!.input.value));
  };
  return (
    <Row justify="center">
      <Col style={{ marginBottom: 8 }} span={24}>
        <Input
          ref={inputRef}
          placeholder="key"
          onPressEnter={onPressEnterHandle}
        />
      </Col>
      <Col style={{ marginBottom: 8 }} span={24}>
        <Progress
          percent={((30 - timeRemain) * 100) / 30}
          format={() => `${timeRemain}秒`}
        />
      </Col>
      <Col>
        <Typography.Text copyable>{token}</Typography.Text>
      </Col>
    </Row>
  );
}

export default Calc;
