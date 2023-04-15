import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
    rootAlt: {
        [theme.fn.largerThan('sm')] : {
            flexDirection: 'row-reverse'
        }
    },
    root: {
        [theme.fn.largerThan('sm')] : {
            flexDirection: 'row'
        }
    },
    rootBase: {
        overflowWrap: 'anywhere',
        flexDirection: 'column',
    },
    container: {
        [theme.fn.largerThan('md')] : {
            maxWidth: 480
        }
    },
    text : {
        textAlign: 'center',
        [theme.fn.largerThan('md')] : {
            textAlign: 'right',
        }
    }
}))
