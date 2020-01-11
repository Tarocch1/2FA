import { observable, action } from 'mobx';
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
    this.keys = keys;
    this.loading = false;
  };
}

export default new KeyStore();
