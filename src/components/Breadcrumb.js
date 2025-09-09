'use client';

import Link from 'next/link';

export default function Breadcrumb({ items }) {
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginBottom: '1.5rem',
      fontSize: '0.875rem',
      color: '#6b7280'
    }}>
      {items.map((item, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {index > 0 && (
            <svg style={{ width: '16px', height: '16px', color: '#d1d5db' }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
            </svg>
          )}
          {item.href ? (
            <Link 
              href={item.href}
              style={{
                color: '#1e40af',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'color 0.2s ease'
              }}
              onMouseOver={(e) => e.target.style.color = '#1e3a8a'}
              onMouseOut={(e) => e.target.style.color = '#1e40af'}
            >
              {item.label}
            </Link>
          ) : (
            <span style={{ color: '#1f2937', fontWeight: '600' }}>
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
