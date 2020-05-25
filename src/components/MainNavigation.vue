<template>
    <span>
    <scrollactive
        v-on:itemchanged="onItemChanged"
        class="main-nav-container"
    >
            <a
                class="nav-item scrollactive-item"
                href="#home"
                :class="[{'active-link': active === 'home'}]"
            >
                Home
            </a>
            <a
                class="nav-item scrollactive-item"
                href="#about"
                :class="[{'active-link': active === 'about'}]"
            >
                About
            </a>
            <a
                class="nav-item scrollactive-item"
                href="#featured-projects"
                :class="[{'active-link': active === 'featured-projects'}]"
            >
                Featured Projects
            </a>
            <a
                class="nav-item"
                :href="portfolioURL"
                :class="[{'active-link': active === 'portfolio'}]"
            >
                Portfolio
            </a>
    </scrollactive>
    <div class="mobile-header">
        <h3>Andrew Gorman</h3>
        <tasty-burger-button
            active-color="#3759BA"
            class="hamburger-icon"
            color="#EFEFEF"
            size="m"
            type="emphatic"
            v-on:toggle="onToggle"
        />
    </div>
    <div
        class="slide-out-menu"
        :class="[{'show': showingMenu}]"
    >
        <scrollactive
            v-on:itemchanged="onItemChanged"
            class="mobile-nav-container"
            :offset="90"
        >
            <a
                class="nav-item scrollactive-item"
                href="#home"
                :class="[{'active-link': active === 'home'}]"
                @click="itemClicked"
            >
                Home
            </a>
            <a
                class="nav-item scrollactive-item"
                href="#about"
                :class="[{'active-link': active === 'about'}]"
                @click="itemClicked"
            >
                About
            </a>
            <a
                class="nav-item scrollactive-item"
                href="#featured-projects"
                :class="[{'active-link': active === 'featured-projects'}]"
                @click="itemClicked"
            >
                Featured Projects
            </a>
            <a
                class="nav-item"
                :href="portfolioURL"
                :class="[{'active-link': active === 'portfolio'}]"
                @click="itemClicked"
            >
                Portfolio
            </a>
    </scrollactive>

    </div>
    </span>
</template>

<script>
    export default {
        name: 'MainNavigation',
        data() {
            return {
                active: 'home',
                showingMenu: false,
                preventLoop: false,
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
            onItemChanged(event, currentItem) {
                String.prototype.trim = function() {
                    return String(this).replace(/^(.)*#/g, '');
                };
                this.active = currentItem.href.trim()
            },
            onToggle(state) {
                this.showingMenu = state;
            },
            itemClicked() {
                this.$el.querySelector('.hamburger').click();
            }
        }
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
        width: fit-content

        .nav-item
            list-style: none
            padding: 1rem 1rem 0 1rem
            margin-bottom: 0.5rem

            .nav-link
                padding: 0

            &:hover
                font-size: 1.4rem
                color: $white
                text-decoration: none

        .active-link
            border-bottom: 2px solid $primary

    .mobile-header
        height: 80px
        background-color: $dark-black
        width: 100vw
        position: fixed
        top: 0
        right: 0
        left: 0
        z-index: 2000
        display: flex
        justify-content: center
        align-items: center

        .hamburger-icon
            position: absolute
            right: 20px
            z-index: 2000

    .slide-out-menu
        min-height: 100vh
        min-width: 100vw
        top: 0
        bottom: 0
        left: 100vw
        background-color: $dark-black
        z-index: 1000
        position: fixed
        padding: 100px 1rem 1rem 1rem
        -webkit-transition: left 0.25s ease-in-out
        -moz-transition: left 0.25s ease-in-out
        -o-transition: left 0.25s ease-in-out
        transition: left 0.25s ease-in-out

        &.show
            left: 0

        .mobile-nav-container
            height: 80vh
            display: flex
            flex-direction: column
            justify-content: space-around
            text-align: center

            .nav-item
                font-size: 2.5rem

</style>
