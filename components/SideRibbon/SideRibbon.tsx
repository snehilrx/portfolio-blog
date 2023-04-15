import { ButtonStylesNames, ButtonStylesParams, DefaultProps, Flex } from '@mantine/core';
import { Variants } from '@mantine/styles'
import useStyles from './SideRibbon.styles';
import { CSSObject } from '@emotion/react';


export interface SideRibbonProps extends DefaultProps {
    position: Variants<'bottom-left' | 'top-right'>;
    children: React.ReactElement;
}

export function SideRibbon({ children, position }: SideRibbonProps) {
    const { classes } = useStyles();
    const positionStyle: CSSObject = (position == "bottom-left") ? {
        bottom: 0,
        left: 0
    } : {
        top: 0,
        right: 0
    }
    return (
        <>
            <Flex
                className={classes.container}
                sx={positionStyle}
                gap="xl"
                justify="flex-start"
                align="flex-start"
                direction="column"
                wrap="wrap"
                color='brand'>
                {(position == "bottom-left") ? <>
                    {children}
                    <span color='brand' className={classes.ribbon}/>
                </> : <>
                    <span color='brand' className={classes.ribbon}/>
                    {children}
                </>}
            </Flex>
        </>
    );
}
