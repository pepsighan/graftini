import Designer from 'components/designer/Designer';
import Navigation from 'components/Navigation';
import SEO from 'components/SEO';
import { useRouter } from 'next/router';
import { useProject } from 'store/projects';

export default function Project() {
  const { query } = useRouter();
  const projectId = query.projectId as string;
  const { data } = useProject(projectId);

  return (
    <>
      <SEO title={data?.name ?? 'Project'} />
      <Navigation />
      <Designer />
    </>
  );
}
