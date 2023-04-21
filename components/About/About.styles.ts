import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  root: {
    [theme.fn.largerThan('md')] : {
      background: theme.colors[theme.primaryColor][theme.colorScheme == 'light' ? 1 : 9 ],
      borderRadius: theme.radius.xl, 
      flexDirection: 'column',
      padding: theme.spacing.xl
    }
  },
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    [theme.fn.largerThan('md')] : {
      flexDirection: 'row',
    }
  }, 
  list: {
    flexDirection: 'column',
    width: '100%',
    [theme.fn.largerThan('xs')] : {
      flexDirection: 'row',
      width: 'unset'
    }
  },
}));
