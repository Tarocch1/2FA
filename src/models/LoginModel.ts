import { message } from 'antd';
import { loginService } from '../services';

class LoginModel {
  logged = false;
  inited = false;
  setLogged(logged: boolean) {
    this.logged = logged;
  }
  async initAuth() {
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
      const getTokenRes = await loginService.getToken();
      if (!getTokenRes.erred) {
        window.localStorage.setItem('jwt', JSON.stringify(getTokenRes));
        this.logged = true;
      }
    }
    this.inited = true;
  }
  async refreshToken() {
    const jwt = JSON.parse(window.localStorage.getItem('jwt')!);
    if (jwt.payload.exp - Math.floor(Date.now() / 1000) <= 60 * 60 * 24) {
      const newJWT = await loginService.refreshToken();
      window.localStorage.setItem('jwt', JSON.stringify(newJWT));
    }
  }
  logout() {
    window.localStorage.removeItem('jwt');
    this.logged = false;
  }
}

export default LoginModel;
