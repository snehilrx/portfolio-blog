import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  title: {
    fontSize: 100,
    fontWeight: 900,
    letterSpacing: -2,
    color: theme.colors[theme.primaryColor][theme.colorScheme == 'light' ? 5 : 7],
    [theme.fn.smallerThan('sm')]: {
      fontSize: 50,
    },
  },
  container: {
    flexDirection: 'column-reverse',
    [theme.fn.largerThan('md')] : {
      marginLeft: 'unset',
    },
    [theme.fn.largerThan('sm')] : {
      flexDirection: 'row',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: theme.spacing.xl,
    }
  },
  image: {
    maxWidth: '15rem',
    [theme.fn.smallerThan('xs')] : {
      paddingTop: 'unset'
    },
    [theme.fn.largerThan('md')] : {
      maxWidth: '22.5rem',
      paddingTop: 'unset'
    }
  }
}));
