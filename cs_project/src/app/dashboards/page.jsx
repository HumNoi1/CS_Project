"use client";

//components
import { Home, LogOut, Moon, Plus } from "lucide-react";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Dashboard = () => {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <div className="flex h-screen bg-slate-800">
      {/* Sidebar */}
      <div className="w-16 bg-slate-900 flex flex-col items-center py-4 space-y-6">
        <button className="p-2 text-white hover:bg-slate-700 rounded">
          <Plus className="w-6 h-6" />
        </button>
        <button className="p-2 text-white hover:bg-slate-700 rounded">
          <Home className="w-6 h-6" />
        </button>
        <div className="flex-grow" />
        <button className="p-2 text-white hover:bg-slate-700 rounded">
          <Moon className="w-6 h-6" />
        </button>
        <button 
          onClick={handleLogout}
          className="p-2 text-white hover:bg-slate-700 rounded"
        >
          <LogOut className="w-6 h-6" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6">
        <h1 className="text-xl text-white mb-6">Home</h1>
        <div className="grid grid-cols-12 gap-4">
          {/* Add Button */}
          <div className="col-span-3">
            <Link href='addclass'>
              <button className="w-full h-32 rounded-lg border-2 border-slate-600 flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Plus className="w-8 h-8 text-slate-400" />
              </button>
            </Link>
          </div>
          
          {/* Folder */}
          <div className="col-span-3">
            <div className="w-full h-32 rounded-lg bg-blue-500 p-4 flex flex-col justify-end">
              <span className="text-sm text-white">software engineer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;