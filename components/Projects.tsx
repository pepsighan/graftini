import { Typography, Container } from '@mui/material';
import Navigation from 'components/Navigation';
import SEO from 'components/SEO';

export default function Projects() {
  return (
    <>
      <SEO title="My Projects" />
      <Navigation />

      <Container sx={{ mt: 2 }}>
        <Typography variant="h6">My Projects</Typography>
      </Container>
    </>
  );
}
