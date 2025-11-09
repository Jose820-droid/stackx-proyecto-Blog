"use strict";

import { getLocalStorageViews } from "./getLocalStorangeViews.js";



export const cardData = [
    {
        id: 1,
        banner: {
            src: 'https://images.unsplash.com/photo-1670332339459-fe5d2093167a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=60',
            alt: 'Imagem ilustrativa',
        },
        category: 'category_1',
        display_category: 'Categoria 1',
        title: 'Título card 1',
        date_time: {
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
        },
        first_characters: "Expedita nam hic accusantium consequatur, commodi ab in vitae id dolorum omnis corporis harum, consectetur quaerat. Fuga nobis neque minima doloribus ipsam?",
        description: 'Expedita nam hic accusantium consequatur, commodi ab in vitae id dolorum omnis corporis harum, consectetur quaerat. Fuga nobis neque minima doloribus ipsam?',
        views: getLocalStorageViews(1),
    },
    {
        id: 2,
        banner: {
            src: 'https://images.unsplash.com/photo-1686139280426-483b26ab94b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=60',
            alt: 'Imagem ilustrativa',
        },
        category: 'category_2',
        display_category: 'Categoria 2',
        title: 'Título card 2',
        date_time: {
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
        },
        first_characters: "Expedita nam hic accusantium consequatur, commodi ab in vitae id dolorum omnis corporis harum, consectetur quaerat. Fuga nobis neque minima doloribus ipsam?",
        description: 'Expedita nam hic accusantium consequatur, commodi ab in vitae id dolorum omnis corporis harum, consectetur quaerat. Fuga nobis neque minima doloribus ipsam?',
        views: getLocalStorageViews(2),
    },
    {
        id: 3,
        banner: {
            src: 'https://images.unsplash.com/photo-1621246046602-e75168c03fd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=60',
            alt: 'Imagem ilustrativa',
        },
        category: 'category_3',
        display_category: 'Categoria 3',
        title: 'Título card 3',
        date_time: {
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
        },
        first_characters: "Expedita nam hic accusantium consequatur, commodi ab in vitae id dolorum omnis corporis harum, consectetur quaerat. Fuga nobis neque minima doloribus ipsam?",
        description: 'Expedita nam hic accusantium consequatur, commodi ab in vitae id dolorum omnis corporis harum, consectetur quaerat. Fuga nobis neque minima doloribus ipsam?',
        
        views: getLocalStorageViews(3),
    },
    {
        id: 4,
        banner: {
            src: 'https://images.unsplash.com/photo-1691938608898-88ae4d41375c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=2000&q=60',
            alt: 'Imagem ilustrativa',
        },
        category: 'category_4',
        display_category: 'Categoria 4',
        title: 'Título card 4',
        date_time: {
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
        },
        first_characters: "Expedita nam hic accusantium consequatur, commodi ab in vitae id dolorum omnis corporis harum, consectetur quaerat. Fuga nobis neque minima doloribus ipsam?",
        description: 'Expedita nam hic accusantium consequatur, commodi ab in vitae id dolorum omnis corporis harum, consectetur quaerat. Fuga nobis neque minima doloribus ipsam?',
        views: getLocalStorageViews(4),
    },
];