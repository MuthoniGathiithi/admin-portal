'use client';

import React from 'react';

export default function TopBar({ breadcrumbs = [] }) {
  return (
    <div style={{
      height: '64px',
      background: 'var(--white)',
      borderBottom: '1px solid var(--gray-200)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 var(--space-6)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      {/* Breadcrumbs */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-2)',
        color: 'var(--gray-600)',
        fontSize: '0.875rem'
      }}>
        {breadcrumbs.map((crumb, index) => (
          <React.Fragment key={index}>
            {index > 0 && <span style={{ color: 'var(--gray-400)' }}>&gt;</span>}
            <span style={{
              color: index === breadcrumbs.length - 1 ? 'var(--gray-900)' : 'var(--gray-600)',
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
        gap: 'var(--space-3)'
      }}>
        <span style={{
          fontSize: '0.875rem',
          color: 'var(--gray-600)'
        }}>
          Admin Portal
        </span>
      </div>
    </div>
  );
}
