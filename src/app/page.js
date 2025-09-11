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
    }}>
      {/* Left Panel - Login Form */}
      <div style={{
        flex: 1.5,
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '3rem',
        maxWidth: '700px'
      }}>
        {/* Login Form */}
        <div style={{
          maxWidth: '600px',
          width: '100%',
          background: '#ffffff',
          padding: '4rem',
          borderRadius: '16px',
          boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.15), 0 15px 20px -5px rgba(0, 0, 0, 0.08)',
          border: '1px solid #f1f5f9',
          margin: '0 auto'
        }}>
          <div style={{
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: '1.875rem',
              fontWeight: '600',
              color: '#1e293b',
              marginBottom: '0.5rem'
            }}>
              Welcome back
            </h2>
            <p style={{
              color: '#64748b',
              fontSize: '0.875rem',
              margin: 0,
              lineHeight: '1.5'
            }}>
              Please enter your credentials to access the admin portal
            </p>
          </div>

          <form onSubmit={handleLogin} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4rem'
          }}>
            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#374151'
              }}>
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  transition: 'border-color 0.2s',
                  outline: 'none',
                  backgroundColor: '#ffffff'
                }}
                placeholder="your.email@company.com"
                required
                onFocus={(e) => e.target.style.borderColor = '#3182ce'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
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
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  transition: 'border-color 0.2s',
                  outline: 'none',
                  backgroundColor: '#ffffff'
                }}
                placeholder="Enter your password"
                required
                onFocus={(e) => e.target.style.borderColor = '#3182ce'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              style={{
                width: '100%',
                padding: '0.875rem',
                background: isLoading ? '#9ca3af' : '#1e40af',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: '500',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
              }}
              onMouseOver={(e) => {
                if (!isLoading) {
                  e.target.style.background = '#1e3a8a';
                  e.target.style.transform = 'translateY(-1px)';
                  e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                }
              }}
              onMouseOut={(e) => {
                if (!isLoading) {
                  e.target.style.background = '#1e40af';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
                }
              }}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>

      {/* Right Panel - Logo and Branding */}
      <div style={{
        flex: 1,
        background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '3rem',
        color: 'white',
        position: 'relative'
      }}>
        <div style={{
          textAlign: 'center',
          maxWidth: '450px',
          zIndex: 2
        }}>
          {/* Logo Section */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '490px',
              height: '490px',
              background: '#ffffff',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
              marginBottom: '2rem'
            }}>
              <Image
                src="/alama_dark_logo_lt_bnjlIcW.png"
                alt="ALAMA Logo"
                width={470}
                height={470}
              />
            </div>
            <h1 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#ffffff',
              margin: 0,
              lineHeight: '1.2',
              textAlign: 'center'
            }}>Mark 10x Faster with ALAMA AI</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
