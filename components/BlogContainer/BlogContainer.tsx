import { AppShell, Burger, Center, Container, Divider, Flex, Group, Header, MediaQuery, Navbar, Text, Title } from "@mantine/core"
import { useState } from "react"
import WithRipple from "../../ui/WithRipple"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ColorSchemeToggle } from "../ColorSchemeToggle/ColorSchemeToggle"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

interface BlogProps {
  navigation: React.ReactElement,
  children: React.ReactElement,
  backLink: string
}

const BlogContainer = ({ navigation, children, backLink }: BlogProps) => {
  const { css, addRipple, ripples } = WithRipple()
  const [opened, setOpened] = useState<boolean>(false)
  return <AppShell
    layout="alt"
    navbarOffsetBreakpoint="sm"
    navbar={opened == true ?
      <Navbar width={{ sm: 300 }} top={40} sx={{overflow: 'scroll'}}>
        <Navbar.Section grow mt='xl' mb='xl' mr='sm'>
          {navigation}
        </Navbar.Section>
      </Navbar> : <></>}
    header={
      <div>
        <MediaQuery smallerThan="sm" styles={{ visibility: 'hidden' }}>
          <Navbar width={{ sm: 300 }}  sx={{overflow: 'scroll'}}>
            <Navbar.Section>
              <Flex mx='sm' my='xl' align='center' style={css} onClick={addRipple}>
                <Link href={backLink}>
                  <Text color='brand' pr='sm'>
                    <FontAwesomeIcon icon={faArrowLeft} size='2x' spacing="10p" />
                  </Text>
                </Link>
                <Title w="calc(100vw - 200px)" maw={800}>Blog</Title>
                <ColorSchemeToggle />
              </Flex>
            </Navbar.Section>
            <Navbar.Section grow pt='xl' mr='sm'>
              {navigation}
            </Navbar.Section>
          </Navbar>
        </MediaQuery>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Header sx={!opened ? { background: 'transparent' } : {}} withBorder={false} height={{ base: 50, md: 70 }}>

            <div style={{ justifyContent: 'end', display: 'flex', alignItems: 'center', height: '100%' }}>

              <Group
                pl="xl"
                pr="xl"
                h="100%"
                sx={!opened ? (theme) => ({
                  background: theme.colors[theme.primaryColor][theme.colorScheme == 'light' ? 1 : 7],
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
      {children}
    </Container>
  </AppShell>
}

export default BlogContainer;