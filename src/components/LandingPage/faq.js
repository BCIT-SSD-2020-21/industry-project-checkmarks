import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { withStyles } from '@material-ui/core/styles';


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
      backgroundColor: 'rgba(165, 26, 36, 0.80)',
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
        <Container maxWidth="sm" component="main" className={classes.heroContent}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            F.A.Q
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Typography>
        </Container>     
        <Container> 
            {/*  /// PANEL 1 ////  */}
            <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>What is a trademark?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    A word, phrase, or logo that is used by you to distinguish your products or services from the products or services of others.<br />
                    Trademarks are often classified in terms of word marks, phrases (for example, a slogan), or design marks (for example, a logo).<br />
                    However, there are other ways to classify trademarks. For example, for certain legal purposes, such as assessing the level of protection between two similar competing marks, they could be classified in terms of weak versus strong marks. An example of a strong mark would be a unique coined word. On the other hand, weak marks are often generic or descriptive words.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/*  /// PANEL 2 ////  */}
            <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>Should you Register your Trademark?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    If you value your brand, we think you should protect it. Registration is the best way to protect your mark’s value in Canada.<br />
                    Registration is prima facie evidence of ownership. In the event of a dispute, the registered owner is presumed to have ownership and the onus of proof shifts. Registration makes it easier to protect your brand through legal proceedings.<br />
                    Any word, phrase, or image can potentially be protected by registering it as a trademark. 
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/*  /// PANEL 3 ////  */}
            <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>Why is this Important?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    An original, distinct, unique mark helps you stand out and be remembered. A registered trademark is a tool that adds value to your brand by providing strength in its uniqueness in the marketplace.<br /> 
                    In some cases, the mark may become the most valuable asset the business owns. 
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/*  /// PANEL 4 ////  */}
            <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography>How do trademark lawyers or IP agents help?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. 
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Container> 
    </React.Fragment>
  );
}
