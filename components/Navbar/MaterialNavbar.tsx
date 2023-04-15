import { Button, SegmentedControl, Group, Header, NavLink, Navbar, MediaQuery, ScrollArea, Text, SegmentedControlItem, Flex, Center } from '@mantine/core';
import useStyles from './MaterialNavbar.styles';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import React, { MutableRefObject } from 'react';
import { Data, defaultItem } from '../Data';
import { AppProps } from 'next/app';

function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = React.useState<string>("null");

    React.useEffect(() => {
        let lastScrollY = window.pageYOffset;

        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;
            const direction = scrollY > lastScrollY ? "down" : "up";
            if (direction !== scrollDirection && (scrollY - lastScrollY > 1 || scrollY - lastScrollY < -1)) {
                setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };
        window.addEventListener("scroll", updateScrollDirection); // add event listener
        return () => {
            window.removeEventListener("scroll", updateScrollDirection); // clean up
        }
    }, [scrollDirection]);

    return scrollDirection;
};

export interface Scroll {
    scrollFunction: () => void
    ref: MutableRefObject<HTMLDivElement>
}

interface MaterialNavbarProps {
    scrollHooks: Map<string, Scroll> | undefined
}

interface MaterialNavbarListProps extends MaterialNavbarProps {
    opened: boolean
}

export function MaterialNavbarList(props: MaterialNavbarListProps) {
    const { scrollHooks, opened } = props
    const { classes } = useStyles();
    const scrollDirection = useScrollDirection()
    const navItems = Data.navItems.filter((item) => item.showInNav).map(
        (item) => {
            const nav: SegmentedControlItem = { label: `${item.id}. ${item.text}`, value: `${item.id}` }
            return nav
        }
    )
    return (<MediaQuery largerThan="sm" styles={{ display: 'none', width: 0 }}>
        <Navbar p="md" 
        hiddenBreakpoint="sm" 
        hidden={!opened}
        className={classes.center}
         width={{ xs: '100%', sm: 0 }}>
            <Center>
            <Flex direction='column' justify="center" w="fit-content">
                <SegmentedControl
                    orientation="vertical"
                    data={navItems}
                    color='brand'
                    value={defaultItem}
                    onChange={(value) => scrollHooks?.get(value)?.scrollFunction()}
                    fullWidth
                    size='xl'
                />
                <Button
                    color='brand'>Resume</Button>
                <ColorSchemeToggle />
            </Flex>
            </Center>
        </Navbar>
    </MediaQuery>)
}

export function MaterialNavbar(props: MaterialNavbarProps) {
    const { scrollHooks } = props
    const { classes } = useStyles();
    const scrollDirection = useScrollDirection()
    const navItems = Data.navItems.filter((item) => item.showInNav).map(
        (item) => {
            const nav: SegmentedControlItem = { label: `${item.id}. ${item.text}`, value: `${item.id}` }
            return nav
        }
    )

    return (
        <Header className={scrollDirection == 'down' ? classes.show : classes.hide} sx={{ background: 'transparent', display: 'flex', justifyContent: 'center' }} fixed={true} height={100} withBorder={false}>
            <MediaQuery largerThan="sm" styles={(theme) => (
                {
                    visibility: 'unset',
                    justifyContent: "right",
                    margin: theme.spacing.xl,
                    padding: theme.spacing.sm,
                    borderRadius: theme.radius.lg,
                    width: 'fit-content',
                    backgroundColor: theme.colors[theme.primaryColor][theme.colorScheme == 'light' ? 0 : 7]
                }
            )}>
                <Group className={classes.container}>
                    <ScrollArea offsetScrollbars scrollbarSize={2} scrollHideDelay={0}>
                        <SegmentedControl
                            data={navItems}
                            color='brand'
                            value={defaultItem}
                            onChange={(value) => scrollHooks?.get(value)?.scrollFunction()}
                        />
                    </ScrollArea>
                    <Button
                        color='brand'>Resume</Button>
                    <ColorSchemeToggle />
                </Group>
            </MediaQuery>
        </Header>
    );
}
