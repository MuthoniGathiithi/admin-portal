'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Sidebar from '../../components/Sidebar';


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
  const [isLoaded, setIsLoaded] = useState(false);
  const [countries, setCountries] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  // Load countries and animation trigger
  useEffect(() => {
    const savedCountries = JSON.parse(localStorage.getItem('countries') || '[]');
    setCountries(savedCountries);
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
    }}>
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      
      <div className="main-content" style={{
        marginLeft: isMobile ? '0' : '280px',
        padding: isMobile ? '1rem' : '2rem',
        paddingTop: isMobile ? '5rem' : '2rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Dashboard Overview */}
          <div style={{
            marginBottom: '2rem'
          }}>
            <h1 style={{
              fontSize: isMobile ? '1.5rem' : '2rem',
              fontWeight: '700',
              color: '#1f2937',
              marginBottom: '0.5rem',
              letterSpacing: '-0.025em',
              marginLeft: isMobile ? '0' : '-0.5rem'
            }}>
              Dashboard
            </h1>
          </div>

          {/* Statistics Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: isMobile ? '1rem' : '1.5rem',
            marginBottom: isMobile ? '1.5rem' : '2rem'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              padding: '2rem',
              borderRadius: '20px',
              color: 'white',
              boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div>
                  <div style={{ fontSize: '0.875rem', opacity: 0.8, marginBottom: '0.5rem' }}>Total Countries</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: '700' }}>{countries.length}</div>
                </div>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(10px)'
                }}>
                  <svg style={{ width: '30px', height: '30px' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
              <div style={{ fontSize: '0.875rem', opacity: 0.8 }}>
                ↗ Active educational systems
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              padding: '2rem',
              borderRadius: '20px',
              color: 'white',
              boxShadow: '0 10px 30px rgba(245, 87, 108, 0.3)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div>
                  <div style={{ fontSize: '0.875rem', opacity: 0.8, marginBottom: '0.5rem' }}>Total Institutions</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: '700' }}>0</div>
                </div>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(10px)'
                }}>
                  <svg style={{ width: '30px', height: '30px' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                  </svg>
                </div>
              </div>
              <div style={{ fontSize: '0.875rem', opacity: 0.8 }}>
                ↗ No institutions registered yet
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
              padding: '2rem',
              borderRadius: '20px',
              color: 'white',
              boxShadow: '0 10px 30px rgba(79, 172, 254, 0.3)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div>
                  <div style={{ fontSize: '0.875rem', opacity: 0.8, marginBottom: '0.5rem' }}>Active Students</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: '700' }}>0</div>
                </div>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(10px)'
                }}>
                  <svg style={{ width: '30px', height: '30px' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.5 7.5h-5A1.5 1.5 0 0 0 12.04 8.37L9.5 16H12v6h8zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9V9.5c0-.28-.22-.5-.5-.5h-3c-.28 0-.5.22-.5.5V15H7v7h.5z"/>
                  </svg>
                </div>
              </div>
              <div style={{ fontSize: '0.875rem', opacity: 0.8 }}>
                ↗ No students enrolled yet
              </div>
            </div>
          </div>

          {/* Quick Actions Section */}
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '20px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            marginBottom: '2rem'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#1f2937',
              marginBottom: '1.5rem'
            }}>
              Quick Actions
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
              <Link
                href="/reference/countries/create"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.5rem',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '16px',
                  fontWeight: '600',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(10px)'
                }}>
                  <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>Add New Country</div>
                  <div style={{ fontSize: '0.875rem', opacity: 0.8 }}>Register a new educational system</div>
                </div>
              </Link>
              
              <Link
                href="/reference/countries"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.5rem',
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '16px',
                  fontWeight: '600',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(245, 87, 108, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(245, 87, 108, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(245, 87, 108, 0.3)';
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(10px)'
                }}>
                  <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>Manage Countries</div>
                  <div style={{ fontSize: '0.875rem', opacity: 0.8 }}>View and edit country data</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Recent Activity - Enhanced */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            borderRadius: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            padding: '2rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
            transform: isLoaded ? 'translateY(0)' : 'translateY(50px)',
            opacity: isLoaded ? 1 : 0,
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem'
            }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #1f2937 0%, #4f46e5 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                margin: 0,
                letterSpacing: '-0.01em'
              }}>Recent Activity</h2>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1.25rem',
              background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)',
              borderRadius: '1rem',
              border: '1px solid rgba(79, 70, 229, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: '4px',
                background: 'linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)'
              }}></div>
              <div style={{
                width: '12px',
                height: '12px',
                background: 'linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)',
                borderRadius: '50%',
                boxShadow: '0 0 10px rgba(79, 70, 229, 0.5)',
                animation: 'pulse 2s infinite'
              }}></div>
              <div style={{ flex: 1 }}>
                <span style={{
                  color: '#1f2937',
                  fontWeight: '600',
                  fontSize: '1rem'
                }}>System initialized successfully</span>
                <div style={{
                  color: '#6b7280',
                  fontSize: '0.875rem',
                  marginTop: '0.25rem'
                }}>Welcome to ALAMA Dashboard - Ready to manage country data</div>
              </div>
              <span style={{
                fontSize: '0.875rem',
                color: '#6b7280',
                fontWeight: '500',
                background: 'rgba(255, 255, 255, 0.8)',
                padding: '0.25rem 0.75rem',
                borderRadius: '1rem'
              }}>Just now</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes slideInUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
}
