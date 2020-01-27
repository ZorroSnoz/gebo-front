import { deleteCookie } from './cookies_functions';

export let developerFun = () => {
    document.addEventListener('keydown', function (event) {
        if (event.ctrlKey) {
          deleteCookie('registered')
          deleteCookie('user')
          deleteCookie('idUser')
        }
      });
      document.addEventListener('keydown', function (event) {
        if (event.altKey) {
    console.log(window.store.getState())
        }
      });
};