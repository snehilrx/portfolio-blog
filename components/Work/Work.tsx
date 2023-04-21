import { Button, Chip, Container, Divider, Flex, Group, Image, Text, Title } from "@mantine/core";
import useStyles from "./Work.styles"
import { Data } from "../Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { RippleButton } from "../../ui/WithRipple";

export function Work() {
    return (<Container w='100%' p={0}>
        <ProjectHighlight />
    </Container>)
}

function ProjectHighlight() {
    const { classes } = useStyles()
    const { projects } = Data.project
    return <>
        {
            projects.map((item, index) => {
                return <Flex
                    className={
                        `${classes.rootBase} ${index%2 == 0 ? classes.root : classes.rootAlt}`
                    }
                    gap={{ base: 'sm', sm: 'lg' }}
                    w='100%'
                    pb="xl"
                    mt="xl"
                    key={item.title}>

                    {
                        function ImageOrVideo() {
                            if(item.cover.endsWith("mp4")) {
                                return <Button<'video'>
                                    component={'video'}
                                    h={240}
                                    w={240} mx="auto" radius="xl"
                                    src={item.cover}
                                    autoPlay
                                    muted
                                    loop
                                    className={classes.video}/>
                            } else {
                                return <Image
                                height={240}
                                width={240} mx="auto" radius="xl"
                                src={item.cover}
                                alt={`work preview, ${item.title}, ${item.tags}`}
                                fit='cover' />
                            }
                        }()
                    }
                    <Container className={classes.container} >
                        <Text size="xs" pt={{base: 'xl', lg: '0'}} sx={{fontFamily: 'fira'}}>Featured Project</Text>
                        <Title weight={900}>{item.title}</Title>
                        <Text pb='xl' pt='xl'>{item.content}</Text>
                        <Chip.Group>
                            <Group className={classes.text}>
                                {item.tags.map((tag) => {
                                    return <Chip variant="light" key={tag}>{tag}</Chip>
                                })}
                            </Group>
                        </Chip.Group>
                        <Divider mt="lg" />
                        <Group position={index%2 == 0 ? "right" : "left"} mt="lg" mb="xl" >
                            <RippleButton<'a'> component={'a'} href={item.link} size="sm" variant="filled"
                                rel="noopener noreferrer"
                                aria-label="External Link"
                                className="external"
                                target="blank">
                                <FontAwesomeIcon spacing={10} icon={faGithub} size="lg" />
                                <Text pl="md">Github</Text>
                            </RippleButton>
                            <RippleButton<'a'> component={'a'} href={item.demo} size="sm" variant="filled"
                                rel="noopener noreferrer"
                                aria-label="External Link"
                                className="external"
                                target="blank">
                                <FontAwesomeIcon spacing={10} icon={faLink} size="lg" />
                                <Text pl="md">Demo</Text>
                            </RippleButton>
                        </Group>
                    </Container>
                </Flex>
            })
        }
    </>
}

function ProjectTile() {

}