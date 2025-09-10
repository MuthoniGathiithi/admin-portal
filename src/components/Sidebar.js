'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = ({ activeItem, setActiveItem }) => {
  const [userEmail, setUserEmail] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Get user email from localStorage
    const email = localStorage.getItem('userEmail') || 'admin@example.com';
    setUserEmail(email);
    
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const menuItems = [
    { 
      id: 'dashboard', 
      label: 'Dashboard', 
      href: '/dashboard',
      icon: (
        <svg style={{ width: '1.25rem', height: '1.25rem', transition: 'all 0.3s ease' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
    },
    { 
      id: 'countries', 
      label: 'Countries', 
      href: '/reference/countries',
      icon: (
        <svg style={{ width: '1.25rem', height: '1.25rem', transition: 'all 0.3s ease' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const getInitials = (email) => {
    return email.split('@')[0].charAt(0).toUpperCase();
  };

  return (
    <>
      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            position: 'fixed',
            top: '1rem',
            left: '1rem',
            zIndex: 1001,
            background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            padding: '0.875rem',
            cursor: 'pointer',
            boxShadow: '0 8px 16px -4px rgba(30, 64, 175, 0.4), 0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)',
            backdropFilter: 'blur(10px)'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = isMenuOpen ? 'rotate(90deg) scale(1.05)' : 'rotate(0deg) scale(1.05)';
            e.target.style.boxShadow = '0 12px 24px -6px rgba(30, 64, 175, 0.5), 0 8px 16px -4px rgba(0, 0, 0, 0.15)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = isMenuOpen ? 'rotate(90deg) scale(1)' : 'rotate(0deg) scale(1)';
            e.target.style.boxShadow = '0 8px 16px -4px rgba(30, 64, 175, 0.4), 0 4px 6px -1px rgba(0, 0, 0, 0.1)';
          }}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      )}
      
      {/* Overlay for mobile */}
      {isMobile && isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(4px)',
            zIndex: 999,
            animation: 'fadeIn 0.3s ease-out'
          }}
        />
      )}
      
      {/* Sidebar */}
      <div style={{
        position: 'fixed',
        left: isMobile ? (isMenuOpen ? '0' : '-300px') : '0',
        top: 0,
        height: '100vh',
        width: isMobile ? '300px' : '280px',
        background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1000,
        boxShadow: isMobile ? '8px 0 32px rgba(0, 0, 0, 0.3)' : '4px 0 20px rgba(0, 0, 0, 0.15)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isMobile && !isMenuOpen ? 'translateX(-20px)' : 'translateX(0)',
        backdropFilter: 'blur(10px)',
        borderRight: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        {/* Logo Section */}
        <div style={{
          padding: '2.5rem 1.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          background: 'rgba(255, 255, 255, 0.02)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 20px rgba(59, 130, 246, 0.3)'
            }}>
              <Image
                src="/alama_dark_logo_lt_bnjlIcW.png"
                alt="Alama Logo"
                width={28}
                height={28}
                style={{
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)'
                }}
              />
            </div>
            <span style={{
              color: 'white',
              fontSize: '1.6rem',
              fontWeight: '800',
              letterSpacing: '0.05em',
              background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              ALAMA
            </span>
          </div>
        </div>

      {/* Navigation Menu */}
      <div style={{
        flex: 1,
        padding: '2rem 0'
      }}>
        <div style={{
          fontSize: '0.75rem',
          fontWeight: '700',
          color: 'rgba(255, 255, 255, 0.5)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          padding: '0 1.5rem',
          marginBottom: '1.5rem'
        }}>
          Navigation
        </div>
        <nav>
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem 1.5rem',
                margin: '0.5rem 1rem',
                color: activeItem === item.id ? '#ffffff' : 'rgba(255, 255, 255, 0.7)',
                backgroundColor: activeItem === item.id ? 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)' : 'transparent',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: activeItem === item.id ? '700' : '500',
                borderRadius: '16px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: activeItem === item.id ? '0 8px 25px rgba(59, 130, 246, 0.3)' : 'none',
                border: activeItem === item.id ? '1px solid rgba(59, 130, 246, 0.3)' : '1px solid transparent',
                position: 'relative',
                backdropFilter: activeItem === item.id ? 'blur(10px)' : 'none',
                background: activeItem === item.id ? 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)' : 'transparent'
              }}
              onMouseOver={(e) => {
                const icon = e.currentTarget.querySelector('svg');
                if (activeItem !== item.id) {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateX(6px)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  if (icon) {
                    icon.style.transform = 'scale(1.1)';
                  }
                } else {
                  e.currentTarget.style.transform = 'translateX(3px) scale(1.02)';
                  if (icon) {
                    icon.style.transform = 'scale(1.1)';
                  }
                }
              }}
              onMouseOut={(e) => {
                const icon = e.currentTarget.querySelector('svg');
                if (activeItem !== item.id) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.borderColor = 'transparent';
                  if (icon) {
                    icon.style.transform = 'scale(1)';
                  }
                } else {
                  e.currentTarget.style.transform = 'translateX(0) scale(1)';
                  if (icon) {
                    icon.style.transform = 'scale(1)';
                  }
                }
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '12px',
                backgroundColor: activeItem === item.id ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s ease'
              }}>
                {item.icon}
              </div>
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
    </>
  );
};

export default Sidebar;
