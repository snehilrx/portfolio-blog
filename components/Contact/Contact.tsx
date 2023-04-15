import { Button, Center, Container, Flex, Text, Title } from "@mantine/core";
import useStyles from './Contact.styles';
import { Data } from "../Data";

export function Contact() {
    const { classes } = useStyles();
    const { contact } = Data
    return (<Container p='0'>
        <Center  m={{xl: 'xl', base: '0'}} className={classes.container}>
            <Flex gap='md' direction='column' align="center">
                <Title weight={900} align="center">{contact.title}</Title>
                <Text align="center" size="sm" sx={{ maxWidth: 480, fontFamily: "fira" }}>
                    {contact.content}
                </Text>
                <Button<'a'> w='fit-content' component="a" href={`mailto:${Data.info.email}`} variant="outline">{contact.cta}</Button>
            </Flex>
        </Center>
    </Container>)
}