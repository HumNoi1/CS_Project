"use client";

import { Home, LogOut, Moon, Sun, Plus } from "lucide-react";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { DiCodeigniter } from "react-icons/di";

const Dashboard = () => {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const [loading, setLoading] = useState(true);
  const { theme, toggleTheme } = useTheme();

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
      <div className="flex h-screen bg-slate-100 dark:bg-slate-800 items-center justify-center">
        <div className="text-slate-900 dark:text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-slate-100 dark:bg-slate-800 transition-colors duration-200">
      {/* Sidebar */}
      <div className="w-16 bg-white dark:bg-slate-900 flex flex-col items-center py-4 space-y-6 shadow-md transition-colors duration-200">
        <button className="p-2 text-slate-600 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors">
          <DiCodeigniter className="w-6 h-6" />
        </button>
        <button className="p-2 text-slate-600 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors">
          <Home className="w-6 h-6" />
        </button>
        <div className="flex-grow" />
        <button 
          onClick={toggleTheme}
          className="p-2 text-slate-600 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors"
        >
          {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
        <button 
          onClick={handleLogout}
          className="p-2 text-slate-600 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors"
        >
          <LogOut className="w-6 h-6" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6">
        <h1 className="text-xl text-slate-900 dark:text-white mb-6 font-semibold">Home</h1>
        <div className="grid grid-cols-12 gap-4">
          {/* Add Button */}
          <div className="col-span-3">
            <Link href='addclass'>
              <button className="w-full h-32 rounded-lg border-2 border-slate-300 dark:border-slate-600 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                <Plus className="w-8 h-8 text-slate-400" />
              </button>
            </Link>
          </div>
          
          {/* Folder */}
          <div className="col-span-3">
            <div className="w-full h-32 rounded-lg bg-blue-500 p-4 flex flex-col justify-end shadow-lg hover:shadow-xl transition-shadow">
              <span className="text-sm text-white font-medium">software engineer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;