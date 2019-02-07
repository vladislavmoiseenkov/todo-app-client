import Api from '@/services/Api';

export default {
  register(credential) {
    return Api().post('register', credential);
  },
  login(credential) {
    return Api().post('login', credential);
  },
  authenticate(credential) {
    return Api().post('authenticate', credential);
  },
  logout(credential) {
    return Api().post('logout', credential);
  },
};
