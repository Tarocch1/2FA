import { message } from 'antd';
import { keyService } from '../services';

interface Key {
  name: string;
  key: string;
}

class KeyModel {
  keys: Key[] = [];
  loading = true;
  getKeys = async () => {
    const keys = await keyService.getKeys();
    if (keys.erred) {
      message.error('获取密钥失败');
    } else {
      this.keys = keys;
    }
    this.loading = false;
  };
}

export default KeyModel;
