import { Avatar, Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { reviews } from '../data/siteContent';
import Picture from '../components/Picture';

function Reviews() {
  return (
    <Box component="section" className="section reviewsSection">
      <Container maxWidth="xl">
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" spacing={3}>
          <Box>
            <Typography variant="h2" className="sectionTitle">
              Trusted By Residents
              <br />
              in Stockton
            </Typography>
            <Typography fontWeight={800}>Proudly Serving Stockton, CA</Typography>
            <Stack direction="column" spacing={0.5} alignItems="start" mt={1}>
              <Picture name="googleLogo" alt="Google" className="googleLogo" />
              <Typography fontWeight={800}>Reviews</Typography>
              <Box>
              <Typography>5.0</Typography>
              {[1, 2, 3, 4, 5].map((star) => (
                <StarRoundedIcon key={star} className="star" fontSize="small" />
              ))}
              </Box>
            </Stack>
          </Box>
          <Button endIcon={<ArrowForwardRoundedIcon />} className="reviewButton">
            Write a review
          </Button>
        </Stack>
        <Grid container spacing={4} mt={{ xs: 4, md: 7 }}>
          {reviews.map((review) => (
            <Grid key={review.name} size={{ xs: 12, md: 4 }}>
              <Stack spacing={1.5} className="reviewItem">
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Avatar>{review.name[0]}</Avatar>
                  <Box>
                    <Typography fontWeight={900}>{review.name}</Typography>
                    <Typography variant="caption">{review.date}</Typography>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={0.2}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarRoundedIcon key={star} className="star" fontSize="small" />
                  ))}
                </Stack>
                <Typography>{review.text}</Typography>
                <Stack direction="row" spacing={0.75} alignItems="center">
                  <Typography>Posted on</Typography>
                  <Picture name="googleLogo" alt="Google" className="googleLogo small" />
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Reviews;
