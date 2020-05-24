<template>
    <div class="main-nav-container">
        <b-nav-item v-scroll-to="'#home'" class="nav-item">Home</b-nav-item>
        <b-nav-item v-scroll-to="'#about'" class="nav-item">About</b-nav-item>
        <b-nav-item class="nav-item" :href="portfolioURL">Portfolio</b-nav-item>
        <b-nav-item v-scroll-to="'#featured-projects'" class="nav-item">Featured Projects</b-nav-item>
    </div>
</template>

<script>
    export default {
        name: 'MainNavigation',
        computed: {
            portfolioURL() {
                return process.env.VUE_APP_PORTFOLIO_LINK;
            }
        },
    }
</script>

<style scoped lang="sass">
    @import '@/styles/variables.sass'

    .main-nav-container
        position: fixed
        right: -1rem
        top: 50%
        -webkit-transform-origin: right top
        -webkit-transform: rotate(90deg) translateX(50%)
        display: inline-flex
        border-radius: 10px
        background-color: $light-black
        padding: 1rem 1.5rem 0.5rem 1.5rem
        height: 60px

        .nav-item
            padding: 1rem
            list-style: none

            &:hover
                font-size: 1.4rem
</style>
