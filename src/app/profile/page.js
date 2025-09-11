'use client';

import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: 'Administrator',
    email: 'admin@alama.com',
    role: 'Administrator',
    joinDate: '2024-01-15',
    lastLogin: new Date().toISOString()
  });

  useEffect(() => {
    // Get dynamic user data from localStorage
    const userEmail = localStorage.getItem('userEmail');
    const userName = localStorage.getItem('userName');
    
    if (userEmail) {
      setUser(prevUser => ({
        ...prevUser,
        email: userEmail,
        name: userName || userEmail.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        lastLogin: new Date().toISOString()
      }));
    }
  }, []);

  return (
    <Layout breadcrumbs={['Profile']}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem',
        background: '#f8fafc',
        minHeight: '100vh'
      }}>
        <div style={{
          background: '#ffffff',
          borderRadius: '16px',
          padding: '2rem',
          border: '1px solid #e2e8f0',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
        }}>
          {/* Profile Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            marginBottom: '2rem',
            padding: '2rem',
            background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
            borderRadius: '12px',
            color: 'white'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              fontWeight: '600'
            }}>
              {user.name.charAt(0)}
            </div>
            <div>
              <h1 style={{
                fontSize: '2rem',
                fontWeight: '600',
                margin: 0,
                marginBottom: '0.5rem'
              }}>{user.name}</h1>
              <p style={{
                fontSize: '1rem',
                opacity: 0.8,
                margin: 0,
                marginBottom: '0.5rem'
              }}>{user.email}</p>
              <span style={{
                background: 'rgba(255, 255, 255, 0.2)',
                padding: '0.25rem 0.75rem',
                borderRadius: '12px',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}>
                {user.role}
              </span>
            </div>
          </div>

          {/* Profile Information */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {/* Account Details */}
            <div style={{
              padding: '2rem',
              background: '#f8fafc',
              borderRadius: '12px',
              border: '1px solid #e2e8f0'
            }}>
              <h2 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#1e293b',
                margin: 0,
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e40af" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                Account Details
              </h2>
              
              <div style={{ display: 'grid', gap: '1rem' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1rem',
                  background: '#ffffff',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0'
                }}>
                  <div>
                    <p style={{
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#1e293b',
                      margin: 0
                    }}>Full Name</p>
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#64748b',
                      margin: 0
                    }}>{user.name}</p>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1rem',
                  background: '#ffffff',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0'
                }}>
                  <div>
                    <p style={{
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#1e293b',
                      margin: 0
                    }}>Email Address</p>
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#64748b',
                      margin: 0
                    }}>{user.email}</p>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1rem',
                  background: '#ffffff',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0'
                }}>
                  <div>
                    <p style={{
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#1e293b',
                      margin: 0
                    }}>Role</p>
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#64748b',
                      margin: 0
                    }}>{user.role}</p>
                  </div>
                  <span style={{
                    background: '#f0fdf4',
                    color: '#166534',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>
                    Active
                  </span>
                </div>
              </div>
            </div>

            {/* Activity Information */}
            <div style={{
              padding: '2rem',
              background: '#f8fafc',
              borderRadius: '12px',
              border: '1px solid #e2e8f0'
            }}>
              <h2 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#1e293b',
                margin: 0,
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e40af" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
                Activity
              </h2>
              
              <div style={{ display: 'grid', gap: '1rem' }}>
                <div style={{
                  padding: '1rem',
                  background: '#ffffff',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0'
                }}>
                  <p style={{
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#1e293b',
                    margin: 0,
                    marginBottom: '0.5rem'
                  }}>Member Since</p>
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#64748b',
                    margin: 0
                  }}>{new Date(user.joinDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</p>
                </div>

                <div style={{
                  padding: '1rem',
                  background: '#ffffff',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0'
                }}>
                  <p style={{
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#1e293b',
                    margin: 0,
                    marginBottom: '0.5rem'
                  }}>Last Login</p>
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#64748b',
                    margin: 0
                  }}>{new Date(user.lastLogin).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}</p>
                </div>

                <div style={{
                  padding: '1rem',
                  background: '#ffffff',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0'
                }}>
                  <p style={{
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#1e293b',
                    margin: 0,
                    marginBottom: '0.5rem'
                  }}>Countries Managed</p>
                  <p style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: '#1e40af',
                    margin: 0
                  }}>1</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div style={{
            marginTop: '2rem',
            padding: '2rem',
            background: '#f8fafc',
            borderRadius: '12px',
            border: '1px solid #e2e8f0'
          }}>
            <h2 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#1e293b',
              margin: 0,
              marginBottom: '1.5rem'
            }}>Quick Actions</h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem'
            }}>
              <button style={{
                background: '#1e40af',
                color: '#ffffff',
                border: 'none',
                padding: '1rem',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
                Edit Profile
              </button>
              
              <button 
                onClick={() => window.location.href = '/settings'}
                style={{
                  background: '#ffffff',
                  color: '#1e40af',
                  border: '1px solid #1e40af',
                  padding: '1rem',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="m12 1 0 6m0 6 0 6m11-7-6 0m-6 0-6 0m15.4-6.4-4.2 4.2m-5.6 0-4.2-4.2m0 8.4 4.2 4.2m5.6 0 4.2-4.2"/>
                </svg>
                Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
