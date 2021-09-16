import { Box, Button } from '@mui/material';
import Link from 'next/link';
import { Project } from 'store/projects';
import ProjectCardMenu from './ProjectCardMenu';

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Box sx={{ position: 'relative' }}>
      <Link href={`/project/${project.id}`} passHref>
        <Button
          component="a"
          variant="outlined"
          color="inherit"
          sx={{ height: 200, width: 200 }}
        >
          {project.name}
        </Button>
      </Link>

      <Box sx={{ position: 'absolute', top: 2, right: 2 }}>
        <ProjectCardMenu projectId={project.id} />
      </Box>
    </Box>
  );
}
