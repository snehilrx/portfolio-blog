import React, { useState } from 'react';
import NextApp, { AppProps, AppContext } from 'next/app';
import { getCookie, setCookie } from 'cookies-next';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import CustomFonts  from './_fonts';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Material3Theme from './_theme';
import { useLocalStorage } from '@mantine/hooks';

config.autoAddCss = false

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;

  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme ? props.colorScheme  : 'light');
  
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])
  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    if (mounted) {
      setColorSchemeValue(nextColorScheme)
    }
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  const [colorSchemeValue, setColorSchemeValue] = useLocalStorage<ColorScheme>({
    key: 'color-scheme',
    defaultValue: 'light',
  });

  if(mounted && 
    typeof colorScheme != undefined &&
    typeof colorSchemeValue != undefined && 
    colorScheme != undefined &&
    colorScheme != colorSchemeValue) {
    toggleColorScheme()
  }

  return (
    <>
      <Head>
        <title>Snehil</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="description" content="Brittany Chiang is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences." data-react-helmet="true"></meta>
      </Head>
      <ColorSchemeProvider  colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{
          colorScheme,
          colors: {
            brand: [
              "#D7EFDE",
              "#B3E0C0",
              "#8FD1A2",
              "#6BC283",
              "#062315",
              "#49B265",
              "#159947",
              "#1F5F5B",
              "#06373A",
              "#052c2e"
          ]},
          primaryColor : 'brand',
          shadows: {
            md: '1px 1px 3px rgba(0, 0, 0, .25)',
            xl: '5px 5px 3px rgba(0, 0, 0, .25)',
          },

          fontFamily: 'Product, mono, sans-serif',
          headings: {
            fontFamily: 'Product, sans-serif',
            sizes: {
              h1: { fontSize: '2rem' },
            },
          }
        }} withGlobalStyles withNormalizeCSS>
          <CustomFonts/>
          <Material3Theme isMounted={mounted}/>
          <Component  {...pageProps}>
          </Component>
          <Notifications />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getStaticProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
    colorScheme: 'light',
  };
};

