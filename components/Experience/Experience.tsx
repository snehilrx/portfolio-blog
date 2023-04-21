import { Center, Container, ContainerProps, Tabs } from "@mantine/core";
import { Data } from "../Data";
import WithRipple from "../../ui/WithRipple";
import { PropsWithChildren } from "react";


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
                const {css, addRipple, ripples} = WithRipple()
                return <Tabs.Tab p='xl' key={item.key} value={item.key} style={css} onClick={addRipple}>
                    {item.name}
                    {ripples}
                </Tabs.Tab>
            })}
        </Tabs.List>

        {experiences.map(item => {
            const {css, addRipple, ripples} = WithRipple()
            return <Tabs.Panel key={item.key} p='xl' value={item.key} style={css} onClick={addRipple} >
                    {ripples}{item.description}
                </Tabs.Panel>
        })}
    </Tabs>
    </Container>
}