<template>
    <div>
        <div id="home" class="home">
            <h1 class="header-name-callout">Andrew Gorman</h1>
            <div
                class="blue-content-box"
            >
                <img class="mobile-avatar" src="@/assets/mobile_avatar.jpg" alt="Andrew Gorman Headshot" />
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
                    <a title="Andrew Gorman GitHub profile" target="_blank" rel="noopener" href="https://www.github.com/andrewgorman/">
                        <font-awesome-icon
                            class="contact-icon"
                            :icon="['fab',  'github']"
                        />
                    </a>
                    <a title="Andrew Gorman Email" target="_blank" rel="noopener" href="mailto:andrew@andrewgorman.dev">
                        <font-awesome-icon
                            class="contact-icon"
                            :icon="['fal',  'envelope']"
                        />
                    </a>
                    <a title="Andrew Gorman LinkedIn"  target="_blank" rel="noopener" href="https://www.linkedin.com/in/andrew-gorman/">
                        <font-awesome-icon
                            class="contact-icon"
                            :icon="['fab',  'linkedin-in']"
                        />
                    </a>
                </div>
            </div>
            <img alt="Andrew Gorman headshot" class="andrew-image" src="@/assets/andrew_bw.png">
            <div
                id="about"
                class="dark-content-box"
            >
                <div class="mobile-card-header">

                    <font-awesome-icon
                        style="color: white;"
                        size="4x"
                        :icon="['fal',  'angle-left']"
                        @click="decreaseAboutTab"
                    />
                    <p class="mobile-tab-header nav-item">{{ tabTitles[currentAboutTab] }}</p>
                    <font-awesome-icon
                        style="color: white;"
                        size="4x"
                        :icon="['fal',  'angle-right']"
                        @click="increaseAboutTab"
                    />
                </div>
                <b-card class="tab-container">
                    <b-tabs v-model="currentAboutTab" pills card>
                        <b-tab title="Education">
                            <div class="education">
                                <h3 style="margin-bottom: 2rem;">Bachelor of Arts, Central College, Pella, IA, May
                                    2019</h3>
                                <h3>Majors</h3>
                                <ul class="vertical-list">
                                    <li>Computer Science</li>
                                    <li>Psychology</li>
                                </ul>

                                <h3>Campus Involvement</h3>
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
                                <h3>Full Stack Web Developer - IMT Insurance (May 2019 - Present)</h3>
                                <ul class="vertical-list">
                                    <li>Develop and maintain full-stack applications built with modern languages on
                                        cutting edge frameworks
                                    </li>
                                    <li>Keep codebase lean and focused by engaging with team members daily in code
                                        review sessions
                                    </li>
                                    <li>Integrate with existing legacy systems to meet business needs</li>
                                </ul>

                                <h3>Software Development Intern - Lean Technologies (Summer 2018)</h3>
                                <ul class="vertical-list">
                                    <li>Contributed lean and concise VB.NET code daily to shared git repos</li>
                                    <li>Analyzed user feedback regularly and integrated it into development</li>
                                    <li>Utilized constant, consistent, and clear communication with team members to
                                        ensure
                                        peak efficiency
                                    </li>
                                </ul>

                                <h3>Student Web Developer - Central College Communications (2016-2019)</h3>
                                <ul class="vertical-list">
                                    <li>Updated college websites daily using WordPress content management</li>
                                    <li>Utilized Vagrant, Bash, and Git technologies daily as part of the development
                                        cycle
                                    </li>
                                    <li>Developed custom WordPress themes from scratch for custom projects</li>
                                </ul>

                                <h3>Student Technician - Central College IT Services (2015-2019)</h3>
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
                                    <li><h3>Languages</h3></li>
                                    <li>JavaScript</li>
                                    <li>Python</li>
                                    <li>HTML & CSS (Sass)</li>
                                    <li>Swift</li>
                                    <li>PHP</li>
                                    <li>Java</li>
                                    <li>Visual Basic</li>
                                    <li>SQL</li>
                                </ul>
                                <ul class="vertical-list">
                                    <li><h3>Software</h3></li>
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
                                    <li><h3>Frameworks & Misc</h3></li>
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
                        <div class="button-row">
                            <b-button
                                pill
                                size="lg"
                                variant="light"
                                target="_blank"
                                :href="portfolioURL + '/#devpoker'"
                            >
                                Learn More
                            </b-button>
                            <b-button
                                pill
                                size="lg"
                                variant="light"
                                target="_blank"
                                href="https://www.devpoker.app"
                            >
                                Check it out
                            </b-button>
                        </div>
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
                        <div class="button-row">
                            <b-button
                                pill
                                size="lg"
                                variant="light"
                                target="_blank"
                                :href="portfolioURL + '/#musiclink'"
                            >
                                Learn More
                            </b-button>
                            <b-button
                                pill
                                size="lg"
                                variant="light"
                                target="_blank"
                                href="https://www.musiclink.app"
                            >
                                Check it out
                            </b-button>
                        </div>
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
                            :href="portfolioURL + '/#monstar-trucks'"
                        >
                            Learn More
                        </b-button>
                    </div>
                </div>
            </div>
            <b-button
                class="portfolio-button"
                pill
                size="lg"
                variant="light"
                :href="portfolioURL"
            >
                Explore more projects
            </b-button>
        </div>
    </div>
