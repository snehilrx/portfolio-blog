import { createStyles, Box, Text, Group, rem, Container, Flex } from '@mantine/core';
import { IconListSearch } from '@tabler/icons-react';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
    link: {
        ...theme.fn.focusStyles(),
        display: 'block',
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        lineHeight: 1.2,
        fontSize: theme.fontSizes.sm,
        padding: theme.spacing.xs,
        borderTopRightRadius: theme.radius.sm,
        borderBottomRightRadius: theme.radius.sm,
        borderLeft: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
            }`,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
    },

    linkActive: {
        fontWeight: 500,
        borderLeftColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 5 : 6],
        color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 2 : 6],

        '&, &:hover': {
            backgroundColor:
                theme.colorScheme === 'dark'
                    ? theme.fn.rgba(theme.colors[theme.primaryColor][8], 0.25)
                    : theme.colors[theme.primaryColor][0],
        },
    },
}));

interface TableOfContentsProps {
    links: { label: string; link: string; order: number }[];
    active: string;
}

export function TableOfContents({ links, active }: TableOfContentsProps) {
    const { classes, cx } = useStyles();
    const items = links.map((item) => (
        <Link href={item.link}
        key={item.label}>
            <Box
                className={cx(classes.link, { [classes.linkActive]: active === item.link })}
                sx={(theme) => ({ paddingLeft: `calc(${item.order} * ${theme.spacing.md})` })}
            >
                {item.label}
            </Box>
        </Link>
    ));

    return (
        <Group align='center' >
            <Container maw={300}>
                <Group py="lg">
                    <IconListSearch size="1.1rem" stroke={1.5} />
                    <Text>Table of contents</Text>
                </Group>
                {items}
            </Container>
        </Group>
    );
}