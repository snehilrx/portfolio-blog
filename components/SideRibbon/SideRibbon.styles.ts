import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  container: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    position: 'fixed',
    padding: theme.spacing.md,
    height: '100%'
  },
  ribbon: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.green[6],
    maskImage: 'url(./circle.svg)',
    width: '20px',
    flexGrow: 1,
    alignSelf: 'center',
  }
}));
