import { Button, SegmentedControl, Group, Header, Navbar, MediaQuery, SegmentedControlItem, Flex, Center, MantineNumberSize } from '@mantine/core';
import useStyles from './MaterialNavbar.styles';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import React, { } from 'react';
import { Data, defaultItem } from '../Data';
import { RippleButton } from '../../ui/WithRipple';
import Link from 'next/link';

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
    ref: (node?: Element | null) => void,
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
                <Flex direction='column' justify="center" w="fit-content" gap='md'>
                    <Menu scrollHooks={scrollHooks} navItems={navItems} orientation='vertical' />
                </Flex>
            </Center>
        </Navbar>
    </MediaQuery>)
}

export function MaterialNavbar(props: MaterialNavbarProps) {
    const { scrollHooks } = props
    const navItems = Data.navItems.filter((item) => item.showInNav).map(
        (item) => {
            const nav: SegmentedControlItem = {
                label: <>{item.id}. {item.text}</>,
                value: `${item.id}`
            }
            return nav
        }
    )
    return <MaterialNavbarContainer hiddenInSmallScreen largerThan="sm">
        <Flex align='center' p={{ md: 'md', base: 'sm', sm: 'sm' }} gap='md'>
            <Menu scrollHooks={scrollHooks} navItems={navItems} orientation='horizontal' />
        </Flex>
    </MaterialNavbarContainer>
}

interface MenuProps {
    scrollHooks: Map<string, Scroll> | undefined,
    navItems: SegmentedControlItem[],
    orientation: "horizontal" | "vertical" | undefined
}

function Menu({ navItems, scrollHooks, orientation }: MenuProps) {
    return <>
        <SegmentedControl
            orientation={orientation}
            data={navItems}
            color='brand'
            value={defaultItem}
            onChange={(value) => scrollHooks?.get(value)?.scrollFunction()}
        />

        <RippleButton>
            Resume
        </RippleButton>

        <Link href={'/blog'}>
            <RippleButton>Blog</RippleButton>
        </Link>

        <ColorSchemeToggle />
    </>
}

export interface MaterialNavbarContainerProps {
    /** Header content */
    children: React.ReactNode;
    hiddenInSmallScreen?: boolean;
    largerThan?: MantineNumberSize;
}

export function MaterialNavbarContainer(props: MaterialNavbarContainerProps) {
    const { children, hiddenInSmallScreen, largerThan } = props
    const { classes } = useStyles();
    const scrollDirection = useScrollDirection()
    return (
        <Header className={scrollDirection == 'down' ? classes.show : classes.hide} sx={{ background: 'transparent', display: 'flex', justifyContent: 'center' }} fixed={true} height={100} withBorder={false}>
            <MediaQuery largerThan={largerThan} styles={(theme) => (
                {
                    visibility: 'unset',
                    justifyContent: "right",
                    margin: theme.spacing.xl,
                    borderRadius: theme.radius.lg,
                    width: 'fit-content',
                    backgroundColor: theme.colors[theme.primaryColor][theme.colorScheme == 'light' ? 0 : 7]
                }
            )}>
                <Group sx={hiddenInSmallScreen ? { visibility: 'hidden' } : {}} className={classes.container}>
                    {children}
                </Group>
            </MediaQuery>
        </Header>
    );
}
