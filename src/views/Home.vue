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
                <b-button
                    pill
                    size="lg"
                    variant="light"
                    style="margin-top:1rem;"
                    :href="portfolioURL"
                >
                    Explore my portfolio
                </b-button>
                <div class="contact-icons">
                    <a target="_blank" rel="noopener" href="https://www.github.com/andrewgorman/">
                        <img alt="link to Andrew's github"
                             class="contact-icon"
                             width="100px"
                             src="@/assets/github.png">
                    </a>
                    <a target="_blank" rel="noopener" href="mailto:andrew@andrewgorman.dev">
                        <img alt="link to email application"
                             class="contact-icon" width="100px"
                             src="@/assets/email.png">
                    </a>
                    <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/andrew-gorman/">
                        <img
                            alt="link to Andrew's LinkedIn" class="contact-icon" width="100px"
                            src="@/assets/linkedin.png">
                    </a>
                </div>
            </div>
            <img alt="Andrew Gorman headshot" class="andrew-image" src="@/assets/Andrew_bw.png">
            <div
                id="about"
                class="dark-content-box"
            >
                <b-card class="tab-container">
                    <b-tabs pills card>
                        <b-tab title="Education">
                            <div class="education">
                                <h2 style="margin-bottom: 2rem;">Bachelor of Arts, Central College, Pella, IA, May 2019</h2>
                                <h2>Majors</h2>
                                <ul class="vertical-list">
                                    <li>Computer Science</li>
                                    <li>Psychology</li>
                                </ul>

                                <h2>Campus Involvement</h2>
                                <ul class="vertical-list">
                                    <li>President of Drone Club (2017-2019)</li>
                                    <li>Community Outreach Director of Computer Science Club (2015-2019)</li>
                                    <li>PR Manager of Computer Science Club (2018-2019)</li>
                                    <li>Vice President of Computer Science Club (2015-2018)</li>
                                    <li>Vice President of Drone Club (2016-2017)</li>
                                    <li>Treasurer of Scholte Hall Council (2016-2017)</li>
                                </ul>
                            </div>
                        </b-tab>
                        <b-tab title="Work Experience">
                            <div class="work-experience">
                                <h2>Full Stack Web Developer - IMT Insurance (May 2019 - Present)</h2>
                                <ul class="vertical-list">
                                    <li>Need to add</li>
                                    <li>Bullet points</li>
                                    <li>For this</li>
                                </ul>

                                <h2>Software Development Intern - Lean Technologies (Summer 2018)</h2>
                                <ul class="vertical-list">
                                    <li>Contributed lean and concise VB.NET code daily to shared git repos</li>
                                    <li>Analyzed user feedback regularly and integrated it into development</li>
                                    <li>Utilized constant, consistent, and clear communication with team members to
                                        ensure
                                        peak efficiency
                                    </li>
                                </ul>

                                <h2>Student Web Developer - Central College Communications (2016-2019)</h2>
                                <ul class="vertical-list">
                                    <li>Updated college websites daily using WordPress content management</li>
                                    <li>Utilized Vagrant, Bash, and Git technologies daily as part of the development
                                        cycle
                                    </li>
                                    <li>Developed custom WordPress themes from scratch for custom projects</li>
                                </ul>

                                <h2>Student Technician - Central College IT Services (2015-2019)</h2>
                                <ul class="vertical-list">
                                    <li>Instructed students & employees on use of electronics and online college
                                        services
                                    </li>
                                    <li>Utilized problem solving skills in repairing malfunctioning electronics</li>
                                    <li>Offered guidance in clear and helpful ways using effective interpersonal
                                        skills
                                    </li>
                                </ul>
                            </div>
                        </b-tab>
                        <b-tab title="Skills & Proficiencies" active>
                            <div class="row">
                                <ul class="vertical-list">
                                    <li><h2>Languages</h2></li>
                                    <li>JavaScript</li>
                                    <li>Python</li>
                                    <li>HTML & CSS/Sass</li>
                                    <li>Swift</li>
                                    <li>PHP</li>
                                    <li>Java</li>
                                    <li>Visual Basic</li>
                                    <li>SQL</li>
                                </ul>
                                <ul class="vertical-list">
                                    <li><h2>Software</h2></li>
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
                                    <li><h2>Frameworks & Other Technologies</h2></li>
                                    <li>Vue.js</li>
                                    <li>Django</li>
                                    <li>Git</li>
                                    <li>Docker</li>
                                    <li>Heroku</li>
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
            <div class="featured-row">
                <div class="featured-highlight pattern-diagonal-lines-sm gray-lighter">
                    <div class="featured-project">
                        <h3>DevPoker</h3>
                        <br />
                        <p class="intro">Streamline your agile sprint planning process</p>
                        <p class="description">DevPoker integrates directly with Jira, Gitlab, and Github APIs to
                            automagically save your weights, comments and story edits, dramatically reducing time spent
                            in planning sessions</p>
                        <b-button
                            pill
                            size="lg"
                            variant="light"
                            :href="portfolioURL + '/#dev-poker'"
                        >
                            Learn More
                        </b-button>
                    </div>
                </div>
                <div class="featured-highlight pattern-diagonal-lines-sm gray-lighter">
                    <div class="featured-project">
                        <h3>MusicLink</h3>
                        <br />
                        <p class="intro">Revolutionize how you share music</p>
                        <p class="description">MusicLink allows you to share songs with your friends - regardless of
                            what streaming platform they use. Oh, and it's also a fully featured end to end encrypted
                            messaging service with social aspects</p>
                        <b-button
                            pill
                            size="lg"
                            variant="light"
                            :href="portfolioURL + '/#music-link'"
                        >
                            Learn More
                        </b-button>
                    </div>
                </div>
            </div>
            <div class="featured-row">
                <div class="featured-highlight pattern-diagonal-lines-sm gray-lighter">
                    <div class="featured-project">
                        <h3>Timmy's Pocket Guide</h3>
                        <br />
                        <p class="intro">Quickly and easily look up ACNH information using your voice</p>
                        <p class="description">Built in a one night hackathon, this Alexa skill allows you to query
                            information related to Animal Crossing New Horizons</p>
                        <b-button
                            pill
                            size="lg"
                            variant="light"
                            :href="portfolioURL + '/#pocket-guide'"
                        >
                            Learn More
                        </b-button>
                    </div>
                </div>
                <div class="featured-highlight pattern-diagonal-lines-sm gray-lighter">
                    <div class="featured-project">
                        <h3>MonstAR Trucks</h3>
                        <p class="intro">Coming Soon</p>
                        <b-button
                            pill
                            size="lg"
                            variant="light"
                            disabled
                            :href="portfolioURL"
                        >
                            Learn More
                        </b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        components: {},
        computed: {
            portfolioURL() {
                return process.env.VUE_APP_PORTFOLIO_LINK;
            }
        },
    }
