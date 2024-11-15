import MainContent from './MainContent';
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-slate-800">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Dashboard;