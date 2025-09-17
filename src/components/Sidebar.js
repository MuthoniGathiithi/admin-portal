'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    {
      id: 'main',
      label: 'MAIN',
      isSection: true
    },
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7"/>
          <rect x="14" y="3" width="7" height="7"/>
          <rect x="14" y="14" width="7" height="7"/>
          <rect x="3" y="14" width="7" height="7"/>
        </svg>
      ),
      href: '/dashboard'
    },
    {
      id: 'reference-section',
      label: 'REFERENCE DATA',
      isSection: true
    },
    {
      id: 'reference',
      label: 'Countries',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
          <path d="M2 12h20"/>
        </svg>
      ),
      href: '/reference/countries'
    },
    {
      id: 'system-section',
      label: 'SYSTEM',
      isSection: true
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      ),
      href: '/settings'
    }
  ];

  return (
    <>
      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-menu-button {
            display: block !important;
          }
          .mobile-overlay {
            display: block !important;
          }
          .sidebar {
            transform: ${isMobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)'} !important;
          }
        }
      `}</style>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        style={{
          display: 'none',
          position: 'fixed',
          top: '1rem',
          left: '1rem',
          zIndex: 1001,
          background: '#1e293b',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          padding: '0.75rem',
          cursor: 'pointer',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}
        className="mobile-menu-button"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="6" x2="21" y2="6"/>
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
            display: 'none'
          }}
          className="mobile-overlay"
        />
      )}

      <div style={{
        width: isCollapsed ? '80px' : '280px',
        height: '100vh',
        background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        transition: 'width 0.3s ease',
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 1000,
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
        transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)'
      }} className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
      
      {/* Logo Section */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '1.5rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        marginBottom: '1.5rem'
      }}>
        <Image
          src="/alama_dark_logo_lt_bnjlIcW.png"
          alt="ALAMA Logo"
          width={40}
          height={40}
          style={{ filter: 'brightness(0) invert(1)' }}
        />
        {!isCollapsed && (
          <h1 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#ffffff',
            margin: '-4px 0 0 -17px',
            letterSpacing: '0.5px'
          }}>
            LAMA
          </h1>
        )}
      </div>

      {/* Navigation Menu */}
      <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
        <div style={{ flex: 1 }}>
          {menuItems.map((item) => {
            if (item.isSection) {
              return (
                <div key={item.id} style={{
                  padding: '0.75rem 1.5rem 0.5rem 1.5rem',
                  fontSize: '0.6rem',
                  fontWeight: '400',
                  color: 'rgba(255, 255, 255, 0.4)',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  marginTop: item.id === 'main' ? '0' : '1.5rem'
                }}>
                  {!isCollapsed && item.label}
                </div>
              );
            }

            const isActive = pathname === item.href;
            
            return (
              <div key={item.id} style={{ marginBottom: '0.5rem', padding: '0 1.5rem' }}>
                <Link href={item.href} style={{ textDecoration: 'none' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.875rem 1rem',
                    borderRadius: '12px',
                    background: 'transparent',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.85)',
                    position: 'relative',
                    borderLeft: isActive ? '3px solid #ffffff' : '3px solid transparent',
                    marginLeft: '-3px'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.target.style.color = '#ffffff';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.target.style.background = 'transparent';
                      e.target.style.color = 'rgba(255, 255, 255, 0.85)';
                    }
                  }}
                  >
                    <span style={{ 
                      fontSize: '1.1rem',
                      opacity: isActive ? 1 : 0.8,
                      transition: 'opacity 0.2s ease'
                    }}>
                      {item.icon}
                    </span>
                    {!isCollapsed && (
                      <span style={{ 
                        fontWeight: isActive ? '600' : '500', 
                        fontSize: '0.875rem',
                        transition: 'all 0.2s ease'
                      }}>
                        {item.label}
                      </span>
                    )}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Logout Button */}
        <div style={{
          padding: '1rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          marginTop: '1rem'
        }}>
          <button 
            style={{
              width: '100%',
              background: 'rgba(255, 255, 255, 0.1)',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              padding: '0.75rem',
              borderRadius: '12px',
              fontSize: '0.875rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(239, 68, 68, 0.2)';
              e.target.style.borderColor = 'rgba(239, 68, 68, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            }}
            onClick={() => router.push('/')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16,17 21,12 16,7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            {!isCollapsed && <span>Logout</span>}
          </button>
        </div>
      </nav>
    </div>
    </>
  );
}
