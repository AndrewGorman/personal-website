<template>
    <div class="home">
        <h1 class="header-name-callout">Andrew Gorman</h1>
        <div
            class="blue-content-box"
        >
            <h2>Hi, I'm Andrew.</h2>
            <p class="med-text">
                Full Stack Web Developer <br />
                App Developer <br />
                Photographer <br />
                Freelancer
            </p>
            <b-button>Explore my portfolio</b-button>
            <div class="contact-icons">
                <a target="_blank" href="https://www.github.com/andrewgorman/"><img alt="link to Andrew's github"
                                                                                    class="contact-icon" width="100px"
                                                                                    src="@/assets/github.png"></a>
                <a target="_blank" href="mailto:andrew@andrewgorman.dev"><img alt="link to email application"
                                                                              class="contact-icon" width="100px"
                                                                              src="@/assets/email.png"></a>
                <a target="_blank" href="https://www.linkedin.com/in/andrew-gorman/"><img
                    alt="link to Andrew's LinkedIn" class="contact-icon" width="100px"
                    src="@/assets/linkedin.png"></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        components: {}
    }
</script>
<style lang="sass">
    @import '@/styles/variables.sass'

    .header-name-callout
        position: absolute
        top: 0.1rem
        font-size: 2rem
        left: 50%
        transform: translateX(-50%)
        color: $white

    .blue-content-box
        display: flex
        background-color: $primary
        border-radius: 10px
        margin: -1rem 0 0 -1rem
        padding: 2rem 1rem 1rem 2rem
        text-align: center
        flex-direction: column
        justify-content: center
        align-items: center
        width: calc(50vw - 32px)
        min-height: 70vh

        h2
            font-size: 2.5rem
            margin-bottom: 1rem

        .med-text
            margin-top: 0

        .contact-icons
            margin: 4rem 0 2rem 0
            display: flex
            flex-direction: row
            justify-content: space-between
            align-items: baseline
            min-width: 350px

            .contact-icon
                max-width: 69px
                max-height: 69px
</style>
