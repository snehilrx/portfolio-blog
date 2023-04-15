import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
    container: {
        padding: theme.spacing.sm,
        borderRadius: theme.radius.lg,
        background: theme.colors[theme.primaryColor][theme.colorScheme == 'light' ? 2 : 8],
        [theme.fn.largerThan('lg')] : {
            padding: theme.spacing.lg,
        }
    }
}))