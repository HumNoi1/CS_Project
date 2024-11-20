import { Home, LogOut, Moon, Plus } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-16 bg-slate-900 flex flex-col items-center py-4 space-y-6">
      <SidebarButton icon={<Home className="w-6 h-6" />} />
      <div className="flex-grow" />
      <SidebarButton icon={<Moon className="w-6 h-6" />} />
      <SidebarButton icon={<LogOut className="w-6 h-6" />} />
    </div>
  );
};

const SidebarButton = ({ icon }) => {
  return (
    <button className="p-2 text-white hover:bg-slate-700 rounded">
      {icon}
    </button>
  );
};

export default Sidebar;