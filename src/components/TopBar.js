'use client';

import React, { useState, useEffect } from 'react';

export default function TopBar({ breadcrumbs = [] }) {
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
    <div style={{
      height: '70px',
      background: '#ffffff',
      borderBottom: '1px solid #e5e7eb',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 2rem',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
    }}>
      {/* Breadcrumbs */}
      <div style={{
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

      {/* User Profile */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '0.5rem 1rem',
        borderRadius: '12px',
        background: '#f8fafc',
        border: '1px solid #e2e8f0'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start'
        }}>
          <span style={{
            fontSize: '0.875rem',
            fontWeight: '400',
            color: '#111827',
            lineHeight: '1.2'
          }}>
            {userName}
          </span>
        </div>
      </div>
    </div>
  );
}
