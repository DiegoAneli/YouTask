import Dashboard from '../../src/components/Dashboard';
import ProjectList from '../../src/components/ProjectList';

const ProjectsPage: React.FC = () => (
  <Dashboard>
    <h1 className="text-4xl font-bold text-center my-8">Progetti</h1>
    <div className="flex justify-center">
      <ProjectList />
    </div>
  </Dashboard>
);

export default ProjectsPage;
