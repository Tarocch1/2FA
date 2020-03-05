import React, { useState, useEffect } from 'react';
import { Row, Col, Card, List as ListAntd, Progress, message } from 'antd';
import { useModel } from '@tarocch1/use-model';
import { authenticator } from 'otplib';
import copy from 'copy-to-clipboard';
import { keyModel } from '../../models';

interface DataItem {
  name: string;
  token: string;
}

let timer = 0;

function List() {
  const _keyModel = useModel(keyModel);
  const [data, setData] = useState<DataItem[]>([]);
  const [timeRemain, setRemain] = useState(30);
  useEffect(() => {
    (async () => {
      await _keyModel.getKeys();
      calc();
      cron();
      timer = window.setInterval(cron, 1000);
    })();
    return () => {
      window.clearInterval(timer);
    };
  }, []);
  const cron = () => {
    const remain = authenticator.timeRemaining();
    setRemain(remain);
    if (remain === 30) {
      calc();
    }
  };
  const calc = () => {
    const newData: DataItem[] = [];
    _keyModel.keys.forEach(key => {
      newData.push({
        name: key.name,
        token: authenticator.generate(key.key),
      });
    });
    setData(newData);
  };
  const cp = (text: string) => {
    copy(text);
    message.success('复制成功');
  };
  return (
    <Row justify="center">
      <Col style={{ maxWidth: 1000, flexGrow: 1 }}>
        <Card bodyStyle={{ padding: 8 }} bordered={false}>
          <ListAntd
            bordered
            itemLayout="horizontal"
            loading={_keyModel.loading}
            header={<Progress percent={((30 - timeRemain) * 100) / 30} format={() => `${timeRemain}秒`} />}
            dataSource={data}
            renderItem={item => (
              <ListAntd.Item
                actions={[
                  <a key="copy" onClick={() => cp(item.token)}>
                    复制
                  </a>,
                ]}
              >
                <ListAntd.Item.Meta title={item.name} />
                <div>{item.token}</div>
              </ListAntd.Item>
            )}
          />
        </Card>
      </Col>
    </Row>
  );
}

export default List;
