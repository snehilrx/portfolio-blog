import { Text, List, Flex, Image, Container } from '@mantine/core';
import useStyles from './About.styles';
import { Data } from '../Data';
import React from 'react';
import { ListData } from '../Data.types';

function FlattenList(list: ListData[]) {
    return <>
        {list.map((item) => {
            return <List key={item.key} pt='md'>
                <List.Item icon={item.icon}>
                    {item.text}
                    {FlattenList(item.subItems)}
                </List.Item>
            </List>
        })}
    </>
}

export function About() {
    const { classes } = useStyles();
    const { about } = Data
    return (
        <Flex direction='column' w="100%" className={classes.root}>
            <Flex
                className={classes.container}
                gap={{ base: 'sm', sm: 'lg' }}>
                <Image fit='fill' sx={{ maxWidth: 480 }} imageProps={{height: 822, width: 789 }} src='/images/laptop.svg' alt='about image, laptop and electronic devices, cartoon'/>
                <Text size="lg" sx={{ maxWidth: 480 }} mt="xl">{about.discription}</Text>
            </Flex>
            <Flex
                p={{sm: '0', md: "xl"}}
                justify={{base: "center", md: "flex-start"}}
                align={{base: "center", md: "start"}}
                direction="column"
                gap={{ base: 'sm', sm: 'lg' }}>
                <Text size="lg" mt="xl" mb="sm">{about.listHeader}</Text>
                <Flex ml='md' 
                    gap={{ base: 'sm', sm: 'lg' }}
                    className={classes.list}>
                    {FlattenList(about.list)}
                </Flex>
            </Flex>
        </Flex>
    );
}
