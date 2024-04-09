<template>
    <div class="row-12">
        <div class="col-12">
            <main class="d-flex align-items-center justify-content-center text-center">
                <div class="position-absolute top-0 start-0 w-100 h-100">
                    <img :src="homeStore.emptySpaceDesktop" alt="image de l'espace xénomorphe"
                        class="img-fluid w-100 h-100" style="object-fit: cover;">
                </div>
                <div class="position-absolute top-50 start-50 catch">
                    <p id="test" class="text-white" style="z-index: 1;">{{ homeStore.catch }}<span>{{ homeStore.code }}</span></p>
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
import { useHomeStore } from '@/stores/HomeStore';
const homeStore = useHomeStore();
</script>
<style scoped>
html,
body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    opacity: 0;
}

main {
    opacity: 0;
    animation: appear 1s .3s ease forwards;

    div {

        img {
            opacity: 0;
            animation: appear 1s 1s ease forwards;
        }
    }

}

p {
    color: lime !important;
    opacity: 0;
    animation: appear 1s 2s ease forwards;
    cursor: default;

    span {
        /* filter: brightness(.5); */
        animation: shine 1s infinite reverse;
    }
}

.catch {
    transform: translate(-50%) !important;
    font-size: 32px;
    width: 100% !important;
    letter-spacing: 3px;
}

#test {
    font-family: 'PREDATOR', sans-serif !important;
    transition: .3s ease;
    
    &:hover {
        font-family: "Orbitron", sans-serif !important;
        transition: .3s ease;
    }
}

span {
    font-family: 'PREDATOR', sans-serif !important;
    transition: .3s ease;
    
    &:hover {
        font-family: "Orbitron", sans-serif !important;
        transition: .3s ease;
    }
}

@keyframes shine {
    0% {
        filter: brightness(0);
    }

    /* 50% {
        filter: brightness(.5);
    } */

    100% {
        filter: brightness(1);
        color: red;
    }
}

@keyframes appear {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>