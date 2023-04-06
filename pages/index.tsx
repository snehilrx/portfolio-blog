import { Welcome } from '../components/Welcome/Welcome';
import { Text, Flex, Container, MediaQuery, AppShell } from '@mantine/core';
import { SideRibbon } from '../components/SideRibbon/SideRibbon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'

import { createStyles } from '@mantine/core';
import { MaterialNavbar } from '../components/Navbar/MaterialNavbar';


const Side = () => {
  const { classes } = createStyles((theme) => ({
    email: {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.green[6],
      fontFamily: "mono",
      writingMode: 'vertical-rl',
      height: '60%',
    },
    iconContainer: {
      height: '60%',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.green[6],
      width: '100%',
      alignItems: 'center',
      justifyContent: 'end'
    }
  }))();
  return <MediaQuery smallerThan="sm" styles={{ visibility: "hidden" }}>
    <Container>
      <SideRibbon position="bottom-left">
        <Flex className={classes.iconContainer}
          gap="xl"
          justify="flex-center"
          align="flex-center"
          direction="column"
          wrap="nowrap">
          <FontAwesomeIcon icon={faGithubAlt} />
          <FontAwesomeIcon icon={faGithubAlt} />
          <FontAwesomeIcon icon={faGithubAlt} />
        </Flex>
      </SideRibbon>
      <SideRibbon position="top-right">
        <Text className={classes.email}>snehil101@gmail.com</Text>
      </SideRibbon>
    </Container>
  </MediaQuery>
}

export default function HomePage() {
  return (
    <>
      <Side />
      <Container>
        <MaterialNavbar />
        <Welcome />
      </Container>
    </>
  );
}
