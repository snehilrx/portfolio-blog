
import { faAndroid, faGithubAlt, faInternetExplorer, faJsSquare, faLinkedinIn, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { About } from './About/About'
import { Experience } from './Experience/Experience'
import { Work } from './Work/Work'
import { Contact } from './Contact/Contact'
import { Hero } from './Hero/Hero'
import { Anchor, Text } from '@mantine/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCube, faDatabase, faDiceOne, faHSquare, faPlay } from '@fortawesome/free-solid-svg-icons'
import Rxjava from '../images/rxjava'
import Typescript from '../images/typescript'
import { AppData, ListData } from './Data.types'
import Link from 'next/link'

const list: ListData[] = [
    {
        icon: <FontAwesomeIcon className='listIcon' icon={faAndroid} />,
        text: <Text>Android</Text>,
        key: 'android',
        subItems: [
            {
                icon: <FontAwesomeIcon className='listIcon' icon={faCube} />,
                text: <>JetPack Compose</>,
                subItems: [],
                key: 'compose'
            },
            {
                icon: <Rxjava />,
                text: <>RxJava</>,
                subItems: [],
                key: 'rxjava'
            },
            {
                icon: <FontAwesomeIcon className='listIcon' icon={faDatabase} />,
                text: <>Room</>,
                subItems: [],
                key: 'room'
            },
            {
                icon: <FontAwesomeIcon className='listIcon' icon={faDiceOne} />,
                text: <>Retrofit</>,
                subItems: [],
                key: 'retrofit'
            },
            {
                icon: <FontAwesomeIcon className='listIcon' icon={faHSquare} />,
                text: <>OkHttp</>,
                subItems: [],
                key: 'okhttp'
            },
            {
                icon: <FontAwesomeIcon className='listIcon' icon={faPlay} />,
                text: <>Exoplayer</>,
                subItems: [],
                key: 'exoplayer'
            }
        ]
    }, {
        icon: <FontAwesomeIcon className='listIcon' icon={faInternetExplorer} />,
        text: <>Web</>,
        key: 'web',
        subItems: [{
            icon: <FontAwesomeIcon className='listIcon' icon={faReact} />,
            text: <>React</>,
            key: 'react',
            subItems: [
                {
                    icon: <FontAwesomeIcon className='listIcon' icon={faJsSquare} />,
                    text: <>JavaScript</>,
                    subItems: [],
                    key: 'js'
                },
                {
                    icon: <Typescript />,
                    text: <>TypeScript</>,
                    subItems: [],
                    key: 'ts'
                },
            ]
        }, {
            icon: <FontAwesomeIcon className='listIcon' icon={faNodeJs} />,
            text: <>Nodejs</>,
            subItems: [],
            key: 'node'
        }]
    }
]

export const Data: AppData = {
    navItems: [
        {
            id: '00',
            text: 'hero',
            link: 'hero',
            component: Hero,
            showInNav: false,
            showHeader: false,
            alias: undefined,
        },
        {
            id: '01',
            text: 'About Me',
            alias: 'About me',
            link: 'about',
            component: About,
            showInNav: true,
            showHeader: true
        },
        {
            id: '02',
            text: 'Experience',
            alias: 'Where I have worked',
            link: 'experience',
            component: Experience,
            showInNav: true,
            showHeader: true
        },
        {
            id: '03',
            text: 'Work',
            alias: 'Some of my projects',
            link: 'work',
            component: Work,
            showInNav: true,
            showHeader: true
        },
        {
            id: '04',
            text: 'Contact',
            alias: 'Ping Me',
            link: 'contact',
            component: Contact,
            showInNav: true,
            showHeader: false
        },
    ],
    hero: {
        pretitle: 'Hi, I am',
        title: 'Snehil.',
        subtitle: '# Crafting code on mac that runs on mobile',
        discription: <>I am a software engineer and Android developer with a strong track record of delivering innovative, high-quality mobile applications. Currently, I work at <Anchor href='https://gonuclei.com/'>Nuclei</Anchor>, a leading technology company that specializes in fintech solutions for banks.</>
    },
    info: {
        email: 'snehil101@gmail.com',
        socials: [
            {
                link: 'https://github.com/snehilrx',
                icon: faGithubAlt,
                text: 'Github'
            },
            {
                link: 'https://www.linkedin.com/in/snehilrx/',
                icon: faLinkedinIn,
                text: 'LinkedIn'
            },
        ]
    },
    about: {
        discription: <>
            <p>
                Hello! I'm Snehil, an experienced Android developer with
                a passion for creating innovative apps that make a difference in people's lives.
                My journey in software development began during high school when I was learning Swing
                and discovered that Android uses Java as its primary language. Since then, I've been
                hooked on creating cutting-edge Android applications.
            </p>
            <p> Fast-forward to today, and I’ve had the privilege of working at
                Nuclei, a fintech startup, where I honed my skills in Android development.
                At Nuclei, I was responsible for designing and implementing user-friendly interfaces,
                integrating APIs, and optimizing performance for financial applications.
                I gained valuable experience in working with a fast-paced, dynamic startup environment
                and collaborating with cross-functional teams to deliver high-quality products.'
            </p>
        </>,
        listHeader: 'Here are a few technologies I’ve been working with recently',
        list
    },
    experience: {
        experiences: [
            {
                key: '01',
                name: 'Nuclei',
                description: <>During my time at Nuclei, I was entrusted with the responsibility of maintaining and developing the fedmobile application. I successfully completed the migration from Dagger to Hilt, leveraging the benefits of the new dependency injection framework while overcoming challenges. Additionally, I developed a robust rating management system that significantly enhanced the overall user experience by allowing users to provide feedback and rate various features. To ensure data security, I implemented sensitive data removal from the cache, taking appropriate measures to prevent unauthorized access. Furthermore, I improved the app's performance by implementing optimizations with Baseline Profiles, resulting in enhanced speed and stability. I also created launcher shortcuts for quick and convenient access to key features, and customized the UI for minor users, making it user-friendly and age-appropriate. My contributions reflect my expertise in software development, performance optimization, data security, and user-centric design, and I take pride in delivering a seamless and secure mobile app experience for our users at Nuclei.</>
            }
        ]
    },
    contact: {
        content: `I'm open to new opportunities and am always interested in making new connections. If you have any questions or would like to chat, please feel free to reach out to me. I'm happy to connect and see where things might lead. Thank you for your time and consideration.`,
        title: 'GET IN TOUCH',
        cta: 'Say Hello!'
    },
    project: {
        projects: [
            {
                title: "Shinebar",
                tags: ["android", "glsl", "shaders", "collapsing toolbar", "ui"],
                content: <>
                    <p>Android UI component that adds curved gradient to collapsing appbar using TextureView. </p>
                    <p>This project started as the way for me to learn the new AGSL shader for android.
                    You can read more about AGSL shader. <Anchor color='dimmed' href='https://developer.android.com/develop/ui/views/graphics/agsl'>https://developer.android.com/develop/ui/views/graphics/agsl</Anchor>
                    </p>
                    <p>Since alsl is support for android 13 and above, this project was rewritten in glsl.
                    </p>
                    <p>The main idea behind this project was to show a gradient backdrop to collapsing appbar which responds to the scroll change. The backdrop provides add an immersive experience to the app.
                    </p></>,
                cover: "https://i.imgur.com/pKrybg0.mp4",
                link: "https://github.com/snehilrx/ShineBar/",
                demo: "https://github.com/snehilrx/ShineBar/releases/tag/1.0.0"
            },
            {
                title: "CloudFlare OkHttp Bypass",
                tags: ["android", "cloudflare", "iam challenge", "hack", "okhttp"],
                content: <>
                    <p>Android Network libarary to bypass iam challenge of cloudflare</p>
                    <p>This libarary creates an okhttp client with an Interceptor that allows bypass of iam challenges of cloudflare.</p>
                    </>,
                cover: "./images/cloudflare.svg",
                link: "https://github.com/snehilrx/CloudflareBypassOkHttpClient",
                demo: "https://github.com/snehilrx/CloudflareBypassOkHttpClient"
            }
        ]
    }
}

export function setDefaultItem(defaultItemValue: string | undefined) {
    defaultItem = defaultItemValue
}
export var defaultItem: string | undefined = undefined