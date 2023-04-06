import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  container: {
    flexFlow: 'row',
    height: 'fit-content',
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing.xl,
    background: 'transparent'
  },
  scrollX: {
    overflowX: 'auto',
    overflowY: 'hidden',
    scrollbarWidth: 'thin'
  }
}));
