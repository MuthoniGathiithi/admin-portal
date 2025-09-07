'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Sidebar = ({ activeItem, setActiveItem }) => {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    // Get user email from localStorage
    const email = localStorage.getItem('userEmail') || 'admin@example.com';
    setUserEmail(email);
  }, []);

  const menuItems = [
    { 
      id: 'dashboard', 
      label: 'Dashboard', 
      href: '/dashboard',
      icon: (
        <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v14l-5-3-5 3V5z" />
        </svg>
      )
    },
    { 
      id: 'countries', 
      label: 'Countries', 
      href: '/reference/countries',
      icon: (
        <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  const getInitials = (email) => {
    return email.split('@')[0].charAt(0).toUpperCase();
  };

  return (
    <div style={{
      position: 'fixed',
      left: 0,
      top: 0,
      height: '100vh',
      width: '280px',
      background: 'linear-gradient(180deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 1000,
      boxShadow: '4px 0 20px rgba(0, 0, 0, 0.1)'
    }}>
      {/* Logo/Header */}
      <div style={{
        padding: '2rem 1.5rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}>
          <div style={{
            width: '2.5rem',
            height: '2.5rem',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: '700',
            fontSize: '1.25rem',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            A
          </div>
          <div>
            <div style={{
              fontWeight: '700',
              fontSize: '1.25rem',
              color: 'white'
            }}>
              Admin Portal
            </div>
            <div style={{
              fontSize: '0.75rem',
              color: 'rgba(255, 255, 255, 0.7)'
            }}>
              Education Management
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div style={{
        flex: 1,
        padding: '1.5rem 0'
      }}>
        <div style={{
          fontSize: '0.75rem',
          fontWeight: '600',
          color: 'rgba(255, 255, 255, 0.6)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          padding: '0 1.5rem',
          marginBottom: '1rem'
        }}>
          Main Menu
        </div>
        <nav>
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.875rem 1.5rem',
                margin: '0.25rem 1rem',
                color: activeItem === item.id ? 'white' : 'rgba(255, 255, 255, 0.8)',
                backgroundColor: activeItem === item.id ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: '500',
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                backdropFilter: activeItem === item.id ? 'blur(10px)' : 'none',
                border: activeItem === item.id ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid transparent'
              }}
              onMouseOver={(e) => {
                if (activeItem !== item.id) {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.color = 'white';
                }
              }}
              onMouseOut={(e) => {
                if (activeItem !== item.id) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                }
              }}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Profile Section */}
      <div style={{
        padding: '1.5rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        marginTop: 'auto'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '1rem',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.15)'
        }}>
          <div style={{
            width: '2.5rem',
            height: '2.5rem',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: '600',
            fontSize: '0.875rem'
          }}>
            {getInitials(userEmail)}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontWeight: '600',
              fontSize: '0.875rem',
              color: 'white',
              marginBottom: '0.125rem'
            }}>
              {userEmail.split('@')[0]}
            </div>
            <div style={{
              fontSize: '0.75rem',
              color: 'rgba(255, 255, 255, 0.7)',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}>
              {userEmail}
            </div>
          </div>
        </div>
        
        <div style={{ 
          display: 'flex', 
          gap: '0.5rem',
          marginTop: '1rem'
        }}>
          <button style={{
            flex: 1,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            padding: '0.75rem',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            fontSize: '0.75rem',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            backdropFilter: 'blur(10px)'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
          }}>
            Settings
          </button>
          <button 
            onClick={() => {
              localStorage.removeItem('userEmail');
              window.location.href = '/';
            }}
            style={{
              flex: 1,
              backgroundColor: 'rgba(220, 38, 38, 0.2)',
              color: 'white',
              padding: '0.75rem',
              borderRadius: '8px',
              border: '1px solid rgba(220, 38, 38, 0.3)',
              fontSize: '0.75rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              backdropFilter: 'blur(10px)'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'rgba(220, 38, 38, 0.3)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'rgba(220, 38, 38, 0.2)';
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
