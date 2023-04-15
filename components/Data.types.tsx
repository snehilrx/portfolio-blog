import { IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { ReactNode } from "react"

export interface AppData {
    about: AboutPage,
    navItems: NavItems[],
    hero: HeroPage,
    info: InfoItems,
    experience: ExperiencePage,
    contact: ContactPage,
    project: ProjectPage
}

export interface ProjectPage {
    projects: ProjectItem[]
}

export interface ProjectItem {
    title: string,
    tags: string[],
    content: ReactNode
    cover: string,
    link: string,
    demo: string
}

export interface ContactPage {
    content: string,
    title: string
    cta: string
}

export interface InfoItems {
    email: String,
    socials: SocialItem[]
}

export interface SocialItem {
    link: string,
    icon: IconDefinition,
    text: string,
}

export interface HeroPage {
    pretitle: ReactNode
    title: ReactNode
    subtitle: ReactNode
    discription: ReactNode
}

export interface NavItems {
    id: string,
    text: String,
    alias: String | undefined,
    link: string,
    component: Function,
    showInNav: boolean,
    showHeader: boolean
}

export interface AboutPage {
    discription: ReactNode,
    listHeader: ReactNode,
    list: ListData[]
}

export interface ExperiencePage {
    experiences: CompanyInfo[]
}

export interface CompanyInfo {
    key: string,
    name: string,
    description: ReactNode
}

export interface ListData {
    text: ReactNode,
    icon: ReactNode,
    subItems: ListData[],
    key: string
}