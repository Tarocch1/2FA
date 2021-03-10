import { defineStore } from '@tarocch1/use-store';
import { message } from 'antd';
import { keyService } from '../services';

interface Key {
  name: string;
  key: string;
}

const keyStore = defineStore({
  state: {
    keys: [] as Key[],
    loading: true,
  },
  action: {
    getKeys: () => async ({ setState }) => {
      const keys = await keyService.getKeys();
      if (keys.erred) {
        message.error('获取密钥失败');
      } else {
        setState<typeof keyStore>({ keys: keys });
      }
      setState<typeof keyStore>({ loading: false });
    },
  },
});

export default keyStore;
