import React, { useState } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Input from 'antd/lib/input';
import Upload from 'antd/lib/upload';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';
import Empty from 'antd/lib/empty';
import { pki } from 'node-forge';
import axios from 'axios';
import Authenticator from './authenticator';

export interface ICode {
  title: string;
  code: string;
}

function Authenticators() {
  const [privateKey, setKey] = useState<pki.PrivateKey>();
  const [privatePem, setPrivate] = useState('');
  const [disable, setDisable] = useState(true);
  const [codes, setCodes] = useState<ICode[]>([]);
  function priview(file: File): boolean {
    const reader = new FileReader();
    reader.onload = function(e: any) {
      setKey(pki.privateKeyFromPem(e.target.result));
      setPrivate(e.target.result);
      setDisable(e.target.result.length === 0);
    };
    reader.readAsText(file);
    return false;
  }
  function onClickHandle() {
    axios.get('./code.json').then(Response => {
      setCodes(Response.data);
    });
  }
  return (
      <div>
      <Row type={'flex'} justify={'center'}>
        <Col span={24} lg={12}>
          <Input.TextArea style={{marginBottom: 8, resize: 'none'}} placeholder={'私钥'} readOnly autosize={{minRows: 10, maxRows: 10}} value={privatePem} />
        </Col>
      </Row>
      <Row type={'flex'} justify={'center'} gutter={8}>
        <Col>
          <Upload
            beforeUpload={priview}
            showUploadList={false}
          >
            <Button style={{marginBottom: 16}} type={'primary'}><Icon type={'file'} />{'选择私钥文件'}</Button>
          </Upload>
        </Col>
        <Col>
          <Button style={{marginBottom: 16}} disabled={disable} type={'primary'} onClick={onClickHandle}><Icon type={'safety'} />{'认证'}</Button>
        </Col>
      </Row>
      {codes.length === 0 && <Empty />}
      <Row type={'flex'} gutter={16}>
        {codes.map((item, index) => <Authenticator key={index} code={item} privateKey={privateKey as pki.rsa.PrivateKey} />)}
      </Row>
    </div>
  );
}

export default Authenticators;
