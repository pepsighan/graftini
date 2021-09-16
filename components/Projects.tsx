import { Button, Container, Typography } from '@mui/material';
import Navigation from 'components/Navigation';
import SEO from 'components/SEO';
import { useProjects } from 'store/projects';

export default function Projects() {
  const { data } = useProjects();

  return (
    <>
      <SEO title="My Projects" />
      <Navigation />

      <Container sx={{ mt: 2 }}>
        <Typography variant="h6">My Projects</Typography>

        {(data ?? []).map((it) => (
          <Button key={it.id}>{it.name}</Button>
        ))}
      </Container>
    </>
  );
}
