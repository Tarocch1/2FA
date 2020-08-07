import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Table, Progress, message } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useModel } from '@tarocch1/use-model';
import { authenticator } from 'otplib';
import copy from 'copy-to-clipboard';
import { KeyModel } from '../../models';

interface DataItem {
  name: string;
  token: string;
}

let timer = 0;

function List() {
  const keyModel = useModel(KeyModel);
  const [data, setData] = useState<DataItem[]>([]);
  const [timeRemain, setRemain] = useState(30);

  const cron = () => {
    const remain = authenticator.timeRemaining();
    setRemain(remain);
    if (remain === 30) {
      calc();
    }
  };
  const calc = () => {
    const newData: DataItem[] = [];
    keyModel.keys.forEach(key => {
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

  useEffect(() => {
    (async () => {
      await keyModel.getKeys();
      calc();
      cron();
      timer = window.setInterval(cron, 1000);
    })();
    return () => {
      window.clearInterval(timer);
    };
  }, []);

  const columns: ColumnsType<DataItem> = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Token',
      dataIndex: 'token',
      width: 100,
      align: 'center',
    },
    {
      key: 'action',
      title: 'Action',
      width: 100,
      align: 'center',
      render: (value: DataItem, record: DataItem, index: number) => {
        return <a onClick={() => cp(value.token)}>复制</a>;
      },
    },
  ];

  return (
    <Row justify="center">
      <Col style={{ maxWidth: 1000, flexGrow: 1 }}>
        <Card bodyStyle={{ padding: 8 }} bordered={false}>
          <Table
            size="middle"
            bordered
            title={() => (
              <Progress
                percent={((30 - timeRemain) * 100) / 30}
                format={() => `${timeRemain}s`}
              />
            )}
            loading={keyModel.loading}
            columns={columns}
            dataSource={data}
            rowKey="name"
            pagination={false}
          />
        </Card>
      </Col>
    </Row>
  );
}

export default List;
