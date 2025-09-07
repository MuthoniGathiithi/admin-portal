'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const router = useRouter();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      try {
        // Save user email to localStorage for profile display
        localStorage.setItem('userEmail', formData.email);
        // Use Next.js router for navigation instead of window.location
        router.push('/dashboard');
      } catch (error) {
        console.error('Login error:', error);
        // Fallback to window.location if router fails
        window.location.href = '/dashboard';
      }
    } else {
      alert('Please enter both email and password');
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>

      {/* Unified Elevated Card Container */}
      <div style={{
        display: 'flex',
        width: '100%',
        maxWidth: '1400px',
        minHeight: '600px',
        borderRadius: '2rem',
        background: 'white',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Left Side - Login Section */}
        <div style={{
          flex: 1,
          background: 'linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '3rem',
          borderTopLeftRadius: '2rem',
          borderBottomLeftRadius: '2rem'
        }}>
          <div style={{
            width: '100%',
            maxWidth: '400px'
          }}>
            <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
              <h1 style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: 'white',
                marginBottom: '0.5rem',
                letterSpacing: '-0.025em'
              }}>
                Welcome Back
              </h1>
              <p style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '1rem',
                margin: 0
              }}>
                Enter your credentials to access your account.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: 'white',
                  marginBottom: '0.5rem'
                }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '1rem 1.25rem',
                    border: 'none',
                    borderRadius: '0.75rem',
                    fontSize: '0.875rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    color: '#1f2937',
                    outline: 'none',
                    transition: 'all 0.2s ease-in-out',
                    boxSizing: 'border-box',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                  }}
                  placeholder="name@example.com"
                  required
                  onFocus={(e) => {
                    e.target.style.backgroundColor = 'white';
                    e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 3px rgba(255, 255, 255, 0.3)';
                    e.target.style.transform = 'translateY(-1px)';
                  }}
                  onBlur={(e) => {
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                    e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                />
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <label style={{
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: 'white'
                  }}>
                    Password
                  </label>
                  <a href="#" style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '0.75rem',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }}>
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '1rem 1.25rem',
                    border: 'none',
                    borderRadius: '0.75rem',
                    fontSize: '0.875rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    color: '#1f2937',
                    outline: 'none',
                    transition: 'all 0.2s ease-in-out',
                    boxSizing: 'border-box',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                  }}
                  placeholder="Enter your password"
                  required
                  onFocus={(e) => {
                    e.target.style.backgroundColor = 'white';
                    e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 3px rgba(255, 255, 255, 0.3)';
                    e.target.style.transform = 'translateY(-1px)';
                  }}
                  onBlur={(e) => {
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                    e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '1rem 1.25rem',
                  backgroundColor: 'white',
                  color: '#4f46e5',
                  border: 'none',
                  borderRadius: '0.75rem',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease-in-out',
                  marginTop: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#f8fafc';
                  e.target.style.transform = 'translateY(-1px)';
                  e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                }}
              >
                Sign In
              </button>
            </form>
          </div>
        </div>

        {/* Right Side - Logo Section */}
        <div style={{
          flex: 1,
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '3rem',
          borderTopRightRadius: '2rem',
          borderBottomRightRadius: '2rem'
        }}>
          {/* Logo and ALAMA text */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '1.5rem'
          }}>
            <Image
              src="/alama_dark_logo_lt_bnjlIcW.png"
              alt="Alama"
              width={450}
              height={450}
              style={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
                marginBottom: '1rem'
              }}
              priority
            />
            <h2 style={{
              fontSize: '3rem',
              fontWeight: '800',
              color: '#000000',
              margin: '0 0 0.5rem 0',
              letterSpacing: '-0.05em',
              position: 'relative',
              zIndex: 2
            }}>
              ALAMA
            </h2>
          </div>
          
          {/* Mark 10x Faster using Alama AI text */}
          <div style={{
            position: 'relative',
            zIndex: 2,
            marginTop: '0.5rem'
          }}>
            <p style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#3b82f6',
              margin: 0,
              letterSpacing: '-0.025em',
              textTransform: 'uppercase'
            }}>
              Mark 10x Faster using Alama AI
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
