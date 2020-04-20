<template>
    <div class="main-nav-container">
        <b-nav-item class="nav-item">Home</b-nav-item>
        <b-nav-item class="nav-item">About</b-nav-item>
        <b-nav-item class="nav-item">Portfolio</b-nav-item>
        <b-nav-item class="nav-item">Featured Projects</b-nav-item>
    </div>
</template>

<script>
    export default {
        name: 'MainNavigation',
    }
</script>

<style scoped lang="sass">
    @import '@/styles/variables.sass'

    .main-nav-container
        font-family: 'Nunito', sans-serif
        color: white
        position: fixed
        right: -1rem
        top: 50%
        -webkit-transform-origin: right top
        -webkit-transform: rotate(90deg) translateX(50%)
        display: inline-flex
        border-radius: 10px
        background-color: $light-black
        padding: 1rem 1.5rem 0.5rem 1.5rem

        .nav-item
            font-size: 1.6rem
            margin-right: 1rem
            padding: 1rem
            list-style: none

            a.nav-link
                text-decoration: none !important
                color: white
</style>
