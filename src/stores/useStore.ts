import React from 'react';
import storeContext from './storeContext';

const useStore = () => React.useContext(storeContext);

export default useStore;
