import { Flex, Container, MediaQuery, Header, Anchor, Divider, Title, AppShell, Burger, Button, Group } from '@mantine/core';
import { SideRibbon } from '../components/SideRibbon/SideRibbon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { createStyles } from '@mantine/core';
import { MaterialNavbar, MaterialNavbarList, Scroll } from '../components/Navbar/MaterialNavbar';
import { Data, setDefaultItem } from '../components/Data'
import { useState } from 'react';
import { Footer } from '../components/Footer/Footer';
import { useInView } from 'react-intersection-observer';

const styles = createStyles((theme) => ({
  email: {
    fontFamily: "fira",
    writingMode: 'vertical-rl',
    height: '60%',
    color: theme.colorScheme == 'light' ? theme.colors.brand[6] : theme.colors.brand[3]
  },
  iconContainer: {
    height: '60%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'end'
  },
  icon: {
    color: theme.colorScheme == 'light' ? theme.colors.brand[9] : theme.colors.brand[0],
    background: theme.colorScheme == 'light' ? theme.colors.brand[2] : theme.colors.brand[7],
    borderRadius: theme.radius.xl,
    padding: theme.spacing.sm
  },
  container: {
    flex: '1 1 auto',
    alignItems: 'center',
    overflow: 'hidden',
    [theme.fn.largerThan('sm')]: {
      marginLeft: `calc(${theme.spacing.xl} * 2)`,
      marginRight: `calc(${theme.spacing.xl} * 2)`
    },
    [theme.fn.largerThan('lg')]: {
      alignItems: 'start',
      marginLeft: 0,
      marginRight: 0
    },
  }
}));
const Side = () => {
  const { info } = Data
  const { classes } = styles()
  return <MediaQuery smallerThan="sm" styles={{ visibility: "hidden" }}>
    <Container>
      <SideRibbon position="bottom-left">
        <Flex className={classes.iconContainer}
          gap="xl"
          justify="flex-center"
          align="flex-center"
          direction="column"
          wrap="nowrap">
          {info.socials.map((social) =>
            <Button<'a'>
              key={social.text}
              component={'a'}
              href={social.link}
              rel="noopener noreferrer"
              aria-label="External Link"
              className="external"
              target="blank">
              <FontAwesomeIcon size="lg" icon={social.icon} />
            </Button>
          )}
        </Flex>
      </SideRibbon>
      <SideRibbon position="top-right">
        <Anchor color='brand' className={classes.email} href={`mailto:${info.email}}`}>{info.email}</Anchor>
      </SideRibbon>
    </Container>
  </MediaQuery>
}

const links = Data.navItems.map<[string | undefined, string]>((item) => [item.link, item.id])

export default function HomePage() {
  const { classes } = styles()
  const [opened, setOpened] = useState(false);
  const scrollHooks: Map<string, Scroll> = new Map<string, Scroll>(links.map((item) => {
    const { ref, inView, entry } = useInView({
      threshold: 0.2
    });

    if (inView) {
      setDefaultItem(item[1])
    }
    const scrollFunction = () => {
      setOpened(false)
      if (item[0]) {
        window.location.hash = item[0]
      }
    }
    const data: Scroll = { scrollFunction, ref: ref }
    return [item[1], data]
  }))
  return (
    <>
      <Side />
      <AppShell
        navbarOffsetBreakpoint="sm"
        navbar={
          <MaterialNavbarList opened={opened} scrollHooks={scrollHooks} />
        }
        footer={
          <Footer />
        }
        header={
          <div>
            <MaterialNavbar scrollHooks={scrollHooks} />
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Header sx={!opened ? { background: 'transparent' } : {}} withBorder={false} height={{ base: 50, md: 70 }}>
                <div style={{ justifyContent: 'end', display: 'flex', alignItems: 'center', height: '100%' }}>
                  <Group
                    pl="xl"
                    pr="xl"
                    h="100%"
                    sx={!opened ? (theme) => ({
                      background: theme.colors[theme.primaryColor][theme.colorScheme == 'light' ? 1 : 6],
                      borderBottomLeftRadius: theme.radius.xl,
                      transition: '1s'
                    }) : () => ({
                      transition: '1s'
                    })}>
                    <Burger
                      opened={opened}
                      onClick={() => setOpened((o) => !o)}
                      size="sm"
                    />
                  </Group>
                </div>
              </Header>
            </MediaQuery>
          </div>
        }
      >
        <Container sx={(theme) => ({
          [theme.fn.smallerThan('md')]: {
            padding: 0
          }
        })}>
          {Data.navItems.map((item) => {
            const ref = scrollHooks.get(item.id)?.ref
            return (
              <Flex
                id={item.link}
                key={item.id}
                direction='column'
                gap={{ base: 'xl', sm: 'lg' }}
                mt='xl'
                className={classes.container}
                ref={ref}>
                {item.showHeader && <Divider w='100%' my="sm" variant="dashed" pb='lg' label={<Title>{item.id}. {item.alias}</Title>} />}
                {<item.component />}
              </Flex>
            )
          })}
        </Container>
      </AppShell>
    </>
  );
}
