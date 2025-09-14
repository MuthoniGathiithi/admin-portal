'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Store user email in localStorage for dynamic use
    if (email) {
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userName', email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()));
    }
    
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      router.push('/reference/countries');
    }, 1000);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      background: '#f8f9fa'
    }} className="login-container">
      {/* Left Panel - Login Form */}
      <div style={{
        flex: 1,
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '2rem'
      }} className="login-form-panel">
        {/* Login Form */}
        <div style={{
          maxWidth: '400px',
          width: '100%',
          background: '#ffffff',
          padding: '2.5rem',
          borderRadius: '12px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e5e7eb',
          margin: '0 auto'
        }} className="login-form-card">
          <div style={{
            marginBottom: '1.5rem',
            textAlign: 'left'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#111827',
              marginBottom: '0.5rem'
            }}>
              Welcome back
            </h2>
            <p style={{
              color: '#6b7280',
              fontSize: '0.875rem',
              margin: 0
            }}>
              Sign in to your account
            </p>
          </div>

          <form onSubmit={handleLogin} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem'
          }}>
            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#374151'
              }}>
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  outline: 'none',
                  backgroundColor: '#ffffff'
                }}
                placeholder="Enter your email"
                required
                onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#374151'
              }}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  outline: 'none',
                  backgroundColor: '#ffffff'
                }}
                placeholder="Enter your password"
                required
                onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              style={{
                width: '100%',
                padding: '0.75rem',
                background: isLoading ? '#9ca3af' : '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '0.875rem',
                fontWeight: '500',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                marginTop: '0.5rem'
              }}
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>
        </div>
      </div>

      {/* Right Panel - Logo and Branding */}
      <div style={{
        flex: 1,
        background: 'linear-gradient(135deg, #3b4de8 0%, #2d3de8 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        color: 'white'
      }} className="login-logo-panel">
        <div style={{
          textAlign: 'center'
        }}>
          {/* Logo Section */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '120px',
              height: '120px',
              background: '#ffffff',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
            }} className="login-logo-circle">
              <Image
                src="/alama_dark_logo_lt_bnjlIcW.png"
                alt="ALAMA Logo"
                width={80}
                height={80}
              />
            </div>
            <h1 style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              color: '#ffffff',
              margin: 0,
              lineHeight: '1.3'
            }}>ALAMA</h1>
            <p style={{
              fontSize: '1rem',
              color: 'rgba(255, 255, 255, 0.8)',
              margin: '0.5rem 0 0 0',
              fontWeight: '400'
            }}>Admin Portal</p>
          </div>
        </div>
      </div>
    </div>
  );
}
