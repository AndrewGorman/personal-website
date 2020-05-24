<template>
    <scrollactive
        v-on:itemchanged="onItemChanged"
        class="main-nav-container"
    >
        <b-nav>
            <b-nav-item
                data-section-selector="#home"
                class="nav-item scrollactive-item"
                :class="[{'active-link': active === 'home'}]"
                @click="setActive('home')"
            >
                Home
            </b-nav-item>
            <b-nav-item
                data-section-selector="#about"
                class="nav-item scrollactive-item"
                :class="[{'active-link': active === 'about'}]"
                @click="setActive('about')"
            >
                About
            </b-nav-item>
            <b-nav-item
                data-section-selector="#featured-projects"
                class="nav-item scrollactive-item"
                :class="[{'active-link': active === 'featured'}]"
                @click="setActive('featured')"
            >
                Featured Projects
            </b-nav-item>
            <b-nav-item
                class="nav-item"
                :href="portfolioURL"
                :class="[{'active-link': active === 'portfolio'}]"
                @click="setActive('portfolio')"
            >
                Portfolio
            </b-nav-item>
        </b-nav>
    </scrollactive>
</template>

<script>
    export default {
        name: 'MainNavigation',
        data() {
            return {
                active: 'home',
            };
        },
        computed: {
            portfolioURL() {
                return process.env.VUE_APP_PORTFOLIO_LINK;
            }
        },
        methods: {
            setActive(location) {
                this.active = location
            },
            onItemChanged(event, currentItem, lastActiveItem) {
                console.log(event, currentItem, lastActiveItem);
            },
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
        height: 5.5rem

        .nav-item
            list-style: none
            padding: 1rem 1rem 0 1rem
            margin-bottom: 0.5rem

            .nav-link
                padding: 0

            &:hover
                font-size: 1.4rem

        .active-link
            border-bottom: 2px solid $primary

</style>
