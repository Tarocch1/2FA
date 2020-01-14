import { observable, action } from 'mobx';
import { loginService } from '../services';

class LoginStore {
  @observable logged = false;

  @observable inited = false;

  @action initAuth = async () => {
    const jwt = JSON.parse(window.localStorage.getItem('jwt') || 'null');
    if (jwt) {
      const checkTokenRes = await loginService.checkToken();
      if (checkTokenRes.erred) {
        this.logged = false;
        this.inited = true;
        return;
      }
      if (jwt.exp - Math.floor(Date.now() / 1000) <= 60 * 60 * 24) {
        const newJWT = await loginService.refreshToken();
        window.localStorage.setItem('jwt', JSON.stringify(newJWT));
      }
      this.logged = true;
      this.inited = true;
    } else {
      const params = new URLSearchParams(window.location.search.replace(/^\?/, ''));
      const code = params.get('code');
      if (code) {
        const newJWT = await loginService.getToken(code);
        window.localStorage.setItem('jwt', JSON.stringify(newJWT));
        this.logged = true;
        this.inited = true;
      } else {
        this.logged = false;
        this.inited = true;
      }
    }
  };

  @action logout = () => {
    window.localStorage.removeItem('jwt');
    this.logged = false;
  };
}

export default new LoginStore();
