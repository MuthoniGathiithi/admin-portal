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
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f5f5f5',
      fontFamily: 'Arial, sans-serif'
    }} className="login-container">
      
      {/* Main Login Card */}
      <div style={{
        display: 'flex',
        width: '900px',
        height: '500px',
        background: '#ffffff',
        borderRadius: '8px',
        overflow: 'hidden',
        border: '1px solid #e0e0e0'
      }} className="login-card">
        
        {/* Left Panel - Blue Section with Logo */}
        <div style={{
          flex: 1,
          background: '#2c5aa0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '2rem'
        }} className="login-left-panel">
          
          {/* Logo Circle */}
          <div style={{
            width: '120px',
            height: '120px',
            background: '#ffffff',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.5rem'
          }}>
            <Image
              src="/alama_dark_logo_lt_bnjlIcW.png"
              alt="ALAMA Logo"
              width={80}
              height={80}
            />
          </div>
          
          {/* Title and Subtitle */}
          <h1 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            margin: '0 0 0.5rem 0',
            textAlign: 'center'
          }}>
            ALAMA
          </h1>
          <p style={{
            fontSize: '1rem',
            margin: 0,
            textAlign: 'center',
            color: '#87ceeb'
          }}>
            Advancing Knowledge, Driving Change
          </p>
          <p style={{
            fontSize: '1.2rem',
            fontWeight: '600',
            margin: '1rem 0 0 0',
            textAlign: 'center',
            color: '#87ceeb'
          }}>
            MARK 10x FASTER
          </p>
        </div>

        {/* Right Panel - Login Form */}
        <div style={{
          flex: 1,
          padding: '3rem 2.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }} className="login-right-panel">
          
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#333333',
            marginBottom: '0.5rem',
            textAlign: 'center'
          }}>
            Admin Portal
          </h2>
          
          <form onSubmit={handleLogin} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            marginTop: '1.5rem'
          }}>
            
            {/* User ID Field */}
            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontSize: '0.9rem',
                color: '#555555',
                fontWeight: '500'
              }}>
                User ID
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #cccccc',
                  borderRadius: '4px',
                  fontSize: '0.9rem',
                  outline: 'none',
                  backgroundColor: '#ffffff',
                  boxSizing: 'border-box'
                }}
                placeholder="User ID"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontSize: '0.9rem',
                color: '#555555',
                fontWeight: '500'
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
                  border: '1px solid #cccccc',
                  borderRadius: '4px',
                  fontSize: '0.9rem',
                  outline: 'none',
                  backgroundColor: '#ffffff',
                  boxSizing: 'border-box'
                }}
                placeholder="Password"
                required
              />
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={isLoading}
              style={{
                width: '100%',
                padding: '0.75rem',
                background: isLoading ? '#9ca3af' : '#2c5aa0',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '0.9rem',
                fontWeight: '600',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                marginTop: '1rem'
              }}
            >
              {isLoading ? 'Signing in...' : 'SIGN IN'}
            </button>
            
            {/* Forgot Password Link */}
            <div style={{
              textAlign: 'center',
              marginTop: '1rem'
            }}>
              <a href="#" style={{
                color: '#2c5aa0',
                fontSize: '0.85rem',
                textDecoration: 'none'
              }}>
                Forgot Password?
              </a>
            </div>
            
            {/* Footer Text */}
            <p style={{
              fontSize: '0.75rem',
              color: '#888888',
              textAlign: 'center',
              marginTop: '1.5rem',
              lineHeight: '1.4'
            }}>
              iCampus is now working. You can reset your password using your registered email.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
