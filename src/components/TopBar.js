'use client';

import React, { useState, useEffect } from 'react';

export default function TopBar({ breadcrumbs = [], isMobileMenuOpen, setIsMobileMenuOpen }) {
  const [userName, setUserName] = useState('Admin User');
  const [userEmail, setUserEmail] = useState('admin@alama.ai');

  useEffect(() => {
    // Get user info from localStorage (set during login)
    const storedEmail = localStorage.getItem('userEmail');
    const storedName = localStorage.getItem('userName');
    
    if (storedEmail) {
      setUserEmail(storedEmail);
    }
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  // Get initials from user name
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <>
      <style jsx>{`
        .topbar {
          padding: 0 2rem;
        }
        
        .mobile-menu-button {
          display: none;
        }
        
        .breadcrumbs {
          display: flex;
        }
        
        /* Desktop - Large screens */
        @media (min-width: 1025px) {
          .topbar {
            padding: 0 2rem;
          }
          .mobile-menu-button {
            display: none;
          }
          .breadcrumbs {
            display: flex;
          }
          .user-name {
            display: flex;
          }
        }
        
        /* Tablet - Medium screens */
        @media (min-width: 769px) and (max-width: 1024px) {
          .topbar {
            padding: 0 1.5rem;
          }
          .mobile-menu-button {
            display: none;
          }
          .breadcrumbs {
            display: flex;
          }
          .user-profile {
            gap: 0.5rem !important;
            padding: 0.375rem 0.75rem !important;
          }
        }
        
        /* Large Mobile - Small tablets */
        @media (min-width: 481px) and (max-width: 768px) {
          .topbar {
            padding: 0 1rem !important;
          }
          .mobile-menu-button {
            display: flex !important;
          }
          .breadcrumbs {
            display: none;
          }
          .user-profile {
            gap: 0.5rem !important;
            padding: 0.25rem 0.75rem !important;
          }
          .user-name {
            display: none;
          }
        }
        
        /* Small Mobile */
        @media (max-width: 480px) {
          .topbar {
            padding: 0 0.75rem !important;
          }
          .mobile-menu-button {
            display: flex !important;
            padding: 0.375rem !important;
          }
          .breadcrumbs {
            display: none;
          }
          .user-profile {
            gap: 0.25rem !important;
            padding: 0.25rem 0.5rem !important;
            border: none !important;
            background: transparent !important;
          }
          .user-name {
            display: none;
          }
        }
      `}</style>
      
      <div className="topbar" style={{
        height: '70px',
        background: '#ffffff',
        borderBottom: '1px solid #e5e7eb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
      }}>
      {/* Mobile Menu Button & Breadcrumbs */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
      }}>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen && setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="mobile-menu-button"
          style={{
            background: '#6366f1',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '0.5rem',
            cursor: 'pointer',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
            boxShadow: '0 2px 4px rgba(99, 102, 241, 0.2)'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#4f46e5';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = '#6366f1';
            e.target.style.transform = 'scale(1)';
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
        
        {/* Breadcrumbs */}
        <div className="breadcrumbs" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#6b7280',
          fontSize: '0.875rem'
        }}>
        {breadcrumbs.map((crumb, index) => (
          <React.Fragment key={index}>
            {index > 0 && <span style={{ color: '#d1d5db', margin: '0 0.25rem' }}>›</span>}
            <span style={{
              color: index === breadcrumbs.length - 1 ? '#111827' : '#6b7280',
              fontWeight: index === breadcrumbs.length - 1 ? '600' : '400'
            }}>
              {crumb}
            </span>
          </React.Fragment>
        ))}
        </div>
      </div>

      {/* User Profile */}
      <div className="user-profile" style={{
        display: 'flex',
        alignItems: 'center',
        padding: '0.5rem 1rem',
        borderRadius: '12px',
        background: '#f8fafc',
        border: '1px solid #e2e8f0'
      }}>
        <span className="user-name" style={{
          fontSize: '0.875rem',
          fontWeight: '500',
          color: '#111827'
        }}>
          {userName}
        </span>
      </div>
      </div>
    </>
  );
}
