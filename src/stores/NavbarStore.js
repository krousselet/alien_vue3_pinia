import { defineStore } from 'pinia'
export const useNavbarStore = defineStore('navbar', {
    state: () => ({
        hamburgerClasses: ['upper', 'middle', 'lower'],
        hamburgerActiveClasses: ['upper-active', 'middle-active', 'lower-active'],
        logo: require('@/../public/logo.svg'),
        index: 0,
        pages: [
            //HOME
            {
                label: 'home',
                path: '/',
            },
            //ABOUT
            {
                label: 'divers',
                path: '/divers',
            },
            //CONTACT
            {
                label: 'contacter',
                path: '/contacter',
            },
            {
                label: 'projets',
                path: '/projets',
            },
        ]
    }),
})