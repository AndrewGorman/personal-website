<template>
    <div class="wrapper">
        <div :id="scrollTo" class="scroll-to"></div>
        <div class="card-container">
            <div class="top-row">
                <h1 style="text-align: center;">{{ title }}</h1>
                <font-awesome-icon
                    :title="`${expanded ? 'Minimize' : 'Expand'} card`"
                    :class="[{'flip-icon': expanded}]"
                    size="5x"
                    :icon="['fal', 'angle-down']"
                    @click="expanded = !expanded"
                />
            </div>
            <b-collapse
                :visible="expanded"
                class="body-content">
                <slot />
                <div
                    v-if="url"
                    class="cta-button-row"
                >
                    <b-button
                        pill
                        size="lg"
                        target="_blank"
                        variant="outline-light"
                        :title="`Link to ${title} website`"
                        :href="url"
                    >
                        {{ title }} website
                    </b-button>
                </div>
            </b-collapse>
        </div>
        <div
            v-if="!lastItem"
            class="connector">
        </div>
        <div v-else
             class="bottom-margin">
        </div>
    </div>
</template>

<script>
    // import ClipboardJS from 'clipboard';

    export default {
        name: 'RecCard',
        props: {
            scrollTo: {
                type: String,
                required: true,
            },
            title: {
                type: String,
                required: true,
            },
            logo: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                default: '',
            },
            tags: {
                type: Array,
                default: () => {
                    return [];
                },
            },
            lastItem: {
                type: Boolean,
                default: false,
            },
        },
        mounted() {
            // new ClipboardJS('.fa-link');
            this.expanded = this.inUrl || window.innerWidth > 800
        },
        data() {
            return {
                expanded: false,
            };
        },
        computed: {
            inUrl() {
                if(this.$route.hash) {
                    let hash = this.$route.hash;
                    if (hash[0] === '#') {
                        hash = hash.substring(1);
                    }
                    return hash === this.scrollTo;
                }
                return false
            },
        },
    };
</script>
<style lang="sass">
    @import '@/styles/variables.sass'
    .wrapper
        display: flex
        flex-direction: column
        justify-content: flex-start
        align-items: center
        text-align: center
        width: 100%
        max-width: 150rem

        .scroll-to
            position: relative
            height: 0
            width: 0
            bottom: 8rem

        .card-container
            border-radius: 10px
            width: 70%
            color: white
            background-color: rgba(45,47,51, 0.75)
            display: flex
            flex-direction: column
            justify-content: flex-start
            align-items: center
            text-align: center
            padding: 2rem 4rem 2rem 4rem
            border: 1px solid $white


            .top-row
                width: 100%
                display: flex
                flex-direction: row
                justify-content: space-between
                align-items: center

                .fa-link
                    cursor: pointer
                    -webkit-transition: all 0.25s ease-in-out
                    -moz-transition: all 0.25s ease-in-out
                    -o-transition: all 0.25s ease-in-out
                    transition: all 0.25s ease-in-out

                    &:hover
                        transform: translateY(-5px)

            .fa-angle-down
                transition-duration: 0.25s

                &.flip-icon
                    transform: rotate(180deg)

            .tagline
                margin-bottom: 1rem

            .body-content
                text-align: left
                min-width: 100%

                h5
                    font-size: 1.5rem

                p, li
                    font-size: 1.2rem

            .cta-button-row
                width: 100%
                display: flex
                justify-content: center
                margin: 3rem 0 2rem 0

        .connector
            height: 69px
            width: 0
            border-right: 2px solid $white

        .bottom-margin
            margin-bottom: 4rem

    @media (max-width: $phone-breakpoint)
        .wrapper
            width: 100%

            .card-container
                height: fit-content
                padding: 2rem
                margin: 0 1rem 0 1rem
                max-width: 95vw

                h1
                    font-size: 1.8rem

                p
                    font-size: 1.2rem

    //@media (max-height: 700px)
        .portfolio-container
            margin-top: 5rem

            .card-container
                height: fit-content
                margin: 4rem
                padding: 2rem

                h1
                    font-size: 1.8rem

                p
                    font-size: 1.2rem

    //@media (max-width: $medium-breakpoint)

    //@media (min-width: $large-breakpoint)

</style>
