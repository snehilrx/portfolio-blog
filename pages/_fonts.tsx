import { Global } from '@mantine/core';

export default function CustomFonts() {
    return (
        <Global
            styles={[
                {
                    '@font-face': {
                        fontFamily: 'Product',
                        src: `url('./fonts/google/ProductSans-Black.woff') format("woff2")`,
                        fontWeight: 900,
                        fontStyle: 'normal',
                        fontDisplay: 'swap'
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Product',
                        src: `url('./fonts/google/ProductSans-BlackItalic.woff') format("woff2")`,
                        fontWeight: 900,
                        fontStyle: 'italic',
                        fontDisplay: 'swap'
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Product',
                        src: `url('./fonts/google/ProductSans-Bold.woff') format("woff2")`,
                        fontWeight: 700,
                        fontStyle: 'normal',
                        fontDisplay: 'swap'
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Product',
                        src: `url('./fonts/google/ProductSans-BoldItalic.woff') format("woff2")`,
                        fontWeight: 700,
                        fontStyle: 'italic',
                        fontDisplay: 'swap'
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Product',
                        src: `url('./fonts/google/ProductSans-Medium.woff') format("woff2")`,
                        fontWeight: 600,
                        fontStyle: 'normal',
                        fontDisplay: 'swap'
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Product',
                        src: `url('./fonts/google/ProductSans-MediumItalic.woff') format("woff2")`,
                        fontWeight: 600,
                        fontStyle: 'italic',
                        fontDisplay: 'swap'
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Product',
                        src: `url('./fonts/google/ProductSans-Regular.woff') format("woff2")`,
                        fontWeight: 400,
                        fontStyle: 'normal',
                        fontDisplay: 'swap'
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Product',
                        src: `url('./fonts/google/ProductSans-Italic.woff') format("woff2")`,
                        fontWeight: 400,
                        fontStyle: 'italic',
                        fontDisplay: 'swap'
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Product',
                        src: `url('./fonts/google/ProductSans-Light.woff') format("woff2")`,
                        fontWeight: 300,
                        fontStyle: 'normal',
                        fontDisplay: 'swap'
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Product',
                        src: `url('./fonts/google/ProductSans-LightItalic.woff') format("woff2")`,
                        fontWeight: 300,
                        fontStyle: 'italic',
                        fontDisplay: 'swap'
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Product',
                        src: `url('./fonts/google/ProductSans-Thin.woff') format("woff2")`,
                        fontWeight: 200,
                        fontStyle: 'normal',
                        fontDisplay: 'swap'
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Product',
                        src: `url('./fonts/google/ProductSans-ThinItalic.woff') format("woff2")`,
                        fontWeight: 200,
                        fontStyle: 'italic',
                        fontDisplay: 'swap'
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'fira',
                        src: `url('./fonts/fira/FiraCode-Bold.woff') format("woff")`,
                        fontWeight: 'bolder',
                        fontStyle: 'normal',
                        fontDisplay: 'swap'
                    },
                }, {
                    '@font-face': {
                        fontFamily: 'fira',
                        src: `url('./fonts/fira/FiraCode-Light.woff') format("woff")`,
                        fontWeight: 'lighter',
                        fontStyle: 'normal',
                        fontDisplay: 'swap'
                    },
                }, {
                    '@font-face': {
                        fontFamily: 'fira',
                        src: `url('./fonts/fira/FiraCode-Medium.woff') format("woff")`,
                        fontWeight: 'bold',
                        fontStyle: 'normal',
                        fontDisplay: 'swap'
                    },
                }, {
                    '@font-face': {
                        fontFamily: 'fira',
                        src: `url('./fonts/fira/FiraCode-Regular.woff') format("woff")`,
                        fontWeight: 'normal',
                        fontStyle: 'normal',
                        fontDisplay: 'swap'
                    },
                }, {
                    '@font-face': {
                        fontFamily: 'fira',
                        src: `url('./fonts/fira/FiraCode-SemiBold.woff') format("woff")`,
                        fontWeight: 'bold',
                        fontStyle: 'normal',
                        fontDisplay: 'swap'
                    },
                }, {
                    '@font-face': {
                        fontFamily: 'fira',
                        src: `url('./fonts/fira/FiraCode-VF.woff') format("woff")`,
                        fontWeight: 400,
                        fontStyle: 'normal',
                        fontDisplay: 'swap'
                    },
                },
            ]}
        />
    );
}