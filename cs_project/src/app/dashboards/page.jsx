"use client";

import { Home, LogOut, Moon, Menu, FolderPlus, Bot} from "lucide-react";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';
import { DiReact } from 'react-icons/di';

const Dashboard = () => {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error || !session) {
        router.push('/login');
      }
      setLoading(false);
    };

    checkUser();
  }, [router, supabase]);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      router.push('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen bg-slate-800 items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-slate-800">
      {/* Sidebar */}
      <div className="w-16 bg-slate-900 flex flex-col items-center py-4 space-y-6">
        <button>
          <DiReact className="text-blue-500 w-8 h-8" />
        </button>
        <button className="p-2 text-white hover:bg-slate-700 rounded">
          <Home className="w-6 h-6" />
        </button>
        <Link href="./compare">
          <button className="p- text-white hover:bg-slate-700 rounded">
            <Bot className="w-6 h-6"/>
          </button>
        </Link>
        <button className="p-2 text-white hover:bg-slate-700 rounded">
          <Menu className="w-6 h-6" />
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
                <FolderPlus className="w-8 h-8 text-slate-400" />
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