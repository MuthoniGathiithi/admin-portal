'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = ({ activeItem, setActiveItem }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', href: '/dashboard' },
    { id: 'countries', label: 'Countries', href: '/reference/countries' },
  ];

  return (
    <div style={{
      width: '280px',
      background: 'linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)',
      minHeight: '100vh',
      position: 'fixed',
      left: 0,
      top: 0,
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{ padding: '2rem', flex: 1 }}>
        {/* ALAMA Logo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '3rem',
          paddingBottom: '1.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <Image
            src="/alama_dark_logo_lt_bnjlIcW.png"
            alt="Alama"
            width={45}
            height={45}
            style={{
              width: '45px',
              height: '45px',
              marginRight: '0.75rem',
              filter: 'brightness(0) invert(1)'
            }}
          />
          <span style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: 'white'
          }}>
            ALAMA
          </span>
        </div>

        {/* Navigation */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.875rem 1rem',
                borderRadius: '0.75rem',
                transition: 'all 0.2s ease-in-out',
                textDecoration: 'none',
                backgroundColor: activeItem === item.id ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                color: 'white',
                fontWeight: '500',
                fontSize: '0.95rem'
              }}
              onClick={() => setActiveItem && setActiveItem(item.id)}
              onMouseOver={(e) => {
                if (activeItem !== item.id) {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }
              }}
              onMouseOut={(e) => {
                if (activeItem !== item.id) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Profile Section */}
      <div style={{
        padding: '2rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.15)',
        marginTop: 'auto',
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '1.5rem'
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: '700',
            fontSize: '1.125rem',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
          }}>
            {typeof window !== 'undefined' ? (localStorage.getItem('userEmail')?.charAt(0).toUpperCase() || 'U') : 'U'}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{
              color: 'white',
              fontWeight: '700',
              fontSize: '1rem',
              marginBottom: '0.25rem'
            }}>
              {typeof window !== 'undefined' ? localStorage.getItem('userEmail')?.split('@')[0] || 'User' : 'User'}
            </div>
            <div style={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '0.875rem',
              fontWeight: '500'
            }}>
              {typeof window !== 'undefined' ? localStorage.getItem('userEmail') || 'user@alama.com' : 'user@alama.com'}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.75rem 1rem',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '0.75rem',
              color: 'white',
              fontSize: '0.875rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              width: '100%',
              textAlign: 'left'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
              e.target.style.transform = 'translateY(-1px)';
              e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Settings
          </button>
          <button
            onClick={() => window.location.href = '/'}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.75rem 1rem',
              backgroundColor: 'rgba(220, 38, 38, 0.15)',
              border: '1px solid rgba(220, 38, 38, 0.3)',
              borderRadius: '0.75rem',
              color: '#fca5a5',
              fontSize: '0.875rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              width: '100%',
              textAlign: 'left'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'rgba(220, 38, 38, 0.25)';
              e.target.style.color = '#fef2f2';
              e.target.style.transform = 'translateY(-1px)';
              e.target.style.boxShadow = '0 4px 12px rgba(220, 38, 38, 0.2)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'rgba(220, 38, 38, 0.15)';
              e.target.style.color = '#fca5a5';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
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
