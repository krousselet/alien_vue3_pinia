import { defineStore } from 'pinia'
export const useAboutStore = defineStore('about', {
    state: () => ({
        title: "Un mot à mon propos...",
        listVisible: false,
        listItems: ['Item 1', 'Item 2', 'Item 3'],
        faceHuggerImages: {
            1: require('@/assets/facehugger/body-v1.svg'),
            2: require('@/assets/facehugger/body-v2.svg')
        },
    }),
    actions: {
        toggleList() {
            this.listVisible = !this.listVisible;
        },
        getFaceHuggerImage(frame) {
            return this.faceHuggerImages[frame];
        },
    },
})