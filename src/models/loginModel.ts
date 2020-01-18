import { message } from 'antd';
import { loginService } from '../services';

class LoginModel {
  logged = false;
  inited = false;
  initAuth = async () => {
    const jwt = JSON.parse(window.localStorage.getItem('jwt') || 'null');
    if (jwt) {
      const checkTokenRes = await loginService.checkToken();
      if (checkTokenRes.erred) {
        message.error('验证token失败');
        window.localStorage.removeItem('jwt');
      } else {
        this.refreshToken();
        this.logged = true;
      }
    } else {
      const params = new URLSearchParams(window.location.search.replace(/^\?/, ''));
      const code = params.get('code');
      if (code) {
        const newJWT = await loginService.getToken(code);
        if (newJWT.erred) {
          message.error('获取token失败');
        } else {
          window.localStorage.setItem('jwt', JSON.stringify(newJWT));
          this.logged = true;
        }
      }
    }
    this.inited = true;
  };
  refreshToken = async () => {
    const jwt = JSON.parse(window.localStorage.getItem('jwt')!);
    if (jwt.payload.exp - Math.floor(Date.now() / 1000) <= 60 * 60 * 24) {
      const newJWT = await loginService.refreshToken();
      window.localStorage.setItem('jwt', JSON.stringify(newJWT));
    }
  };
  logout = () => {
    window.localStorage.removeItem('jwt');
    this.logged = false;
  };
}

export default new LoginModel();
