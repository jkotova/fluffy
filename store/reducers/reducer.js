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
    funds: [
        {
            id: 0,
            title: 'World Wide Fund for Nature',
            image:'http://zinple.me/fluffy/org/wwf.jpg',
            description: 'The World Wide Fund for Nature is an international non-governmental organization founded in 1961, working in the field of wilderness preservation, and the reduction of human impact on the environment. It was formerly named the World Wildlife Fund, which remains its official name in Canada and the United States.',
            categories: ['species conservation', 'climate change analysis', 'forest conservation'],
            link: 'https://www.worldwildlife.org/',
            type: 'non-governmental organisation'
        },
        {
            id: 1,
            title: 'Kalahari Conservation Society',
            image:'http://zinple.me/fluffy/org/kalahari.jpg',
            description: 'Kalahari Conservation Society (KCS) is the longest serving environmental Non-Governmental Organisation (NGO) in Botswana dedicated to protecting Botswana\'s unique biodiversity and community wellbeing.',
            categories: ['species conservation', 'anti-poaching', 'illegal hunting prevention'],
            link: 'https://www.kcs.org.bw',
            type: 'non-governmental organisation'
        },
        {
            id: 2,
            title: 'Rhino Rescue Project',
            image:'http://zinple.me/fluffy/org/rhino.jpg',
            description: 'Developing horn devaluation methods to proactively protect rhinos from poachers, without dehorning.',
            categories: ['species conservation', 'anti-poaching', 'illegal hunting prevention'],
            link: 'https://rhinorescueproject.org/',
            type: 'volunteer group'
        },
        {
            id: 3,
            title: 'International Rhino Foundation',
            image:'http://zinple.me/fluffy/org/irf.jpg',
            description: 'Throughout its 25-year history, the International Rhino Foundation has supported and managed rhino conservation projects in Africa and Asia. Our core values — integrity, collaborative, adaptability, sound decision-making and  commitment — are at the heart of everything we do.',
            categories: ['species conservation', 'tracking recording', 'working with local communities'],
            link: 'https://rhinos.org/',
            type: 'non-governmental organisation'
        },
    ],
    reports: [
        {
            id: 0,
            reportTypeId: 0,
            userId: 0,
            time: 1573904730,
            title: 'Unrecognized cars',
            description: 'Two unrecognized car were noticed near Nwetwe Pan lake  11.12 5:30PM',
            status: 'draft',
            comments: '',
            categories: ['poaching', 'illegal hunting' ],
            photos: ['http://zinple.me/fluffy/reports/report1.jpg'],
            anonymous: false,
            geometry: {
                address: '-26.5879268, 26.1476718',
                latitude: 55.741807,
                longitute: 37.655708
            },
            status: 'solved',
            userName: 'Ogopotse Pule',
            userPhoto: 'http://zinple.me/fluffy/reports/author1.png',
        },
        {
            id: 1,
            reportTypeId: 0,
            userId: 1,
            time: 1573904730,
            title: 'I found cruel photo on Facebook Page',
            description: 'Please, review: https://www.facebook.com/groups/241968612497245/',
            status: 'draft',
            comments: '',
            categories: ['illegal hunting'],
            photos: ['http://zinple.me/fluffy/reports/report2.jpg'],
            anonymous: false,
            geometry: {
                address: 'found in Facebook',
                latitude: 55.741807,
                longitute: 37.655708
            },
            status: 'rejected',
            userName: 'Kharmencita Brueckner',
            userPhoto: 'http://zinple.me/fluffy/reports/author2.png',
        },
        {
            id: 2,
            reportTypeId: 0,
            userId: 1,
            time: 1573904730,
            title: 'Rhino horns in China shop',
            description: 'Regular sales rhino\'s horns product at this shop',
            status: 'draft',
            comments: '',
            categories: ['products', 'sales', 'chinese medicine'],
            photos: ['http://zinple.me/fluffy/reports/report3.jpg'],
            anonymous: false,
            geometry: {
                address: '401 Dundas St W, Toronto, ON M5T 1G6, Canada',
                latitude: 55.741807,
                longitute: 37.655708
            },
            status: 'pending',
            userName: 'kwanisai masviba',
            userPhoto: 'http://zinple.me/fluffy/reports/author3.png',
        },
        {
            id: 3,
            reportTypeId: 0,
            userId: 1,
            time: 1573904730,
            title: 'Injured rhino',
            description: 'Yesterday morning we were visiting desert with the guests and near Nwetwe Pan lake we\'ve seen injured rhino',
            status: 'draft',
            comments: '',
            categories: ['emergency!', 'poaching'],
            photos: ['http://zinple.me/fluffy/reports/report4.jpg'],
            anonymous: false,
            geometry: {
                address: 'NG/31 commercial photographic WMA',
                latitude: 55.741807,
                longitute: 37.655708
            },
            status: 'solved',
            userName: 'Jessica Buhle Chauke',
            userPhoto: 'http://zinple.me/fluffy/reports/author4.png',
        },
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