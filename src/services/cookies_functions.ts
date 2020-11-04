// :todo need update to localstorage functions

import {InitialStateAndUserDataType} from "../types/types";

export let getCookie = (name: string): string | null => {
    let matches: any = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : null
}

export let setCookie = (name: string, value: string | boolean, options: any = {}): void => {

    options = {
        path: '/',
        'max-age': 360*365,
        samesite: 'lax',
        ...options
    }

    let updatedCookie: string = encodeURIComponent(name) + "=" + value

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey
        let optionValue: boolean = options[optionKey]
        if (!optionValue) {
            updatedCookie += "=" + optionValue
        }
    }
    document.cookie = updatedCookie
}

export let deleteCookie = (name: string): void => {
    setCookie(name, "", {
      'max-age': -1
    })
  }

export let addCookies = (userData: InitialStateAndUserDataType) => {
    if (userData.name != null && userData.idUser != null) {
        setCookie('user', userData.name)
        setCookie('idUser', userData.idUser)
    }
    else {
        console.log('Error: Cookies not added.')
    }

    if (userData.registered) {
        setCookie('registered', 'true')
    }
    else {
        setCookie('registered', 'false')
    }
  }