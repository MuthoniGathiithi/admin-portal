'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import './globals.css';


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (email) {
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userName', email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()));
    }
    setTimeout(() => {
      setIsLoading(false);
      router.push('/reference/countries');
    }, 1000);
  };

  return (
    <main className="login-main">
      {/* Left Panel - Login Form */}
      <section className="login-left-panel">
        <div className="login-card">
          <header className="login-header">
            <h2>Welcome back</h2>
            <p>Sign in to your account</p>
          </header>
          <form onSubmit={handleLogin} className="login-form" aria-label="Login form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                autoComplete="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                autoComplete="current-password"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="login-btn"
              aria-busy={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>
        </div>
      </section>
      {/* Right Panel - Logo and Branding */}
      <section className="login-right-panel">
        <div className="login-branding">
          <div className="login-logo-circle">
            <Image
              src="/alama_dark_logo_lt_bnjlIcW.png"
              alt="ALAMA Logo"
              width={80}
              height={80}
              priority
            />
          </div>
          <h1>ALAMA</h1>
          <p>Admin Portal</p>
        </div>
      </section>
    </main>
  );
}
