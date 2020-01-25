const ADD_AD = 'ADD_AD';
const ADD_EDIT_AD = 'ADD_EDIT_AD';
const ADD_POST_EDIT_AD = 'ADD_POST_EDIT_AD';
const DELETE_AD = 'DELETE_AD';

let initialState = {
    editAd: {},
    myAdsData: [],
    adsData: [
        {
            idAd: 1,
            img: 'http://map.vn.ua/media/product/5228/0/79609/product_5a968bd33c799.jpg',
            description: 'Продам колу або поміняю на сіжки',
            autor: 'Aртур',
            autorId: 1,
            typeClass: 0,
            typeText: 'продаж/бартер',
            adData: '12.01.20 16:55'
        },
        {
            idAd: 2,
            img: 'http://masterklass-krasivo.ru/wp-content/uploads/2013/06/5Zakolki-svoimi-rukami.jpg',
            description: 'Знайшлась заколка, забрати можете в бюро знахідок',
            autor: 'Вася',
            autorId: 2,
            typeClass: 1,
            typeText: 'оголошення',
            adData: '13.01.20 15:40'
        },
        {
            idAd: 3,
            img: 'https://apollo-ireland.akamaized.net/v1/files/rzzyg4cmwxj9-UA/image;s=644x461',
            description: 'Продам білет на всі дні, 800 грн',
            autor: 'Оля',
            autorId: 3,
            typeClass: 2,
            typeText: 'продаж',
            adData: '13.01.20 18:26'
        },
        {
            idAd: 4,
            img: null,
            description: 'Куплю сигарет, дорого',
            autor: 'Перчик',
            autorId: 4,
            typeClass: 3,
            typeText: 'купівля/бартер',
            adData: '14.01.20 13:24'
        },
        {
            idAd: 6,
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Finlandia_Classic_vodka.jpg/1200px-Finlandia_Classic_vodka.jpg',
            description: 'поділюсь алкоголем в замін на запивон',
            autor: 'Настя',
            autorId: 6,
            typeClass: 0,
            typeText: 'продаж/бартер',
            adData: '14.01.20 16:11'
        },
        {
            idAd: 7,
            img: null,
            description: 'потрібні дрова, пишіть',
            autor: 'Санчес',
            autorId: 7,
            typeClass: 3,
            typeText: 'купівля/бартер',
            adData: '14.01.20 16:11'
        }

    ]
};

const adReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_AD: {
            state.myAdsData.push(action.adData);
            return state;
        }
        case ADD_EDIT_AD: {
            state.editAd = action.adData;
            return state;
        }
        case ADD_POST_EDIT_AD: {
            let newItem = state.myAdsData.filter(item => item.idAd != action.adData.idAd);
            newItem.push(action.adData);
            state.myAdsData = newItem;
            return state;
        }
        case DELETE_AD: {
            let newItem = state.myAdsData.filter(item => item.idAd != action.adData.idAd);
            state.myAdsData = newItem;
            return {
                ...state,
                myAdsData: newItem
            };
        }
        default: {
            return state;
        }
    }

}

export let addAd = (adData) => ({ type: ADD_AD, adData });
export let editAd = (adData) => ({ type: ADD_EDIT_AD, adData });
export let addEditAd = (adData) => ({ type: ADD_POST_EDIT_AD, adData });
export let deleteAd = (adData) => ({ type: DELETE_AD, adData });

export default adReducer;