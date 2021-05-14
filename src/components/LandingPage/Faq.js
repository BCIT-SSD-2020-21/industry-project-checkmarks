import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { withStyles } from '@material-ui/core/styles';
import { checkmarksTheme } from '../../styles/Themes';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '70%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
}));

const Accordion = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: checkmarksTheme.bgCardHeader1,
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        backgroundColor: 'rgba(255, 0, 0, .25)',
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);

export default function Faq() {
    const classes = useStyles();

    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            {/* Hero unit */}
            <Container
                maxWidth="sm"
                component="main"
                className={classes.heroContent}
                >
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                    >
                    F.A.Q
                </Typography>
                <Typography
                    variant="h5"
                    align="center"
                    color="textSecondary"
                    component="p"
                    >
                    {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit */}
                </Typography>
            </Container>
            <Container>
            {/*  /// PANEL 1 ////  */}
            <Accordion
                square
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
                >
                <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                    >
                    <Typography>What is a trademark?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    A trademark is like a fingerprint for businesses. It is something that distinguishes your goods or services from others. <br /> 
                    Trademarks include brands, names, slogans, logos, colours, sounds, textures, the way something is packaged, the layout of a store, etc
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/*  /// PANEL 2 ////  */}
            <Accordion
                square
                expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')}
                >
                <AccordionSummary
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                    >
                    <Typography>
                    What is the difference between a trade name and a trademark?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    A trade name is the name of your business, which is sometimes the tradename is the trademark
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/*  /// PANEL 3 ////  */}
            <Accordion
                square
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}
                >
                <AccordionSummary
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                     >
                    <Typography>Should you register your trademark?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Generally, simply making and using a trademark gives you a trademark (called a <strong><em>“common law trademark”</em></strong>). This is free but relates to real goodwill enjoyed by the trademark and so it can be hard to enforce across Canada. If you only have goodwill in Vancouver, it will very hard to enforce your common law trademark rights in Halifax.  Registering a trademark with the Canadian Intellectual Property Office <strong>(CIPO)</strong> and there are several advantages to doing so:<br/>
                    <br/>
                    <strong>(a)</strong> Registration of your trademark will give you Canada-wide rights to the exclusive use of that mark in your industry regardless of whether your trademark enjoys goodwill or reputation in any particular area of Canada;<br/>
                    <br/>
                    <strong>(b)</strong> Registration allows you to take easier steps to prevent others from using an identical or confusingly similar trademark in relation to a similar business;<br/>
                    <br/>
                    <strong>(c)</strong> CIPO will screen future trademark registration applications thereby offering your registered trademark some additional protection;<br/>
                    <br/>
                    <strong>(d)</strong> Trademark registration will deter others from adopting a trademark similar to yours; and<br/>
                    <br/>
                    <strong>(e)</strong> Trademark registration may prevent others from registering a trademark similar to yours, and then taking action against you for damages or to prevent you from using your established trademark.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/*  /// PANEL 4 ////  */}
            <Accordion 
                square 
                expanded={expanded === 'panel4'} 
                onChange={handleChange('panel4')}
                >
                <AccordionSummary 
                    aria-controls="panel4d-content" 
                    id="panel4d-header"
                    >
                    <Typography>How long is the “trademarking” process?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    The procedure for registration of a trademark in Canada takes approximately <strong>12-30 months</strong> depending on many variables including whether the <strong>CIPO</strong>trademark examiner raises any objections to the application or whether it is opposed by other trademark owners. <br/>
                    This will be a slow-moving process. If you plan to wait to <strong>"start"</strong> the business until the trademark is registered - please speak with a <strong>Checkmarks lawyer</strong> to discuss. 
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/*  /// PANEL 5 ////  */}
            <Accordion 
                square expanded={expanded === 'panel5'} 
                onChange={handleChange('panel5')}
                >
                <AccordionSummary 
                    aria-controls="panel5d-content" 
                    id="pane5d-header"
                    >
                    <Typography>What are the general steps in a trademark registration?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <strong>Search + Report.</strong> Do a detailed search of your trademark  - how likely is the application to succeed<br/>
                        <strong>Draft + File.</strong>Draft and file an application for registration. This includes attaching the trademark to specific goods and services. <br/>
                        <strong>Deal with Examiner.</strong> A CIPO examiner will look at the application for formal, technical, or legal objections. If none, then we move to the next step. If there is an objection,  then that will need to be replied to or otherwise dealt with to try to overcome their objections.<br/>
                        <strong>Advertise. </strong> Once past the Examiner, the application is publicly advertised for 2 months. During this period any 3rd party can oppose your application. This is like mini-ligation. If this happens, it must be resolved before proceeding.<br/>
                        <strong>Done. </strong> You'll get a registered trademark.<br/>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/*  /// PANEL 6 ////  */}
            <Accordion 
                square 
                expanded={expanded === 'panel6'} 
                onChange={handleChange('panel6')}
                >
                <AccordionSummary 
                    aria-controls="panel6d-content" 
                    id="panel6d-header"
                    >
                    <Typography>Why can’t I do it all by myself?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        You can do it yourself! Use our DIY+ option. However, the first time one tries something new isn’t always my best performance. If you have the risk tolerance to try your first trademark application on your own, then feel free!   If you need a little extra help from time-to-time, we offer that sort of help too. 
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/*  /// PANEL 7 ////  */}
            <Accordion 
                square 
                expanded={expanded === 'panel7'} 
                onChange={handleChange('panel7')}
                >
                <AccordionSummary 
                    aria-controls="panel7d-content" 
                    id="panel7d-header"
                    >
                    <Typography>How long does a registration last?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        15 years, but you can renew it!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/*  /// PANEL 8 ////  */}
            <Accordion 
                square 
                expanded={expanded === 'panel8'} 
                onChange={handleChange('panel8')}
                >
                <AccordionSummary 
                    aria-controls="panel8d-content" 
                    id="panel8d-header"
                    >
                    <Typography>What can I trademark?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        What can’t you trademark is a better question. You can pretty much trademark any element of how your brand or your business is known: names, logos, smells, layout of a store colours, the location of a tag, the mode of packaging, a texture, a sound, etc.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/*  /// PANEL 9 ////  */}
            <Accordion 
                square 
                expanded={expanded === 'panel9'} 
                onChange={handleChange('panel9')}
                >
                <AccordionSummary 
                    aria-controls="panel9d-content" 
                    id="panel9d-header"
                    >
                    <Typography>What do the symbols ® and ™ represent?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <strong>®</strong> means the trademark is registered; <strong>™</strong> means is a common law (or unregistered) trademark. Don’t use ® unless your trademark is actually fully registered.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/*  /// PANEL 10 ////  */}
            <Accordion 
                square 
                expanded={expanded === 'panel10'} 
                onChange={handleChange('panel10')}
                >
                <AccordionSummary 
                    aria-controls="paneld10-content" 
                    id="panel10d-header"
                    >
                    <Typography>What does  TM apply to and what is a <strong>NICE</strong> class?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        A trademark is used in association with specific goods or services. Every conceivable good and service is classified into 45 general classes of goods and services  (called Nice Classes). These are called NICE classes (named after the French city). <br/>
                        <strong>For example</strong>, <strong>NICE</strong> class 8 is "<em>hand tools and implements, hand-operated; cutlery; side arms, except firearms; razors</em>". <br/ >
                        Every TM application has one <strong>NICE</strong> class included. Each additional <strong>NICE</strong> class attracts an extra <strong>$100 government fee</strong>. <br/>
                        <strong>For example:</strong> Class 8 is hand tools and implementations.<br/>
                        You can use as many NICE classes as you wish and our software program takes out the guess work on which ones will be approved (or not).
                    </Typography>
                </AccordionDetails>
            </Accordion>


            </Container>
        </React.Fragment>
    );
}
