import {AsyncStorage} from 'react-native';
import * as Localization from 'expo-localization';
import {ADD_ANIMAL} from '../actions/actionTypes';


let initialState = {
    animals: [
        'kitten',
        'dingo',
        'coala',
        'kangoroo'
    ],
    langs: (Localization.locale.indexOf('ru')!=-1)? 'ru' : 'en',
    reports: [
        {
            id: 0,
            reportTypeId: 0,
            userId: 0,
            time: 1573904730,
            title: 'Жестокое обращение с животными в контактном зоопарке',
            description: 'Гуляли, увидели грустную пуму в торговом центр "Звездочка"',
            status: 'draft',
            comments: '',
            photos: ['https://s1.1zoom.me/b5050/75/170810-aleni_1400x1050.jpg'],
            anonymous: false,
            geometry: {
                address: 'Москва, ул. Таганская 1с1',
                latitude: 55.741807,
                longitute: 37.655708
            }
        }
    ]
};
  
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ANIMAL: 
            return {
                ...state,
                animals: state.animals.push(action.data)
            };  
        default:
            return state;
    }
};

export default reducer;