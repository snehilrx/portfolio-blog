import { useState } from 'react';
import NextApp, { AppProps, AppContext } from 'next/app';
import { getCookie, setCookie } from 'cookies-next';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { CustomFonts } from './_fonts';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  return (
    <>
      <Head>
        <title>Snehil</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{
          colorScheme,
          colors: {
            dark: ["#417878","#305E5E","#234A4A","#1A3A3A","#132828","#0E1B1B","#0A1313","#070D0D","#050909","#040606"],
            green: ["#91AFA2","#7BA795","#66A28A","#539D7F","#439775","#448068","#436E5C","#405F52","#3C534A",],
          },

          shadows: {
            md: '1px 1px 3px rgba(0, 0, 0, .25)',
            xl: '5px 5px 3px rgba(0, 0, 0, .25)',
          },

          fontFamily: 'Google, mono, sans-serif',
          headings: {
            fontFamily: 'Google, sans-serif',
            sizes: {
              h1: { fontSize: '2rem' },
            },
          },
        }} withGlobalStyles withNormalizeCSS>
          <CustomFonts/>
          <Component {...pageProps} />
          <Notifications />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
    colorScheme: getCookie('mantine-color-scheme', appContext.ctx) || 'dark',
  };
};
