import React from 'react';
import { Row, Col, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

function Loading() {
  return (
    <Row style={{ height: '100%' }} justify="center" align="middle">
      <Col>
        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} />} />
      </Col>
    </Row>
  );
}

export default Loading;
