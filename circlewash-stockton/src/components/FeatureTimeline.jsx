import { Box, Card, CardContent, CardMedia, Container, Grid, Stack, Typography } from '@mui/material';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { getImageSrc } from '../data/images';

function FeatureTimeline({ title, items, image }) {
  return (
    <Box component="section" className="featureTimeline">
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 1 }} alignItems="flex-start">
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h4" className="featureTimelineTitle" gutterBottom sx={{ pt:10, fontWeight: 'bold' }}>
              {title}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <Timeline position="alternate" className="featureTimelineTrack">
              {items.map((item, index) => (
              <TimelineItem key={item.title} className="featureTimelineItem">
                <TimelineSeparator>
                  <TimelineDot className="featureTimelineDot" />
                  {index < items.length - 1 && <TimelineConnector className="featureTimelineConnector" />}
                </TimelineSeparator>
                <TimelineContent>
                  <Card className={`featureTimelineCard ${index % 2 === 0 ? 'isRight' : 'isLeft'}`}>
                    <CardMedia
                      component="img"
                      image={getImageSrc(image)}
                      alt={`${item.title} washer`}
                      className="featureTimelineImg"
                    />
                    <CardContent className="featureTimelineCopy">
                      <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
                        <Typography variant="h3">{item.title}</Typography>
                        <Typography className="featureTimelineTypes">
                          {item.machineTypes.join(' / ')}
                        </Typography>
                      </Stack>
                      <Stack spacing={0.4} mt={1}>
                        {item.highlights.map((highlight) => (
                          <Stack key={highlight} direction="row" spacing={0.7} alignItems="center">
                            <CheckCircleRoundedIcon className="featureTimelineCheck" />
                            <Typography>{highlight}</Typography>
                          </Stack>
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
}

export default FeatureTimeline;
