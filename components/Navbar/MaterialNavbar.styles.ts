import { createStyles } from '@mantine/core';

const animateAll = {
  transition: 'all',
  transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)',
  transitionDuration: '0.5s',
}

export default createStyles((theme) => ({
  center: {
    justifyContent: 'center'
  },
  list: {
    flexFlow: 'column',
    height: 'fit-content',
    display: 'flex',
    justifyContent: 'center',
    padding: 0,
    margin: 0,
  },
  container: {
    flexFlow: 'row',
    height: 'fit-content',
    display: 'flex',
    justifyContent: 'center',
    padding: 0,
    margin: 0,
    overflow: 'hidden'
  },
  scrollX: {
    overflowX: 'auto',
    overflowY: 'hidden',
    scrollbarWidth: 'thin'
  },
  show : {
    ...animateAll,
    overflow: 'hidden',
    marginTop: '-15rem'
  },
  hide : {
    ...animateAll,
    marginTop: 'unset'
  }
}));
