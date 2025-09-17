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
      fontFamily: 'Arial, sans-serif',
      padding: '20px'
    }}>
      
      {/* Main Login Card */}
      <div style={{
        display: 'flex',
        width: '900px',
        maxWidth: '90vw',
        height: '500px',
        background: '#ffffff',
        borderRadius: '8px',
        overflow: 'hidden',
        border: '1px solid #ddd'
      }}>
        
        {/* Left Panel - Blue Section with Logo */}
        <div style={{
          width: '50%',
          background: '#2c5aa0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '40px 20px'
        }}>
          
          {/* Title First */}
          <h1 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            margin: '0 0 15px 0',
            textAlign: 'center'
          }}>
            ALAMA
          </h1>
          
          {/* Subtitle Second */}
          <p style={{
            fontSize: '1.1rem',
            fontWeight: '600',
            margin: '0 0 25px 0',
            textAlign: 'center',
            color: '#87ceeb'
          }}>
            MARK 10x FASTER
          </p>
          
          {/* Logo Circle Last */}
          <div style={{
            width: '100px',
            height: '100px',
            background: '#ffffff',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Image
              src="/alama_dark_logo_lt_bnjlIcW.png"
              alt="ALAMA Logo"
              width={60}
              height={60}
            />
          </div>
        </div>

        {/* Right Panel - Login Form */}
        <div style={{
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
            color: '#333333',
            marginBottom: '30px',
            textAlign: 'center'
          }}>
            Admin Portal
          </h2>
          
          <form onSubmit={handleLogin}>
            
            {/* User ID Field */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '0.85rem',
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
                  padding: '12px',
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
            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '0.85rem',
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
                  padding: '12px',
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
                padding: '12px',
                background: isLoading ? '#9ca3af' : '#2c5aa0',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '0.9rem',
                fontWeight: '600',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                marginBottom: '15px'
              }}
            >
              {isLoading ? 'Signing in...' : 'SIGN IN'}
            </button>
            
            {/* Forgot Password Link */}
            <div style={{
              textAlign: 'center',
              marginBottom: '20px'
            }}>
              <a href="#" style={{
                color: '#2c5aa0',
                fontSize: '0.8rem',
                textDecoration: 'none'
              }}>
                Forgot Password?
              </a>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}
