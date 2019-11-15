import {ADD_ANIMAL} from './actionTypes';

export const addAnimal = (data) => {
    return {
        type: ADD_ANIMAL,
        data: data
    }
}