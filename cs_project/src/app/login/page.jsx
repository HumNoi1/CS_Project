"use client";

import { Lock, Mail } from "lucide-react";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-900 rounded-lg p-8 shadow-lg">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
            <path d="M12 2L2 19H22L12 2ZM12 5.5L18.5 17H5.5L12 5.5Z"/>
          </svg>
        </div>

        <h2 className="text-2xl font-bold text-white text-center mb-8">Welcome back</h2>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="email"
                className="w-full bg-slate-800 text-white rounded-lg pl-12 pr-4 py-3 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                placeholder="Email address"
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="password"
                className="w-full bg-slate-800 text-white rounded-lg pl-12 pr-4 py-3 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                placeholder="Password"
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
          <Link href="/signup" className="text-blue-500 hover:text-blue-400">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;