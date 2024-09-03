import React from 'react';
import { createStyles, Container, Title, Text, Anchor, Overlay } from '@mantine/core';

// Define styles using createStyles
const useStyles = createStyles((theme) => ({
    hero: {
        fontSize: 'clamp(5.75rem, 1.2vw, 8.75rem)', // Responsive handling for font size
        fontWeight: 900,
        lineHeight: 1.1,
        '@media (max-width: 48rem)': { // Equivalent to $mantine-breakpoint-sm
          fontSize: '4.5rem', // rem(40px)
          lineHeight: 1.2,
        },
        '@media (max-width: 36rem)': { // Equivalent to $mantine-breakpoint-xs
          fontSize: '2.75rem', // rem(28px)
          lineHeight: 1.3,
        }
    },
    container: {
        padding: theme.spacing.xl,
        maxWidth: 800,
        margin: 'auto',
    },
    title: {
        marginBottom: theme.spacing.md,
    },
    section: {
        marginBottom: theme.spacing.md,
    },
    link: {
        color: theme.colors.blue[6],
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
}));

// PrivacyPolicy component
export default function PrivacyPolicy() {
    const { classes } = useStyles();

    return (
        <>
            <Container className={classes.container}>
                <Title className={classes.hero}>StreamSaver</Title>
                <Title className={classes.title}>Privacy Policy</Title>
                <Text className={classes.section}>
                    This privacy policy applies to the StreamSaver app (hereby referred to as "Application") for mobile devices that was created by Snehil (hereby referred to as "Service Provider") as an Ad Supported service. This service is intended for use "AS IS".
                </Text>
                <Text className={classes.section}>
                    <strong>What information does the Application obtain and how is it used?</strong>
                    <br />
                    The Application does not obtain any information when you download and use it. Registration is not required to use the Application.
                </Text>
                <Text className={classes.section}>
                    <strong>Does the Application collect precise real time location information of the device?</strong>
                    <br />
                    This Application does not collect precise information about the location of your mobile device.
                </Text>
                <Text className={classes.section}>
                    <strong>Do third parties see and/or have access to information obtained by the Application?</strong>
                    <br />
                    Since the Application does not collect any information, no data is shared with third parties.
                </Text>
                <Text className={classes.section}>
                    <strong>What are my opt-out rights?</strong>
                    <br />
                    You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.
                </Text>
                <Text className={classes.section}>
                    <strong>Children</strong>
                    <br />
                    The Application is not used to knowingly solicit data from or market to children under the age of 13.
                    <br />
                    The Service Provider does not knowingly collect personally identifiable information from children. The Service Provider encourages all children to never submit any personally identifiable information through the Application and/or Services. The Service Provider encourages parents and legal guardians to monitor their children's Internet usage and to help enforce this Policy by instructing their children never to provide personally identifiable information through the Application and/or Services without their permission. If you have reason to believe that a child has provided personally identifiable information to the Service Provider through the Application and/or Services, please contact the Service Provider at <Anchor href="mailto:snehil101@gmail.com" className={classes.link}>snehil101@gmail.com</Anchor> so that we can take the necessary actions. You must also be at least 16 years of age to consent to the processing of your personally identifiable information in your country (in some countries we may allow your parent or guardian to do so on your behalf).
                </Text>
                <Text className={classes.section}>
                    <strong>Security</strong>
                    <br />
                    The Service Provider is concerned about safeguarding the confidentiality of your information. However, since the Application does not collect any information, there is no risk of your data being accessed by unauthorized individuals.
                </Text>
                <Text className={classes.section}>
                    <strong>Changes</strong>
                    <br />
                    This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.
                </Text>
                <Text className={classes.section}>
                    This privacy policy is effective as of 2024-09-03
                </Text>
                <Text className={classes.section}>
                    <strong>Your Consent</strong>
                    <br />
                    By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by the Service Provider.
                </Text>
                <Text className={classes.section}>
                    <strong>Contact Us</strong>
                    <br />
                    If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at <Anchor href="mailto:snehil101@gmail.com" className={classes.link}>snehil101@gmail.com</Anchor>
                </Text>
            </Container>
        </>
    );
}
