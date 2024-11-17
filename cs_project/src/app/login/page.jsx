"use client";

import { Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle authentication
    console.log('Login submitted:', { email, password });
    // Navigate to dashboard after successful login
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-900 rounded-lg p-8 shadow-lg">
        <div className="flex justify-center mb-8">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
            <path d="M12 2L2 19H22L12 2ZM12 5.5L18.5 17H5.5L12 5.5Z"/>
          </svg>
        </div>

        <h2 className="text-2xl font-bold text-white text-center mb-8">Welcome back</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-800 text-white rounded-lg pl-12 pr-4 py-3 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                placeholder="Email address"
                required
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-800 text-white rounded-lg pl-12 pr-4 py-3 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                placeholder="Password"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-3 transition-colors"
          >
            Sign in
          </button>
        </form>

        <p className="mt-6 text-center text-slate-400">
          Don&apos;t have an account?{" "}
          <Link 
            href="/signup" 
            className="text-blue-500 hover:text-blue-400"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;