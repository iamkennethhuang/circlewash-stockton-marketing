import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from '@mui/material';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { faqs } from '../data/siteContent';

function FAQ() {
  return (
    <Box component="section" className="faqSection">
      <Container maxWidth="xl">
        <Typography variant="h2">Frequently Asked Questions</Typography>
        <Box mt={2}>
          {faqs.map(([question, answer]) => (
            <Accordion key={question} className="faqItem" disableGutters elevation={0}>
              <AccordionSummary expandIcon={<ExpandMoreRoundedIcon color="primary" />}>
                <Typography>{question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default FAQ;
