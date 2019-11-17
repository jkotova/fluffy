import { AsyncStorage } from 'react-native';
import * as Localization from 'expo-localization';
import { ADD_ANIMAL } from '../actions/actionTypes';


let initialState = {
    categories: [
        { text: 'жестокое обращение', id: 1 },
        { text: 'охрана', id: 2 },
        { text: 'дикие животные', id: 3 }
    ],
    animals: [
        'kitten',
        'dingo',
        'coala',
        'kangoroo'
    ],
    langs: (Localization.locale.indexOf('ru') != -1) ? 'ru' : 'en',
    funds: [
        {
            id: 0,
            title: 'World Animal Protection',
            image: 'data:image/png;base64,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',
            description: 'World Animal Protection is an international non-profit animal welfare organization that has been in operation for over 30 years. The charity describes its vision as: A world where animal welfare matters and animal cruelty has ended.',
            categories: ['жестокое обращение', 'охрана', 'дикие животные']
        },
        {
            id: 1,
            title: 'World Wide Fund for Nature',
            image: 'data:image/png;base64,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',
            description: 'The World Wide Fund for Nature is an international non-governmental organization founded in 1961, working in the field of wilderness preservation, and the reduction of human impact on the environment. It was formerly named the World Wildlife Fund, which remains its official name in Canada and the United States.',
            categories: ['жестокое обращение', 'охрана', 'дикие животные']
        },
        {
            id: 2,
            title: 'Greenpeace',
            image: 'data:image/png;base64,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',
            description: 'Greenpeace is a non-governmental environmental organization with offices in over 39 countries and an international coordinating body in Amsterdam, the Netherlands. Greenpeace was founded in 1971 by Irving Stowe and Dorothy Stowe, Canadian and US ex-pat environmental activists.',
            categories: ['жестокое обращение', 'охрана', 'дикие животные']
        },
    ],
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
            categories: ['жестокое обращение', 'пумы', 'москва', 'контактные зоопарки',],
            photos: ['https://s1.1zoom.me/b5050/75/170810-aleni_1400x1050.jpg'],
            anonymous: false,
            geometry: {
                address: 'Москва, ул. Таганская 1с1',
                latitude: 55.741807,
                longitute: 37.655708
            }
        },
        {
            id: 1,
            reportTypeId: 0,
            userId: 1,
            time: 1573904730,
            title: 'Жестокое обращение с животными в контактном зоопарке',
            description: 'Гуляли, увидели грустную пуму в торговом центр "Звездочка"',
            status: 'draft',
            comments: '',
            categories: ['жестокое обращение', 'пумы', 'москва', 'контактные зоопарки',],
            photos: ['https://s1.1zoom.me/b5050/75/170810-aleni_1400x1050.jpg'],
            anonymous: false,
            geometry: {
                address: 'Москва, ул. Таганская 1с1',
                latitude: 55.741807,
                longitute: 37.655708
            }
        },
        {
            id: 2,
            reportTypeId: 0,
            userId: 1,
            time: 1573904730,
            title: 'Жестокое обращение с животными в контактном зоопарке',
            description: 'Гуляли, увидели грустную пуму в торговом центр "Звездочка"',
            status: 'draft',
            comments: '',
            categories: ['жестокое обращение', 'пумы', 'москва', 'контактные зоопарки',],
            photos: ['https://s1.1zoom.me/b5050/75/170810-aleni_1400x1050.jpg'],
            anonymous: false,
            geometry: {
                address: 'Москва, ул. Таганская 1с1',
                latitude: 55.741807,
                longitute: 37.655708
            }
        },
        {
            id: 3,
            reportTypeId: 0,
            userId: 1,
            time: 1573904730,
            title: 'Жестокое обращение с животными в контактном зоопарке',
            description: 'Гуляли, увидели грустную пуму в торговом центр "Звездочка"',
            status: 'draft',
            comments: '',
            categories: ['жестокое обращение', 'пумы', 'москва', 'контактные зоопарки'],
            photos: ['https://s1.1zoom.me/b5050/75/170810-aleni_1400x1050.jpg'],
            anonymous: false,
            geometry: {
                address: 'Москва, ул. Таганская 1с1',
                latitude: 55.741807,
                longitute: 37.655708
            }
        },
        {
            id: 4,
            reportTypeId: 0,
            userId: 1,
            time: 1573904730,
            title: 'Жестокое обращение с животными в контактном зоопарке',
            description: 'Гуляли, увидели грустную пуму в торговом центр "Звездочка"',
            status: 'draft',
            comments: '',
            categories: ['жестокое обращение', 'пумы', 'москва', 'контактные зоопарки',],
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
    switch (action.type) {
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