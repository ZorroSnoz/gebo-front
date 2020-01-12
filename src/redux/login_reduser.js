const SOME_ACTION = 'SOME_ACTION';
let initialState = {
registered: true,
name: 'Артур',
id: 1
};

const loginReduser = (state = initialState, action) => {
    switch (action.type) {
        case SOME_ACTION: {
            return ;
        }
        default: {
            return state;
        }
    }

}

// export let addMessage = (textMessage) => ({ type: ADD_MESSAGE, textMessage });

export default loginReduser;