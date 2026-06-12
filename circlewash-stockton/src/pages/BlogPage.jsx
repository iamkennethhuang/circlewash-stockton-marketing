import { Box, Container, Grid, Typography } from '@mui/material';

const posts = [
  {
    title: 'Getting Ready for Winter 2026',
    body: 'A look at the upgrades planned for Circle Wash Stockton as the reopening approaches.',
  },
  {
    title: 'How to Wash Comforters Without Guesswork',
    body: 'Simple tips for choosing the right washer size and drying cycle for bulky home laundry.',
  },
  {
    title: 'When Wash and Fold Saves the Week',
    body: 'How drop-off laundry can help busy households get time back without falling behind.',
  },
];

function BlogPage() {
  return (
    <Box className="section">
      <Container maxWidth="xl">
        <Box className="pageIntro">
          <Typography variant="h1">Circle Wash Blog</Typography>
          <Typography>
            Updates, laundry tips, and local notes from the Circle Wash Stockton team.
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {posts.map((post) => (
            <Grid key={post.title} size={{ xs: 12, md: 4 }}>
              <Box className="contentCard">
                <Typography variant="h2">{post.title}</Typography>
                <Typography>{post.body}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default BlogPage;
