'use client';

import React, { useState } from 'react';
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

  // Animation trigger
  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
    }}>
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      
      <div style={{
        marginLeft: '280px',
        padding: '2rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Dashboard Overview */}
          <div style={{
            marginBottom: '2rem'
          }}>
            <h1 style={{
              fontSize: '2rem',
              fontWeight: '600',
              color: '#1f2937',
              margin: '0 0 0.5rem 0'
            }}>Dashboard Overview</h1>
          </div>

          {/* Manage Countries Button */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '2rem'
          }}>
            <Link
              href="/reference/countries"
              style={{
                textDecoration: 'none'
              }}
            >
              <div style={{
                background: 'linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)',
                padding: '2rem 3rem',
                borderRadius: '1.5rem',
                color: 'white',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 10px 30px -10px rgba(79, 70, 229, 0.4)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                opacity: isLoaded ? 1 : 0,
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(79, 70, 229, 0.6)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(79, 70, 229, 0.4)';
              }}
              >
                <div>
                  <h2 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    margin: '0 0 0.25rem 0'
                  }}>Manage Countries</h2>
                  <p style={{
                    margin: 0,
                    opacity: 0.9,
                    fontSize: '1rem'
                  }}>Create, edit, view and delete countries</p>
                </div>
              </div>
            </Link>
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