</script>
<style lang="sass">
    @import '@/styles/variables.sass'

    .home
        width: 100vw

        .andrew-image
            max-width: 350px
            position: absolute
            top: 175px
            left: 55%
            z-index: 0
            -webkit-transition: left 0.5s ease-in-out
            -moz-transition: left 0.5s ease-in-out
            -o-transition: left 0.5s ease-in-out
            transition: left 0.5s ease-in-out

    .header-name-callout
        position: absolute
        top: 1rem
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
            margin: 4rem 0 0 0
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
            background-color: $light-black
            border: none

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

                .nav-link.active
                    background-color: $light-black
                    border-radius: 0
                    border-bottom: 2px solid $primary

        .work-experience
            display: flex
            flex-direction: column
            text-align: left
            margin: auto
            width: fit-content

            ul
                list-style: outside
                margin-left: 3rem

        .education
            display: flex
            flex-direction: column
            text-align: left
            margin: auto
            width: fit-content

            ul
                list-style: outside
                margin-left: 3rem

    .featured-projects
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center

        h1
            color: white
            margin: 2rem

        .featured-row
            display: flex
            flex-direction: row
            width: 100%
            justify-content: space-around
            max-width: 1250px

            .featured-highlight
                margin: 4rem 2rem 2rem 2rem

                .featured-project
                    height: 400px
                    width: 400px
                    background-color: $primary
                    border-radius: 10px
                    padding: 2rem 1rem 2rem 1rem
                    transform: translate(20px, -20px)
                    display: flex
                    flex-direction: column
                    align-items: center
                    justify-content: space-between

                    .intro
                        width: 100%
                        font-size: 1.2rem
                        text-align: center

                    .description
                        width: 100%
                        padding: 0 2rem 0 2rem
                        text-align: left

    @media (min-width: $large-breakpoint)
        .home
            .andrew-image
                left: 59%

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
