const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
let initialState = {
registered: false,
name: null,
idUser: null
};

const loginReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...action.userData
            };
        }
        default: {
            return state;
        }
    }

}

export let setUser = (userData) => ({ type: SET_AUTH_USER_DATA,  userData});


export default loginReduser;