import { Global } from '@mantine/core';

export function CustomFonts() {
    return (
        <Global
            styles={[
                {
                    '@font-face': {
                        fontFamily: 'Google',
                        src: `url('./fonts/GoogleSans-Bold.woff') format("woff2")`,
                        fontWeight: 700,
                        fontStyle: 'normal',
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Google',
                        src: `url('./fonts/GoogleSans-BoldItalic.woff') format("woff2")`,
                        fontWeight: 700,
                        fontStyle: 'italic',
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Google',
                        src: `url('./fonts/GoogleSans-Medium.woff') format("woff2")`,
                        fontWeight: 600,
                        fontStyle: 'normal',
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Google',
                        src: `url('./fonts/GoogleSans-MediumItalic.woff') format("woff2")`,
                        fontWeight: 600,
                        fontStyle: 'italic',
                    },
                },
                {
                    '@font-face': {
                      fontFamily: 'Google',
                      src: `url('./fonts/GoogleSans-Regular.woff') format("woff2")`,
                      fontWeight: 400,
                      fontStyle: 'normal',
                    },
                  },
                  {
                    '@font-face': {
                      fontFamily: 'Google',
                      src: `url('./fonts/GoogleSans-Italic.woff') format("woff2")`,
                      fontWeight: 400,
                      fontStyle: 'italic',
                    },
                  },
                  
                  {
                    '@font-face': {
                      fontFamily: 'mono',
                      src: `url('./fonts/CutiveMono-Regular.woff') format("woff")`,
                      fontWeight: 400,
                      fontStyle: 'normal',
                    },
                  },
            ]}
        />
    );
}