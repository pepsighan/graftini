import { Button, Box, IconButton } from '@mui/material';
import { Project } from 'store/projects';
import { Icon } from '@mdi/react';
import { mdiDotsVertical } from '@mdi/js';

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Box sx={{ position: 'relative' }}>
      <Button
        variant="outlined"
        color="inherit"
        sx={{ height: 200, width: 200 }}
      >
        {project.name}
      </Button>

      <IconButton sx={{ position: 'absolute', top: 2, right: 2 }}>
        <Box
          component={Icon}
          path={mdiDotsVertical}
          sx={{ width: 16, height: 16 }}
        />
      </IconButton>
    </Box>
  );
}