</template>

<script>
    import * as Three from 'three';

    export default {
        name: 'Home',
        computed: {
            portfolioURL() {
                return process.env.VUE_APP_PORTFOLIO_LINK;
            },
        },
        mounted() {
            if (window.innerWidth >= 800 || screen.width >= 800) {
                this.init();
                this.animate();
            }
        },
        data() {
            return {
                separation: 100,
                amountx: 200,
                amounty: 150,
                container: null,
                stats: null,
                camera: null,
                scene: null,
                renderer: null,
                particles: null,
                count: 0,
                currentAboutTab: 2,
                hoveringAbout: false,
                tabTitles: ['Education', 'Work Experience', 'Skills & Proficiencies'],
            };
        },
        methods: {
            init() {
                const container = document.getElementById('home');
                this.camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
                this.camera.position.x = 0;
                this.camera.position.y = 800;
                this.camera.position.z = 1000;

                this.scene = new Three.Scene();

                this.camera.lookAt(this.scene.position);

                const numParticles = this.amountx * this.amounty;
                const positions = new Float32Array(numParticles * 3);
                const scales = new Float32Array(numParticles);

                let i = 0, j = 0;

                for (let ix = 0; ix < this.amountx; ix++) {
                    for (let iy = 0; iy < this.amounty; iy++) {
                        positions[i] = ix * this.separation - ((this.amountx * this.separation) / 2); // x
                        positions[i + 1] = 0; // y
                        positions[i + 2] = iy * this.separation - ((this.amounty * this.separation) / 2); // z
                        scales[j] = 1;
                        i += 3;
                        j++;
                    }
                }

                const geometry = new Three.BufferGeometry();
                geometry.setAttribute('position', new Three.BufferAttribute(positions, 3));
                geometry.setAttribute('scale', new Three.BufferAttribute(scales, 1));

                const material = new Three.MeshBasicMaterial();

                this.particles = new Three.Points(geometry, material);
                this.scene.add(this.particles);

                this.renderer = new Three.WebGLRenderer({antialias: true, alpha: true});
                this.renderer.setClearColor(0xffffff, 0);
                this.renderer.setPixelRatio(window.devicePixelRatio);
                this.renderer.setSize(window.innerWidth, window.innerHeight);
                container.appendChild(this.renderer.domElement);

                window.addEventListener('resize', this.onWindowResize, false);
            },
            animate() {
                requestAnimationFrame(this.animate);

                this.render();
            },
            render() {
                const positions = this.particles.geometry.attributes.position.array;
                const scales = this.particles.geometry.attributes.scale.array;
                let i = 0, j = 0;
                for (let ix = 0; ix < this.amountx; ix++) {
                    for (let iy = 0; iy < this.amounty; iy++) {
                        positions[i + 1] = (Math.sin((ix + this.count) * 0.3) * 50) +
                            (Math.sin((iy + this.count) * 0.5) * 50);
                        scales[j] = (Math.sin((ix + this.count) * 0.3) + 1) * 20 +
                            (Math.sin((iy + this.count) * 0.5) + 1) * 20;
                        i += 3;
                        j++;
                    }
                }

                this.particles.geometry.attributes.position.needsUpdate = true;
                this.particles.geometry.attributes.scale.needsUpdate = true;
                this.renderer.render(this.scene, this.camera);
                this.count += 0.1;
            },
            onWindowResize() {
                this.camera.aspect = window.innerWidth / window.innerHeight;
                this.camera.updateProjectionMatrix();

                this.renderer.setSize(window.innerWidth, window.innerHeight);

            },
            increaseAboutTab() {
                if (this.currentAboutTab === 2) {
                    this.currentAboutTab = 0;
                } else {
                    this.currentAboutTab += 1;
                }
            },
            decreaseAboutTab() {
                if (this.currentAboutTab === 0) {
                    this.currentAboutTab = 2;
                } else {
                    this.currentAboutTab -= 1;
                }
            },
        },
    };
