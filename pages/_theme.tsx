import { Global } from '@mantine/core';

export function Material3Theme() {
    return (
        <Global
            styles={(theme) => {
                return {
                    'img' : {
                        objectPosition: 'top' 
                    },
                    'html' : {
                        scrollBehavior: 'smooth'
                    },
                    '.mantine-Chip-label' : {
                        background: theme.colors[theme.primaryColor][theme.colorScheme == 'light' ? 1 : 8],
                        [`&:hover`] : {
                            background: theme.colors[theme.primaryColor][theme.colorScheme == 'light' ? 2 : 9],    
                        }
                    },
                    '.mantine-SegmentedControl-control' : {
                        color: theme.colorScheme == "light" ?  theme.black : theme.white + "!important",  
                    },
                    '.listIcon' : {
                        height: theme.fontSizes.lg,
                        color: theme.colors[theme.primaryColor][theme.colorScheme == 'light' ? 8 : 3],
                        fill: theme.colors[theme.primaryColor][theme.colorScheme == 'light' ? 8 : 3],
                    },
                    '.mantine-Button-root' : {
                        borderRadius: theme.radius.lg
                    },
                    '.mantine-SegmentedControl-root	' : {
                        background: 'transparent'
                    },
                    '.mantine-SegmentedControl-indicator' : {
                        borderRadius: theme.radius.lg,
                    },
                    '.mantine-SegmentedControl-label' : {
                        [theme.fn.largerThan('md')] : {
                            padding: theme.spacing.lg
                        },
                    },
                    '.mantine-SegmentedControl-control:not(:first-of-type)': {
                        border: 'unset',
                    },
                    '.mantine-Tabs-panel' : {
                        borderRadius: theme.radius.lg,
                        marginTop: theme.spacing.md,
                        background: theme.colors[theme.primaryColor][theme.colorScheme == 'light' ? 1 : 9],
                        [theme.fn.largerThan('md')] : {
                            marginLeft: theme.spacing.md,
                            marginTop: 'unset',
                        },
                    },
                    '.mantine-Tabs-root' : {
                        [theme.fn.largerThan('md')] : {
                            display: 'flex',
                            flexDirection: 'row',
                            flexGrow: 0
                        },
                    },
                    '.mantine-Tabs-tabsList' : {
                        display: 'block'
                    }
                }
            }}/>)
    }