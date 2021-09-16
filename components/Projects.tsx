import { Button, Container, Stack, Typography } from '@mui/material';
import Navigation from 'components/Navigation';
import SEO from 'components/SEO';
import { useCreateProject, useProjects } from 'store/projects';

export default function Projects() {
  const { data } = useProjects();
  const createProject = useCreateProject();

  return (
    <>
      <SEO title="My Projects" />
      <Navigation />

      <Container sx={{ mt: 3 }}>
        <Stack direction="row" alignItems="center">
          <Typography variant="h6">My Projects</Typography>
          <Button variant="outlined" sx={{ ml: 2 }} onClick={createProject}>
            New
          </Button>
        </Stack>

        {(data ?? []).map((it) => (
          <Button key={it.id}>{it.name}</Button>
        ))}
      </Container>
    </>
  );
}
