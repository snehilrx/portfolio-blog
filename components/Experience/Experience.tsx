import { Center, Container, Tabs } from "@mantine/core";
import { Data } from "../Data";


export function Experience() {
    const { experiences } = Data.experience
    return <Container>
        <Tabs variant="pills"
        radius='lg'
        defaultValue={experiences.at(0)?.key}
        maw={640}
        orientation="horizontal">
        <Tabs.List>
            {experiences.map(item => {
                return <Tabs.Tab p='xl' key={item.key} value={item.key}>{item.name}</Tabs.Tab>
            })}
        </Tabs.List>

        {experiences.map(item => {
            return <Tabs.Panel key={item.key} p='xl' value={item.key} >{item.description}</Tabs.Panel>
        })}
    </Tabs>
    </Container>
}