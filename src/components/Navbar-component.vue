<template>
    <header class="bg-body-transparent">
        <nav class="navbar navbar-expand-lg bg-body-transparent">
            <div class="container-fluid">
                <!-- <a class="navbar-brand" href="#">Navbar</a> -->
                <img :src="navbarStore.logo" alt="image d'un oeuf xénomorphe" srcset="">
                <!-- TEST -->
                <div class="hamburger navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <div class="upper"></div>
                    <div class="middle"></div>
                    <div class="lower"></div>
                </div>
                <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> -->
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item" v-for="(item, navigationIndex) in navbarStore.pages"
                            :key="navigationIndex">
                            <router-link :to="item.path">{{ item.label }}</router-link>
                        </li>
                        <li class="nav-item dropdown">
                        </li>
                    </ul>
                    <!-- <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form> -->
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { useNavbarStore } from '@/stores/NavbarStore'
const navbarStore = useNavbarStore();
</script>

<style lang="scss" scoped>
.active {
    color: lime;
}

@media (max-width: 991px) {

    .hamburger {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        .upper,
        .middle,
        .lower {
            position: absolute;
            top: 25%;
            background-color: lime;
            width: 25px;
            height: 2px;
            transition: .3s ease;
        }

        .middle {
            top: 50%;
        }

        .lower {
            top: 75%;
        }

        .upper-active {
            top: 50%;
            transform: rotate(-135deg);
            transition: .3s ease;
        }

        .middle-active {
            transform: rotate(360deg);
            opacity: 0;
            transition: .3s ease;
        }

        .lower-active {
            top: 50%;
            transform: rotate(135deg);
            transition: .3s ease;
        }
    }
}

.navbar-nav {
    width: 100%;
    display: flex !important;
    align-items: center !important;
    justify-content: flex-end !important;

    a {
        margin-right: 75px;
    }
}

img {
    margin-top: 5px;
}

header {
    background: transparent;
}

nav {
    background-color: #120109 !important;
    position: relative;
    z-index: 10;
}
</style>