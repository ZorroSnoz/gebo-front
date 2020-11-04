import { deleteCookie } from './cookies_functions'

export let developerFun = (): void => {
    document.addEventListener('keydown', function (event) {
        if (event.ctrlKey) {
          deleteCookie('registered')
          deleteCookie('user')
          deleteCookie('idUser')
        }
      })
      document.addEventListener('keydown', function (event) {
        if (event.altKey) {
    // @ts-ignore
            console.log(window.store.getState())
        }
      })
}