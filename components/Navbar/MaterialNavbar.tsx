import { Button, SegmentedControl, Group, Header, NavLink, Navbar, MediaQuery } from '@mantine/core';
import { Variants } from '@mantine/styles'
import useStyles from './MaterialNavbar.styles';
import { CSSObject } from '@emotion/react';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';



export function MaterialNavbar() {
    const { classes } = useStyles();
    return (
        <MediaQuery largerThan="sm" styles={{ justifyContent: "right" }}>
            <Header className={classes.container} fixed={false} height={200} withBorder={false} position={{ top: 10, right: 10 }} p="xs">
                <Group position="center">
                    <SegmentedControl className={classes.scrollX}
                        data={[
                            { label: '01. About', value: '0' },
                            { label: '02. Experience', value: '1' },
                            { label: '03. Work', value: '2' },
                            { label: '04. Contact', value: '3' },
                        ]}
                    />
                    <Button variant='default'>Resume</Button>
                    <ColorSchemeToggle />
                </Group>
            </Header>
        </MediaQuery>
    );
}
