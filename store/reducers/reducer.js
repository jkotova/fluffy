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