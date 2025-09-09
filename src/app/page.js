'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Trigger animation on load
    setTimeout(() => setIsLoaded(true), 100);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!formData.email || !formData.password) {
      setError('Please enter both email and password');
      return;
    }
    
    // Save user email to localStorage for profile display
    localStorage.setItem('userEmail', formData.email);
    
    // Immediate redirect without loading state
    window.location.href = '/dashboard';
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      padding: '1rem'
    }}>
      {/* Main Login Container */}
      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        width: '100%',
        maxWidth: '950px',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 40px 80px rgba(0, 0, 0, 0.25), 0 20px 40px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        overflow: 'hidden',
        minHeight: isMobile ? 'auto' : '450px',
        height: isMobile ? 'auto' : '450px',
        position: 'relative'
      }}>
        {/* Left Side - Blue Welcome Section with Form */}
        <div style={{
          flex: 1,
          background: 'linear-gradient(135deg, #3b4de8 0%, #2d3de8 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: isMobile ? '2.5rem 2rem' : '3rem 2.5rem',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative Elements */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '200px',
            height: '200px',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '50%',
            filter: 'blur(40px)'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-30px',
            left: '-30px',
            width: '150px',
            height: '150px',
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '50%',
            filter: 'blur(30px)'
          }} />
          
          <div style={{
            width: '100%',
            maxWidth: '350px',
            zIndex: 1,
            position: 'relative'
          }}>
            <div style={{
              textAlign: 'center',
              marginBottom: '2rem'
            }}>
              <h1 style={{
                fontSize: isMobile ? '1.8rem' : '2.2rem',
                fontWeight: '700',
                margin: '0',
                letterSpacing: '-0.02em',
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Sign In
              </h1>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <label htmlFor="email-input" style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: 'rgba(255, 255, 255, 0.95)',
                  marginBottom: '0.75rem',
                  letterSpacing: '0.025em'
                }}>
                  Email Address *
                </label>
                <div style={{ position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    left: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#6b7280',
                    zIndex: 1
                  }}>
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <input
                    id="email-input"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    aria-describedby="email-help"
                    style={{
                      width: '100%',
                      padding: '1rem 1.25rem 1rem 3rem',
                      border: '2px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.98)',
                      color: '#111827',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      boxSizing: 'border-box',
                      backdropFilter: 'blur(10px)'
                    }}
                    placeholder="your@email.com"
                    required
                    onFocus={(e) => {
                      e.target.style.borderColor = '#60a5fa';
                      e.target.style.backgroundColor = 'white';
                      e.target.style.transform = 'translateY(-1px)';
                      e.target.style.boxShadow = '0 0 0 3px rgba(96, 165, 250, 0.1), 0 8px 25px rgba(0, 0, 0, 0.15)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                      e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <label htmlFor="password-input" style={{
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: 'rgba(255, 255, 255, 0.95)',
                    letterSpacing: '0.025em'
                  }}>
                    Password *
                  </label>
                  <a href="#" style={{
                    fontSize: '0.8rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none',
                    fontWeight: '500',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = 'rgba(255, 255, 255, 1)'}
                  onMouseOut={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}
                  >
                    Forgot password?
                  </a>
                </div>
                <div style={{ position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    left: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#6b7280',
                    zIndex: 1
                  }}>
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18,8h-1V6c0-2.76-2.24-5-5-5S7,3.24,7,6v2H6c-1.1,0-2,0.9-2,2v10c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V10C20,8.9,19.1,8,18,8z M12,17c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S13.1,17,12,17z M15.1,8H8.9V6c0-1.71,1.39-3.1,3.1-3.1s3.1,1.39,3.1,3.1V8z"/>
                    </svg>
                  </div>
                  <input
                    id="password-input"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    aria-describedby="password-help"
                    style={{
                      width: '100%',
                      padding: '1rem 3rem 1rem 3rem',
                      border: '2px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.98)',
                      color: '#111827',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      boxSizing: 'border-box',
                      backdropFilter: 'blur(10px)'
                    }}
                    placeholder="Enter your password"
                    required
                    onFocus={(e) => {
                      e.target.style.borderColor = '#60a5fa';
                      e.target.style.backgroundColor = 'white';
                      e.target.style.transform = 'translateY(-1px)';
                      e.target.style.boxShadow = '0 0 0 3px rgba(96, 165, 250, 0.1), 0 8px 25px rgba(0, 0, 0, 0.15)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                      e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    style={{
                      position: 'absolute',
                      right: '1rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      color: '#6b7280',
                      cursor: 'pointer',
                      padding: '0.5rem',
                      borderRadius: '6px',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.color = '#374151';
                      e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = '#6b7280';
                      e.target.style.backgroundColor = 'transparent';
                    }}
                    onFocus={(e) => {
                      e.target.style.outline = '2px solid #60a5fa';
                      e.target.style.outlineOffset = '2px';
                    }}
                    onBlur={(e) => {
                      e.target.style.outline = 'none';
                    }}
                  >
                    {showPassword ? (
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.09L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.76,7.13 11.37,7 12,7Z"/>
                      </svg>
                    ) : (
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div style={{
                  padding: '0.75rem',
                  backgroundColor: 'rgba(239, 68, 68, 0.2)',
                  border: '1px solid rgba(239, 68, 68, 0.4)',
                  borderRadius: '6px',
                  color: '#fecaca',
                  fontSize: '0.75rem',
                  fontWeight: '500'
                }}>
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                style={{
                  width: '100%',
                  padding: '1.2rem 1.5rem',
                  background: isLoading ? '#1e40af' : 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: '700',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  marginTop: '1.5rem',
                  letterSpacing: '0.025em',
                  boxShadow: '0 6px 20px rgba(29, 78, 216, 0.5)'
                }}
                onMouseOver={(e) => {
                  if (!isLoading) {
                    e.target.style.background = 'linear-gradient(135deg, #1e40af 0%, #1d4ed8 100%)';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 10px 30px rgba(29, 78, 216, 0.7)';
                  }
                }}
                onMouseOut={(e) => {
                  if (!isLoading) {
                    e.target.style.background = 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 6px 20px rgba(29, 78, 216, 0.5)';
                  }
                }}
                onFocus={(e) => {
                  e.target.style.outline = '3px solid rgba(96, 165, 250, 0.5)';
                  e.target.style.outlineOffset = '2px';
                }}
                onBlur={(e) => {
                  e.target.style.outline = 'none';
                }}
              >
                {isLoading && (
                  <svg style={{ width: '16px', height: '16px', animation: 'spin 1s linear infinite' }} fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeDasharray="31.416" strokeDashoffset="31.416" opacity="0.25"/>
                    <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                  </svg>
                )}
                {isLoading ? 'Signing In...' : 'Sign In'}
              </button>
            </form>
          </div>
        </div>

        {/* Right Side - Alama Logo Section */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: isMobile ? '2.5rem 2rem' : '3rem 2.5rem',
          backgroundColor: 'white',
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f1f5f9" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 30px 30px'
        }}>
          {/* Decorative Background Elements */}
          <div style={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: '100px',
            height: '100px',
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
            borderRadius: '50%',
            opacity: 0.6,
            filter: 'blur(20px)'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '30%',
            left: '15%',
            width: '80px',
            height: '80px',
            background: 'linear-gradient(135deg, #3b4de8 0%, #2d3de8 100%)',
            borderRadius: '50%',
            opacity: 0.1,
            filter: 'blur(25px)'
          }} />
          
          {/* Logo Container */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1,
            position: 'relative'
          }}>
            {/* Circular Logo Container */}
            <div style={{
              marginBottom: '2rem',
              transition: 'transform 0.3s ease',
              position: 'relative'
            }}>
              {/* White Circular Background */}
              <div style={{
                width: isMobile ? 180 : 220,
                height: isMobile ? 180 : 220,
                backgroundColor: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.06)',
                border: '4px solid rgba(59, 77, 232, 0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Subtle gradient overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(circle at 30% 30%, rgba(59, 77, 232, 0.02) 0%, transparent 50%)',
                  borderRadius: '50%'
                }} />
                <Image
                  src="/alama_dark_logo_lt_bnjlIcW.png"
                  alt="Alama Logo"
                  width={isMobile ? 120 : 160}
                  height={isMobile ? 120 : 160}
                  style={{
                    objectFit: 'contain',
                    position: 'relative',
                    zIndex: 1
                  }}
                />
              </div>
            </div>
            
            {/* Brand Text */}
            <div style={{
              textAlign: 'center'
            }}>
              <h2 style={{
                fontSize: isMobile ? '2.2rem' : '2.8rem',
                fontWeight: '800',
                color: '#111827',
                margin: '0 0 1.5rem 0',
                letterSpacing: '0.1em',
                background: 'linear-gradient(135deg, #111827 0%, #374151 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                ALAMA
              </h2>
              <p style={{
                fontSize: isMobile ? '1.1rem' : '1.25rem',
                fontWeight: '600',
                color: '#1d4ed8',
                margin: '0',
                letterSpacing: '0.025em',
                lineHeight: '1.5'
              }}>
                AI-Powered Grading for Educators
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
