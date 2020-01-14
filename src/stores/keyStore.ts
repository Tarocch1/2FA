import { observable, action } from 'mobx';
import { message } from 'antd';
import { keyService } from '../services';

interface Key {
  name: string;
  key: string;
}

class KeyStore {
  @observable keys: Key[] = [];

  @observable loading = true;

  @action getKeys = async () => {
    const keys = await keyService.getKeys();
    if (keys.erred) {
      message.error('获取密钥失败');
    } else {
      this.keys = keys;
    }
    this.loading = false;
  };
}

export default new KeyStore();
