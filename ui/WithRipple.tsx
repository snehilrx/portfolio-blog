import { Button, ButtonProps, ContainerProps, NavLink, useMantineTheme } from "@mantine/core";
import React, { CSSProperties, PropsWithChildren, ReactElement, useRef } from "react";
import useRipple from '../hooks/useRipple'


const WithRipple = () => {
    const theme = useMantineTheme()
    const {
        addRipple, // Attach this to any mouse event listener
        ripples // Render this to see the ripples
    } = useRipple({
        // You can pass ripples` CSS here (no worries, it's optional)
        background: theme.colors[theme.primaryColor][theme.colorScheme == "light" ? 7 : 0]
    })
    const css: CSSProperties = { position: 'relative', overflow: 'hidden' }
    return {css, addRipple, ripples}
};

export default WithRipple;


export function RippleButton<C = "button">(props: import("@mantine/utils").PolymorphicComponentProps<C, ButtonProps & {onClick?: (event: React.MouseEvent<HTMLElement>) => void}>) {
    const theme = useMantineTheme()
    
    const {
        addRipple, // Attach this to any mouse event listener
        ripples // Render this to see the ripples
    } = useRipple({
        // You can pass ripples` CSS here (no worries, it's optional)
        background: theme.colors[theme.primaryColor][theme.colorScheme == "light" ? 5 : 1]
    })
    
    return (
        <Button<any>
            {...props}
            color='brand'
            style={{ position: 'relative', overflow: 'hidden' }}
            onClick={(event: React.MouseEvent<HTMLElement>) => {
                addRipple(event)
                if (props.onClick) {
                    props.onClick(event)
                }
            }}
        >
            {ripples}
            {props.children}
        </Button>
    );
};