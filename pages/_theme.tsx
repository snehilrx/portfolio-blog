import { Global } from '@mantine/core';

interface ThemeProps {
    isMounted : boolean
}

export default function Material3Theme({isMounted} : ThemeProps) {
    return (
        <Global
            styles={(theme) => {
                return {
                    [`a:link`] : { textDecoration: 'none' },
                    [`a:visited`] : { textDecoration: 'none' },
                    [`a:hover`] : { textDecoration: 'none' },
                    [`a:active`] : { textDecoration: 'none' },
                    'h1' : {
                        color: theme.colors[theme.primaryColor][theme.colorScheme == 'light' ? 7 : 3],
                    },
                    'body' : {
                        visibility: isMounted == false ? 'hidden' : 'unset'
                    },
                    'img': {
                        objectPosition: 'top'
                    },
                    'html': {
                        scrollBehavior: 'smooth'
                    },
                    '.mantine-Chip-label': {
                        background: theme.colors[theme.primaryColor][theme.colorScheme == 'light' ? 1 : 8],
                        [`&:hover`]: {
                            background: theme.colors[theme.primaryColor][theme.colorScheme == 'light' ? 2 : 9],
                        }
                    },
                    '.listIcon': {
                        height: theme.fontSizes.lg,
                        color: theme.colors[theme.primaryColor][theme.colorScheme == 'light' ? 8 : 3],
                        fill: theme.colors[theme.primaryColor][theme.colorScheme == 'light' ? 8 : 3],
                    },
                    '.mantine-Button-root': {
                        borderRadius: theme.radius.lg
                    },
                    '.mantine-SegmentedControl-root	': {
                        alignItems: "flex-start",
                        background: 'transparent'
                    },
                    '.mantine-SegmentedControl-indicator': {
                        borderRadius: theme.radius.lg,
                    },
                    '.mantine-SegmentedControl-label': {
                        color: theme.colorScheme == "light" ? theme.black : theme.white + "!important",
                        padding: theme.spacing.sm,
                        [theme.fn.largerThan('md')]: {
                            padding: theme.spacing.lg
                        },
                    },
                    '.mantine-SegmentedControl-control:not(:first-of-type)': {
                        border: 'unset',
                    },
                    '.mantine-Tabs-panel': {
                        borderRadius: theme.radius.lg,
                        marginTop: theme.spacing.md,
                        background: theme.colors[theme.primaryColor][theme.colorScheme == 'light' ? 1 : 9],
                        [theme.fn.largerThan('md')]: {
                            marginLeft: theme.spacing.md,
                            marginTop: 'unset',
                        },
                    },
                    '.mantine-Tabs-root': {
                        [theme.fn.largerThan('md')]: {
                            display: 'flex',
                            flexDirection: 'row',
                            flexGrow: 0
                        },
                    },
                    '.mantine-Tabs-tabsList': {
                        display: 'block'
                    },
                    '@keyframes useRippleAnimation' : {
                        from: {
                           opacity: 1,
                        visibility: 'visible'
                        },
                        to : {
                          transform: 'scale(15)',
                          opacity: 0,
                          visibility: 'hidden'
                        }
                      }                      
                }
            }} />)
}