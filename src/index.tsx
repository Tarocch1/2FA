import React from 'react';
import ReactDOM from 'react-dom';
import LocaleProvider from 'antd/lib/locale-provider';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import './index.css';
import App from './App';

ReactDOM.render(<LocaleProvider locale={zh_CN}><App /></LocaleProvider>, document.getElementById('root'));
