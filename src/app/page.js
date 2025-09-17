'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import './globals.css';


export default function LoginPage() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (userId) {
      localStorage.setItem('userId', userId);
    }
    setTimeout(() => {
      setIsLoading(false);
      router.push('/reference/countries');
    }, 1000);
  };

  return (
    <main className="alama-login-main">
      {/* Left Panel - Admin Portal Login */}
      <section className="alama-login-left">
        <div className="alama-login-card">
          <header className="alama-login-header">
            <h2>Admin Portal</h2>
          </header>
          <form onSubmit={handleLogin} className="alama-login-form" aria-label="Admin login form">
            <div className="alama-form-group">
              <label htmlFor="userId">User ID</label>
              <input
                id="userId"
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="User ID"
                required
                autoComplete="username"
              />
            </div>
            <div className="alama-form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                autoComplete="current-password"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="alama-login-btn"
              aria-busy={isLoading}
            >
              {isLoading ? 'Signing in...' : 'SIGN IN'}
            </button>
            <div className="alama-login-footer">
              <a href="#" className="alama-forgot">Forgot Password?</a>
            </div>
          </form>
        </div>
      </section>
      {/* Right Panel - Logo and Branding */}
      <section className="alama-login-right">
        <div className="alama-login-branding">
          <div className="alama-logo-circle">
            <Image
              src="/alama_dark_logo_lt_bnjlIcW.png"
              alt="ALAMA Logo"
              width={100}
              height={100}
              priority
            />
          </div>
          <h1 className="alama-title">ALAMA AI</h1>
          <p className="alama-subtitle">Mark 10X Faster</p>
        </div>
      </section>
    </main>
  );
}
