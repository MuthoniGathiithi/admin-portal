'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const validateForm = () => {
    const newErrors = {};
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    setErrors({});
    
    // Store user email in localStorage for dynamic use
    if (email) {
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userName', email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()));
    }
    
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      router.push('/dashboard');
    }, 1000);
  };

  return (
    <>
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(1deg); }
          66% { transform: translateY(-10px) rotate(-1deg); }
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .focus-ring:focus {
          outline: 2px solid #6366f1 !important;
          outline-offset: 2px !important;
          border-color: #6366f1 !important;
        }
        
        .error-field {
          border-color: #ef4444 !important;
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;
        }
        
        @media (max-width: 768px) {
          .login-container {
            flex-direction: column !important;
            height: auto !important;
            width: 95vw !important;
          }
          
          .left-panel {
            width: 100% !important;
            padding: 30px 20px !important;
          }
          
          .right-panel {
            width: 100% !important;
            padding: 30px 20px !important;
          }
          
          .logo-circle {
            width: 150px !important;
            height: 150px !important;
          }
          
          .logo-image {
            width: 180px !important;
            height: 180px !important;
          }
        }
        
        @media (max-width: 480px) {
          .login-container {
            width: 100vw !important;
            border-radius: 0 !important;
            height: 100vh !important;
          }
          
          .left-panel {
            padding: 20px 15px !important;
          }
          
          .right-panel {
            padding: 20px 15px !important;
          }
        }
      `}</style>
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
        padding: '20px',
        position: 'relative'
      }}>
      
      {/* Modern Gradient Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
        zIndex: -2
      }}></div>
      
      {/* Animated Pattern Overlay */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          radial-gradient(circle at 20% 80%, rgba(30, 41, 59, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(15, 23, 42, 0.06) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(30, 41, 59, 0.04) 0%, transparent 50%)
        `,
        backgroundSize: '800px 800px, 600px 600px, 400px 400px',
        animation: 'float 25s ease-in-out infinite',
        zIndex: -1
      }}></div>
      
      {/* Main Login Card */}
      <div className="login-container" style={{
        display: 'flex',
        width: '1100px',
        maxWidth: '90vw',
        height: '430px',
        background: '#ffffff',
        borderRadius: '14px',
        overflow: 'hidden',
        border: 'none',
        position: 'relative',
        zIndex: 10,
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
      }}>
        
        {/* Left Panel - Blue Section with Logo */}
        <div className="left-panel" style={{
          width: '50%',
          background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '40px 20px'
        }}>
          
          {/* Title First */}
          <h1 style={{
            fontSize: '2.4rem',
            fontWeight: '800',
            margin: '0 0 8px 0',
            textAlign: 'center',
            color: '#ffffff',
            letterSpacing: '1px'
          }}>
            <span style={{ fontWeight: '900' }}>A</span>LAMA AI
          </h1>
          
          {/* Subtitle Second */}
          <p style={{
            fontSize: '0.9rem',
            fontWeight: '300',
            margin: '0 0 30px 0',
            textAlign: 'center',
            color: '#ffffff',
            letterSpacing: '0.8px'
          }}>
          AI-Powered Grading, 10X Faster 
          </p>
          
          {/* Logo Circle Last */}
          <div className="logo-circle" style={{
            width: '220px',
            height: '220px',
            background: '#ffffff',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Image
              className="logo-image"
              src="/alama_dark_logo_lt_bnjlIcW.png"
              alt="ALAMA Logo"
              width={250}
              height={250}
            />
          </div>
        </div>

        {/* Right Panel - Login Form */}
        <div className="right-panel" style={{
          width: '50%',
          padding: '40px 30px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#ffffff'
        }}>
          
          <h2 style={{
            fontSize: '1.4rem',
            fontWeight: 'bold',
            color: 'BLACK',
            marginBottom: '30px',
            textAlign: 'center'
          }}>
            Admin Portal
          </h2>
          
          <form onSubmit={handleLogin}>
            
            {/* Email Field */}
            <div style={{ marginBottom: '15px' }}>
              <label style={{
                display: 'block',
                marginBottom: '5px',
                fontSize: '0.8rem',
                color: '#1e293b',
                fontWeight: '500'
              }}>
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) {
                    setErrors(prev => ({ ...prev, email: '' }));
                  }
                }}
                className={`focus-ring ${errors.email ? 'error-field' : ''}`}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: `1px solid ${errors.email ? '#ef4444' : '#d0d0d0'}`,
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  outline: 'none',
                  backgroundColor: '#ffffff',
                  boxSizing: 'border-box',
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                  transition: 'all 0.2s ease'
                }}
                placeholder="Email"
                required
              />
              {errors.email && (
                <div style={{
                  color: '#ef4444',
                  fontSize: '0.75rem',
                  marginTop: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <span>⚠</span> {errors.email}
                </div>
              )}
            </div>

            {/* Password Field */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                marginBottom: '5px',
                fontSize: '0.8rem',
                color: '#1e293b',
                fontWeight: '500'
              }}>
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) {
                      setErrors(prev => ({ ...prev, password: '' }));
                    }
                  }}
                  className={`focus-ring ${errors.password ? 'error-field' : ''}`}
                  style={{
                    width: '100%',
                    padding: '12px 45px 12px 16px',
                    border: `1px solid ${errors.password ? '#ef4444' : '#d0d0d0'}`,
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    outline: 'none',
                    backgroundColor: '#ffffff',
                    boxSizing: 'border-box',
                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                    transition: 'all 0.2s ease'
                  }}
                  placeholder="Password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#6b7280',
                    padding: '4px',
                    borderRadius: '4px',
                    transition: 'color 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#374151'}
                  onMouseLeave={(e) => e.target.style.color = '#6b7280'}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    // Eye with slash (hidden)
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  ) : (
                    // Eye (visible)
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && (
                <div style={{
                  color: '#ef4444',
                  fontSize: '0.75rem',
                  marginTop: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <span>⚠</span> {errors.password}
                </div>
              )}
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="focus-ring"
              style={{
                width: '100%',
                padding: '14px',
                background: isLoading ? '#9ca3af' : 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '25px',
                fontSize: '0.9rem',
                fontWeight: '700',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                marginTop: '20px',
                marginBottom: '15px',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                boxShadow: '0 4px 12px rgba(30, 41, 59, 0.3)',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
              onMouseEnter={(e) => {
                if (!isLoading) {
                  e.target.style.background = 'linear-gradient(180deg, #0f172a 0%, #020617 100%)';
                  e.target.style.transform = 'translateY(-1px)';
                  e.target.style.boxShadow = '0 6px 16px rgba(30, 41, 59, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isLoading) {
                  e.target.style.background = 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 12px rgba(30, 41, 59, 0.3)';
                }
              }}
              onMouseDown={(e) => {
                if (!isLoading) {
                  e.target.style.transform = 'translateY(1px)';
                  e.target.style.boxShadow = '0 2px 8px rgba(30, 41, 59, 0.4)';
                }
              }}
              onMouseUp={(e) => {
                if (!isLoading) {
                  e.target.style.transform = 'translateY(-1px)';
                  e.target.style.boxShadow = '0 6px 16px rgba(30, 41, 59, 0.4)';
                }
              }}
            >
              {isLoading && (
                <div style={{
                  width: '16px',
                  height: '16px',
                  border: '2px solid #ffffff',
                  borderTop: '2px solid transparent',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }}></div>
              )}
              {isLoading ? 'Signing in...' : 'SIGN IN'}
            </button>
            
            {/* Forgot Password Link */}
            <div style={{
              textAlign: 'right',
              marginTop: '10px'
            }}>
              <a href="#" style={{
                color: '#ef4444',
                fontSize: '0.9rem',
                textDecoration: 'underline',
                fontWeight: '500'
              }}>
                Forgot Password?
              </a>
            </div>
            
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
