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
  const [activeItem, setActiveItem] = useState(null);

  const menuItems = [
    {
      id: 'profile',
      label: 'Profile',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      ),
      href: '/profile'
    },
    {
      id: 'reference',
      label: 'Reference',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14,2 14,8 20,8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10,9 9,9 8,9"/>
        </svg>
      ),
      submenu: [
        { id: 'countries', label: 'Countries', href: '/reference/countries' }
      ]
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="m12 1 0 6m0 6 0 6m11-7-6 0m-6 0-6 0m15.4-6.4-4.2 4.2m-5.6 0-4.2-4.2m0 8.4 4.2 4.2m5.6 0 4.2-4.2"/>
        </svg>
      ),
      href: '/settings'
    }
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        style={{
          display: 'none',
          position: 'fixed',
          top: '1rem',
          left: '1rem',
          zIndex: 1001,
          background: '#1e40af',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
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
        background: '#ffffff',
        color: '#1e293b',
        display: 'flex',
        flexDirection: 'column',
        transition: 'width 0.3s ease',
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 1000,
        borderRight: '1px solid #e2e8f0',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)'
      }} className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
      {/* Logo Section */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0rem',
        padding: 'var(--space-6)',
        borderBottom: '1px solid #e2e8f0'
      }}>
        <Image
          src="/alama_dark_logo_lt_bnjlIcW.png"
          alt="ALAMA Logo"
          width={40}
          height={40}
        />
        {!isCollapsed && (
          <h1 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#000000',
            margin: 0,
            marginLeft: '-0.5rem'
          }}>
            LAMA
          </h1>
        )}
      </div>

      {/* Navigation Menu */}
      <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: 'var(--space-4)' }}>
        <div style={{ flex: 1 }}>
          {menuItems.map((item) => {
            const isActive = item.href ? pathname === item.href : item.submenu?.some(sub => pathname === sub.href);
            const hasSubmenu = item.submenu && item.submenu.length > 0;
            
            return (
              <div key={item.id} style={{ marginBottom: 'var(--space-2)' }}>
                {item.href ? (
                  <Link href={item.href} style={{ textDecoration: 'none' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-3)',
                      padding: 'var(--space-3)',
                      borderRadius: '6px',
                      background: isActive ? '#f7fafc' : 'transparent',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      color: isActive ? '#3182ce' : '#4a5568'
                    }}>
                      <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                      {!isCollapsed && <span style={{ fontWeight: isActive ? '600' : '500', fontSize: '0.875rem' }}>{item.label}</span>}
                    </div>
                  </Link>
                ) : (
                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-3)',
                      padding: 'var(--space-3)',
                      borderRadius: '6px',
                      background: isActive ? '#f7fafc' : 'transparent',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      color: isActive ? '#3182ce' : '#4a5568'
                    }}
                    onClick={() => setActiveMenu(activeMenu === item.id ? null : item.id)}
                  >
                    <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                    {!isCollapsed && (
                      <>
                        <span style={{ fontWeight: isActive ? '600' : '500', fontSize: '0.875rem', flex: 1 }}>{item.label}</span>
                        {hasSubmenu && (
                          <span style={{
                            fontSize: '0.75rem',
                            transform: activeMenu === item.id ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease',
                            color: isActive ? '#ffffff' : '#64748b'
                          }}>▼</span>
                        )}
                      </>
                    )}
                  </div>
                )}
                
                {/* Submenu */}
                {item.submenu && activeMenu === item.id && !isCollapsed && (
                  <div style={{
                    marginLeft: 'var(--space-6)',
                    marginTop: 'var(--space-2)',
                    paddingLeft: 'var(--space-4)',
                    borderLeft: '3px solid #1e40af',
                    marginLeft: '1rem'
                  }}>
                    {item.submenu.map((subItem) => {
                      const isSubActive = pathname === subItem.href;
                      return (
                        <Link
                          key={subItem.id}
                          href={subItem.href}
                          style={{
                            display: 'block',
                            padding: 'var(--space-2) var(--space-3)',
                            color: isSubActive ? '#1e40af' : '#64748b',
                            textDecoration: 'none',
                            borderRadius: '4px',
                            background: isSubActive ? '#f1f5f9' : 'transparent',
                            fontSize: '0.8rem',
                            fontWeight: isSubActive ? '600' : '400',
                            transition: 'all 0.2s ease',
                            marginBottom: 'var(--space-1)'
                          }}
                        >
                          • {subItem.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Logout Button at Bottom */}
        <div style={{
          borderTop: '1px solid #e2e8f0',
          paddingTop: 'var(--space-4)',
          marginTop: 'var(--space-4)'
        }}>
          <button 
            style={{
              width: '100%',
              background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
              color: '#ffffff',
              border: 'none',
              padding: '0.75rem var(--space-3)',
              borderRadius: '8px',
              fontSize: '0.8rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'var(--space-2)',
              boxShadow: '0 2px 8px rgba(239, 68, 68, 0.25)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 20px rgba(239, 68, 68, 0.4)';
              e.target.style.background = 'linear-gradient(135deg, #f87171 0%, #ef4444 100%)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 12px rgba(239, 68, 68, 0.3)';
              e.target.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
            }}
            onClick={() => router.push('/')}
          >
            <div style={{
              position: 'absolute',
              top: '-50%',
              right: '-50%',
              width: '100%',
              height: '100%',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
              transform: 'rotate(45deg)'
            }}></div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ zIndex: 1 }}>
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16,17 21,12 16,7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            {!isCollapsed && <span style={{ zIndex: 1 }}>Logout</span>}
          </button>
        </div>
      </nav>
    </div>
    </>
  );
}
