import { defineStore } from 'pinia'
export const useProjectsStore = defineStore('projects', {
    state: () => ({
        projects: [
            require('@/assets/mobile/empty-space.svg'),
            require('@/assets/mobile/empty-space.svg'),
            require('@/assets/mobile/empty-space.svg'),
            require('@/assets/mobile/empty-space.svg'),
            require('@/assets/mobile/empty-space.svg'),
            require('@/assets/mobile/empty-space.svg'),
        ],
    }),
});