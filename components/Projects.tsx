import { LoadingButton } from '@mui/lab';
import { Box, Container, Stack, Typography } from '@mui/material';
import Navigation from 'components/Navigation';
import SEO from 'components/SEO';
import { useCallback } from 'react';
import { useCreateProject, useProjects } from 'store/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const { data } = useProjects();
  const { mutate: createProject, isLoading } = useCreateProject();
  const onNew = useCallback(() => createProject(), [createProject]);

  return (
    <>
      <SEO title="My Projects" />
      <Navigation />

      <Container sx={{ mt: 3 }}>
        <Stack direction="row" alignItems="center">
          <Typography variant="h6">My Projects</Typography>
          <LoadingButton
            variant="outlined"
            sx={{ ml: 2 }}
            onClick={onNew}
            loading={isLoading}
          >
            New
          </LoadingButton>
        </Stack>

        <Box sx={{ mt: 4 }}>
          {(data ?? []).map((it) => (
            <Box key={it.id} sx={{ mr: 4, display: 'inline-block' }}>
              <ProjectCard project={it} />
            </Box>
          ))}
        </Box>
      </Container>
    </>
  );
}
