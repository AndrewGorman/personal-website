<template>
    <div id="app">
        <router-view />
        <main-navigation />
    </div>
</template>
<script>
    import MainNavigation from './components/MainNavigation'

    export default {
        name: 'App',
        components: {
            MainNavigation
        }
    }
</script>

<style lang="sass">
    @import '@/styles/master.sass'
    @import '@/styles/variables.sass'
</style>