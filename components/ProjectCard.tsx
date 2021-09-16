import { Box, Button } from '@mui/material';
import { Project } from 'store/projects';
import ProjectCardMenu from './ProjectCardMenu';

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

      <Box sx={{ position: 'absolute', top: 2, right: 2 }}>
        <ProjectCardMenu projectId={project.id} />
      </Box>
    </Box>
  );
}
