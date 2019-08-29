import React, { useState } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Input from 'antd/lib/input';
import Upload from 'antd/lib/upload';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';
import message from 'antd/lib/message';
import { pki } from 'node-forge';
import { Base64 } from 'js-base64';
import copy from 'copy-to-clipboard';

function Encrypt() {
  const [publicKey, setKey] = useState<pki.PublicKey>();
  const [publicPem, setPublic] = useState('');
  const [clearText, setClear] = useState('');
  const [disable, setDisable] = useState(true);
  const [ciphertext, setCipher] = useState('');
  function priview(file: File): boolean {
    const reader = new FileReader();
    reader.onload = function(e: any) {
      setKey(pki.publicKeyFromPem(e.target.result));
      setPublic(e.target.result);
      setDisable(e.target.result.length === 0 || clearText.length === 0);
    };
    reader.readAsText(file);
    return false;
  }
  function onChangeHandle(event: React.ChangeEvent<HTMLInputElement>) {
    setClear(event.target.value);
    setDisable(event.target.value.length === 0 || publicPem.length === 0);
  }
  function onClickHandle() {
    setCipher(Base64.encode((publicKey as pki.rsa.PublicKey).encrypt(clearText)));
  }
  function onCopyHandle() {
    copy(ciphertext);
    message.success('复制成功');
  }
  return (
    <div>
      <Row type={'flex'} gutter={8}>
        <Col span={24} lg={12}>
          <Row type={'flex'} justify={'center'}>
            <Col span={24}>
              <Input.TextArea style={{marginBottom: 8, resize: 'none'}} placeholder={'公钥'} readOnly autosize={{minRows: 10, maxRows: 10}} value={publicPem} />
            </Col>
            <Col>
              <Upload
                beforeUpload={priview}
                showUploadList={false}
              >
                <Button style={{marginBottom: 8}} type={'primary'}><Icon type={'file'} />{'选择公钥文件'}</Button>
              </Upload>
            </Col>
          </Row>
        </Col>
        <Col span={24} lg={12}>
          <Row style={{marginBottom: 10}} type={'flex'} gutter={8}>
            <Col style={{flexGrow: 1}}>
              <Input placeholder={'明文'} allowClear onChange={onChangeHandle} />
            </Col>
            <Col>
              <Button type={'primary'} disabled={disable} onClick={onClickHandle}>{'加密'}</Button>
            </Col>
          </Row>
          <Row type={'flex'} justify={'center'}>
            <Col span={24}>
              <Input.TextArea style={{marginBottom: 8, resize: 'none'}} placeholder={'密文'} readOnly autosize={{minRows: 8, maxRows: 8}} value={ciphertext} />
            </Col>
            <Col>
              <Button type={'primary'} onClick={onCopyHandle}><Icon type={'copy'} />{'复制'}</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Encrypt;
