import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  container: {
    position: 'fixed',
    padding: `0 ${theme.spacing.xs}`,
    height: '100%',
    [theme.fn.largerThan('md')]: {
      padding: `0 ${theme.spacing.xl}`,
    },
  },
  ribbon: {
    maskImage: 'url(./circle.svg)',
    width: '20px',
    flexGrow: 1,
    alignSelf: 'center',
    backgroundColor: theme.colors[theme.primaryColor][theme.colorScheme == 'light' ? 5 : 7]
  }
}));
