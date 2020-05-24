<template>
    <div>
        <div id="home" class="home pattern-dots-md">
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
                                                                                        class="contact-icon"
                                                                                        width="100px"
                                                                                        src="@/assets/github.png"></a>
                    <a target="_blank" href="mailto:andrew@andrewgorman.dev"><img alt="link to email application"
                                                                                  class="contact-icon" width="100px"
                                                                                  src="@/assets/email.png"></a>
                    <a target="_blank" href="https://www.linkedin.com/in/andrew-gorman/"><img
                        alt="link to Andrew's LinkedIn" class="contact-icon" width="100px"
                        src="@/assets/linkedin.png"></a>
                </div>
            </div>
            <img class="andrew-image" src="@/assets/Andrew_bw.png">
            <div
                id="about"
                class="dark-content-box"
            >
                <b-card class="tab-container">
                    <b-tabs pills card>
                        <b-tab title="Education" active>
                            <div>Education</div>
                        </b-tab>
                        <b-tab title="Work Experience">
                            <div>Work Experience</div>
                        </b-tab>
                        <b-tab title="Skills & Proficiencies">
                            <div class="row">
                                <ul class="vertical-list">
                                    <h2>Languages</h2>
                                    <li>JavaScript (Vue.js)</li>
                                    <li>Python</li>
                                    <li>HTML & CSS/Sass</li>
                                    <li>Swift</li>
                                    <li>PHP</li>
                                    <li>Java</li>
                                    <li>Visual Basic</li>
                                    <li>SQL</li>
                                </ul>
                                <ul class="vertical-list">
                                    <h2>Software</h2>
                                    <li>PyCharm</li>
                                    <li>Xcode</li>
                                    <li>Adobe Creative Suite</li>
                                    <li> - XD</li>
                                    <li> - Premiere Pro</li>
                                    <li> - Lightroom</li>
                                    <li> - Illustrator</li>
                                    <li> - Photoshop</li>
                                </ul>
                                <ul class="vertical-list">
                                    <h2>Other Technologies</h2>
                                    <li>Docker</li>
                                    <li>Git</li>
                                    <li>Django</li>
                                    <li>Express/Node.js</li>
                                    <li>WordPress</li>
                                    <li>Alexa Skills</li>
                                </ul>
                            </div>
                        </b-tab>
                    </b-tabs>
                </b-card>
            </div>
        </div>
        <div id="featured-projects" class="featured-projects">
            <h1>Featured Projects</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        components: {},
    }
</script>
<style lang="sass">
    @import '@/styles/variables.sass'
    .home
        width: 100vw

        .andrew-image
            max-width: 350px
            position: absolute
            top: 200px
            left: 59%
            z-index: 0

    .header-name-callout
        position: absolute
        top: 0.1rem
        font-size: 2rem
        left: 50%
        transform: translateX(-50%)
        color: $white
        z-index: 500

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
        z-index: 1
        position: relative
        height: 600px

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

    .dark-content-box
        display: flex
        background-color: $light-black
        border-radius: 10px
        padding: 0.5rem 2rem 2rem 2rem
        margin: 5rem 8rem 2rem 5rem
        text-align: center
        z-index: 50
        position: relative
        max-width: 1500px

        .tab-container
            width: 100%

            ul
                padding-left: 0
                width: 100%
                display: inline-flex
                list-style: none
                justify-content: space-around

                &.vertical-list
                    display: flex
                    text-align: left
                    flex-direction: column
                    width: fit-content

                li
                    font-size: 1.2rem
                    padding-bottom: 0.5rem

            .row
                display: flex
                flex-direction: row
                justify-content: space-around

            .nav-item
                font-size: 1.4rem

                &:hover
                    transform: translateY(-5px)

    .featured-projects
        display: flex
        justify-content: center

        h1
            color: white

    @media (min-width: $large-breakpoint)
        .blue-content-box
            margin: auto
            top: -1rem
            transform: translateX(-50%)
            width: 735px
            z-index: 1
            -webkit-transition: width 0.5s ease-in-out
            -moz-transition: width 0.5s ease-in-out
            -o-transition: width 0.5s ease-in-out
            transition: width 0.5s ease-in-out

        .dark-content-box
            margin: 4rem auto 2rem auto


</style>
