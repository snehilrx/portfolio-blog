import { Title, Text, Anchor, Button, Flex, Container, MediaQuery } from '@mantine/core';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Container m="lg">
        <Text size="lg" sx={{ maxWidth: 480, fontFamily: "mono" }} mt="xl">
          Hi, I am
        </Text>
        <Title className={classes.title} >
          Snehil.
        </Title>
        <Title sx={{fontFamily: "mono" }}>
           [Crafting code on mac that runs mobile]
        </Title>
        <Text size="lg" sx={{ maxWidth: 480 }} mt="xl">
          I am a software engineer and Android developer with a strong track record of delivering innovative, high-quality mobile applications. Currently, I work at Nuclie, a leading technology company that specializes in
        </Text>
      </Container>
    </>
  );
}
