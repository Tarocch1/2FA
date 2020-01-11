import React from 'react';
import KeyStore from './keyStore';
import LoginStore from './loginStore';

const storeContext = React.createContext({
  keyStore: KeyStore,
  loginStore: LoginStore,
});

export default storeContext;
