export let getCookie = (name) => {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
};

export let setCookie = (name, value, options = {}) => {

    options = {
        path: '/',
        'max-age': 360*365,
        samesite: 'lax',
        ...options
    };

    let updatedCookie = encodeURIComponent(name) + "=" + value;

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
};

export let deleteCookie = (name) => {
    setCookie(name, "", {
      'max-age': -1
    })
  };


export let addCookies = (userData) => {
    setCookie('user', userData.name);
    setCookie('idUser', userData.idUser);
    setCookie('registered', userData.registered);
  };  