</script>
<style lang="sass">
    @import '@/styles/variables.sass'

    #app
        .slide-out-menu, .mobile-header
            display: none

    .home
        width: 100vw

        canvas
            position: absolute
            top: 0
            z-index: 0

        .andrew-image
            max-width: 350px
            position: absolute
            top: 175px
            left: 55%
            z-index: 1
            -webkit-transition: left 0.25s ease-in-out
            -moz-transition: left 0.25s ease-in-out
            -o-transition: left 0.25s ease-in-out
            transition: left 0.25s ease-in-out

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
            width: calc(50vw + 1rem)
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
                color: $dark-black
                width: 69px
                height: 69px

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

        .mobile-card-header
            display: none

        .tab-container
            width: 100%
            background-color: $light-black
            border: none

            .card-body
                .card-header
                    background-color: $light-black !important

            ul
                padding-left: 0
                width: 100%
                display: inline-flex
                list-style: none
                justify-content: space-around

                &.vertical-list
                    display: flex
                    align-items: flex-start
                    text-align: left
                    flex-direction: column
                    width: fit-content
                    margin: 0 2rem 1rem 2rem

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
        margin-top: 2rem
        min-height: 98vh
        margin-bottom: 1rem

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

                    .button-row
                        width: 100%
                        display: flex
                        justify-content: space-around

    .portfolio-button
        margin: 5rem

    .mobile-avatar
        display: none

    @media (max-width: $medium-breakpoint)
        .home
            .andrew-image
                left: 55%
                width: 250px
                top: 200px

            .blue-content-box
                width: calc(50vw + 1rem)
                height: 500px

                .med-text
                    font-size: 1.3rem

                .contact-icons
                    margin: 2.5rem 0 0 0
                    display: flex
                    flex-direction: row
                    justify-content: space-between
                    align-items: baseline
                    min-width: 269px

                    .contact-icon
                        width: 45px
                        height: 45px

            .dark-content-box
                display: flex
                flex-direction: column

                .card-header
                    display: none

                .mobile-card-header
                    display: flex
                    margin: auto
                    width: 100%
                    justify-content: space-between
                    align-items: center

                    .mobile-tab-header
                        color: white
                        font-size: 1.8rem
                        margin: 0

                .tab-container
                    .card-body
                        padding: 15px 5px 5px 5px

                    h2
                        font-size: 1.8rem

                    ul
                        &.vertical-list
                            text-align: center

        .featured-projects
            .featured-row
                display: flex
                flex-direction: column
                align-items: center

                .featured-highlight
                    margin: 4rem 2rem 2rem 2rem
                    max-width: 400px

    @media (max-width: $phone-breakpoint)
        #app
            .slide-out-menu
                display: block

        .scrollactive-nav.main-nav-container
            display: none

        #app
            .mobile-header
                display: flex
                border-bottom: 2px solid $primary

        .home
            .header-name-callout
                display: none

            .mobile-avatar
                display: block
                height: 150px
                width: 150px
                border-radius: 100px
                border: 5px solid $white
                margin-bottom: 1rem

            .andrew-image
                display: none

            .blue-content-box
                width: 100vw
                right: 0
                left: 0
                top: 0
                border-radius: 0 0 10px 10px
                margin: 0
                height: 725px
                padding-top: 6rem

                h2
                    font-size: 2rem

                .med-text
                    font-size: 1.2rem

                .contact-icons
                    margin: 4rem 0 0 0
                    display: flex
                    flex-direction: row
                    justify-content: space-around
                    align-items: baseline
                    width: 90vw

                    .contact-icon
                        width: 55px
                        height: 55px

            .dark-content-box
                margin: 3.5rem auto auto auto
                width: 100vw

                .nav.nav-pills.card-header-pills, .card-header
                    padding: 0 0 0.5rem 0
                    background-color: $light-black

                    .nav-link
                        font-size: 1.2rem
                        margin-top: 1rem

        .featured-projects
            h1
                margin: 0 auto 2rem auto
                padding: 1rem
                font-size: 1.8rem

            .featured-row
                max-width: 100vw

                .featured-highlight
                    margin: 2rem 1rem 1rem 1rem

                    .featured-project
                        padding: 2rem 0.5rem 3rem 0.5rem
                        min-height: 450px
                        width: 300px

                        h3
                            text-align: center

                        .intro
                            width: 100%
                            font-size: 1rem
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
                width: 750px
                z-index: 1
                -webkit-transition: width 0.5s ease-in-out
                -moz-transition: width 0.5s ease-in-out
                -o-transition: width 0.5s ease-in-out
                transition: width 0.5s ease-in-out

        .dark-content-box
            margin: 4rem auto 2rem auto
</style>
