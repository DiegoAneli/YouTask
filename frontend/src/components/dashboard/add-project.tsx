import Dashboard from '../../src/components/Dashboard';
import AddProject from '../../src/components/AddProject';

const AddProjectPage: React.FC = () => (
  <Dashboard>
    <h1 className="text-4xl font-bold text-center my-8">Aggiungi Progetto</h1>
    <div className="flex justify-center">
      <AddProject />
    </div>
  </Dashboard>
);

export default AddProjectPage;
