import { defineStore } from 'pinia'
export const useHomeStore = defineStore('home', {
    state: () => ({
        emptySpaceMobile: require('@/assets/mobile/empty-space.svg'),
        emptySpaceDesktop: require('@/assets/desktop/empty-space.svg'),
        catch: "Dans l'espace, personne ne vous entendra ",
        code: "coder...",
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
        ]
    }),
})