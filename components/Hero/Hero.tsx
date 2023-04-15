import { Title, Text, Anchor, Button, Flex, Container, MediaQuery, Center, Image, Transition } from '@mantine/core';
import useStyles from './Hero.styles';
import { Data } from '../Data'

export function Hero() {
  const { classes } = useStyles();
  const { hero } = Data
  return (
    <Transition mounted={true} transition="scale" duration={1000} timingFunction="ease">
      {(styles) =>
        <Flex
        style={styles}
          className={classes.container}>
          <Container fluid m="0" p="0">
            <Text size="lg" sx={{ maxWidth: 480, fontFamily: "fira" }} mt="lg">
              {hero.pretitle}
            </Text>
            <Title className={classes.title} >
              {hero.title}
            </Title>
            <Text color='dimmed' size="sm" sx={{ fontFamily: "fira" }}>
              {hero.subtitle}
            </Text>
            <Text size="lg" sx={{ maxWidth: 480 }} mt="xl">
              {hero.discription}
            </Text>
          </Container>
          <Image className={classes.image} mx="auto" fit="contain" src='/images/avatar.svg' />
        </Flex>}
    </Transition>

  );
}
