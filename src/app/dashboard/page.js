'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = ({ activeItem, setActiveItem }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', href: '/dashboard' },
    { id: 'reference', label: 'Reference', href: '/reference', hasSubmenu: true },
  ];

  return (
    <div style={{
      width: '280px',
      backgroundColor: 'white',
      borderRight: '1px solid #e5e7eb',
      minHeight: '100vh',
      position: 'fixed',
      left: 0,
      top: 0
    }}>
      <div style={{ padding: '2rem' }}>
        {/* ALAMA Logo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '3rem'
        }}>
          <Image
            src="/alama_dark_logo_lt_bnjlIcW.png"
            alt="Alama"
            width={40}
            height={40}
            style={{
              width: '40px',
              height: '40px',
              marginRight: '0.75rem'
            }}
          />
          <span style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#000000'
          }}>
            ALAMA
          </span>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {menuItems.map((item) => (
            <div key={item.id}>
              <Link
                href={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  transition: 'all 0.2s ease-in-out',
                  textDecoration: 'none',
                  backgroundColor: activeItem === item.id ? '#eff6ff' : 'transparent',
                  color: activeItem === item.id ? '#2563eb' : '#374151',
                  borderLeft: activeItem === item.id ? '4px solid #2563eb' : '4px solid transparent',
                  fontWeight: '500'
                }}
                onClick={() => setActiveItem(item.id)}
                onMouseOver={(e) => {
                  if (activeItem !== item.id) {
                    e.target.style.backgroundColor = '#f9fafb';
                  }
                }}
                onMouseOut={(e) => {
                  if (activeItem !== item.id) {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <span>{item.label}</span>
                {item.hasSubmenu && (
                  <svg
                    style={{ width: '1rem', height: '1rem' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </Link>
              {item.hasSubmenu && activeItem === item.id && (
                <div style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
                  <Link
                    href="/reference/countries"
                    style={{
                      display: 'block',
                      padding: '0.5rem 1rem',
                      fontSize: '0.875rem',
                      color: '#6b7280',
                      textDecoration: 'none',
                      borderRadius: '0.25rem',
                      transition: 'all 0.2s ease-in-out'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.color = '#2563eb';
                      e.target.style.backgroundColor = '#eff6ff';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = '#6b7280';
                      e.target.style.backgroundColor = 'transparent';
                    }}
                  >
                    Countries
                  </Link>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

const DashboardCard = ({ title, description, href, icon }) => (
  <Link href={href} style={{ textDecoration: 'none' }}>
    <div style={{
      backgroundColor: 'white',
      padding: '1.5rem',
      borderRadius: '0.5rem',
      border: '1px solid #e5e7eb',
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out'
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.borderColor = '#93c5fd';
      e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.borderColor = '#e5e7eb';
      e.currentTarget.style.boxShadow = 'none';
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <div style={{
          padding: '0.75rem',
          backgroundColor: '#eff6ff',
          borderRadius: '0.5rem'
        }}>
          {icon}
        </div>
        <div>
          <h3 style={{
            fontSize: '1.125rem',
            fontWeight: '600',
            color: '#000000',
            margin: '0 0 0.25rem 0'
          }}>{title}</h3>
          <p style={{
            color: '#6b7280',
            fontSize: '0.875rem',
            margin: 0
          }}>{description}</p>
        </div>
      </div>
    </div>
  </Link>
);

export default function Dashboard() {
  const [activeItem, setActiveItem] = useState('dashboard');

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f9fafb'
    }}>
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      
      <div style={{
        marginLeft: '280px',
        padding: '2rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '2rem' }}>
            <h1 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#000000',
              margin: '0 0 0.5rem 0'
            }}>Dashboard</h1>
            <p style={{
              color: '#6b7280',
              margin: 0
            }}>Welcome to your admin dashboard</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            <DashboardCard
              title="Countries"
              description="Manage country references and details"
              href="/reference/countries"
              icon={
                <svg style={{ width: '1.5rem', height: '1.5rem', color: '#2563eb' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
            
            <DashboardCard
              title="Institutions"
              description="Manage institutional data and mappings"
              href="/reference/institutions"
              icon={
                <svg style={{ width: '1.5rem', height: '1.5rem', color: '#2563eb' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              }
            />

            <DashboardCard
              title="Resources"
              description="Manage resources and observations"
              href="/reference/resources"
              icon={
                <svg style={{ width: '1.5rem', height: '1.5rem', color: '#2563eb' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
            />
          </div>

          <div style={{
            marginTop: '3rem',
            backgroundColor: 'white',
            borderRadius: '0.5rem',
            border: '1px solid #e5e7eb',
            padding: '1.5rem'
          }}>
            <h2 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#000000',
              margin: '0 0 1rem 0'
            }}>Recent Activity</h2>
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem',
                backgroundColor: '#f9fafb',
                borderRadius: '0.25rem'
              }}>
                <div style={{
                  width: '0.5rem',
                  height: '0.5rem',
                  backgroundColor: '#2563eb',
                  borderRadius: '50%'
                }}></div>
                <span style={{ color: '#374151' }}>System initialized successfully</span>
                <span style={{
                  fontSize: '0.875rem',
                  color: '#6b7280',
                  marginLeft: 'auto'
                }}>Just now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
