import React from 'react';
import { Row, Col, Spin, Icon } from 'antd';

function Loading() {
  return (
    <Row style={{ height: '100%' }} type="flex" justify="center" align="middle">
      <Col>
        <Spin indicator={<Icon style={{ fontSize: 24 }} type="loading" spin />} />
      </Col>
    </Row>
  );
}

export default Loading;
