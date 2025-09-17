'use client';

import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';

export default function SettingsPage() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [userEmail, setUserEmail] = useState('admin@alama.com');
  const [userName, setUserName] = useState('Administrator');

  useEffect(() => {
    // Get dynamic user data from localStorage
    const email = localStorage.getItem('userEmail');
    const name = localStorage.getItem('userName');
    
    if (email) {
      setUserEmail(email);
      setUserName(name || email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()));
    }
  }, []);

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    // Validation
    if (!currentPassword || !newPassword || !confirmPassword) {
      setMessage('All fields are required');
      setMessageType('error');
      setIsLoading(false);
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage('New passwords do not match');
      setMessageType('error');
      setIsLoading(false);
      return;
    }

    if (newPassword.length < 8) {
      setMessage('Password must be at least 8 characters long');
      setMessageType('error');
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setMessage('Password changed successfully');
      setMessageType('success');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Layout breadcrumbs={['Settings']}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '2rem',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <circle cx="12" cy="12" r="3"/>
                <path d="m12 1 0 6m0 6 0 6m11-7-6 0m-6 0-6 0m15.4-6.4-4.2 4.2m-5.6 0-4.2-4.2m0 8.4 4.2 4.2m5.6 0 4.2-4.2"/>
              </svg>
            </div>
            <div>
              <h1 style={{
                fontSize: '2rem',
                fontWeight: '600',
                color: '#1e293b',
                margin: 0
              }}>Settings</h1>
              <p style={{
                fontSize: '1rem',
                color: '#64748b',
                margin: 0
              }}>Manage your account settings and preferences</p>
            </div>
          </div>

          {/* Password Change Section */}
          <div style={{
            padding: '2rem',
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)'
          }}>
            <h2 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#1e293b',
              margin: 0,
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e40af" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <circle cx="12" cy="16" r="1"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              Change Password
            </h2>
            <p style={{
              fontSize: '0.875rem',
              color: '#64748b',
              margin: 0,
              marginBottom: '1.5rem'
            }}>
              Update your password to keep your account secure
            </p>

            {message && (
              <div style={{
                padding: '1rem',
                borderRadius: '8px',
                marginBottom: '1.5rem',
                background: messageType === 'success' ? '#f0fdf4' : '#fef2f2',
                border: `1px solid ${messageType === 'success' ? '#bbf7d0' : '#fecaca'}`,
                color: messageType === 'success' ? '#15803d' : '#6366f1',
                fontSize: '0.875rem'
              }}>
                {message}
              </div>
            )}

            <form onSubmit={handlePasswordChange}>
              <div style={{
                display: 'grid',
                gap: '1.5rem'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    Current Password
                  </label>
                  <input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '0.875rem',
                      background: '#ffffff',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#6366f1'}
                    onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    New Password
                  </label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '0.875rem',
                      background: '#ffffff',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#6366f1'}
                    onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '0.875rem',
                      background: '#ffffff',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#6366f1'}
                    onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                  />
                </div>

                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  marginTop: '1rem'
                }}>
                  <button
                    type="submit"
                    disabled={isLoading}
                    style={{
                      background: isLoading ? '#9ca3af' : 'linear-gradient(180deg, #1e293b 0%, #0f172a 100)',
                      color: '#ffffff',
                      border: 'none',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '8px',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      cursor: isLoading ? 'not-allowed' : 'pointer',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    {isLoading ? (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                        </svg>
                        Updating...
                      </>
                    ) : (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 6L9 17l-5-5"/>
                        </svg>
                        Update Password
                      </>
                    )}
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentPassword('');
                      setNewPassword('');
                      setConfirmPassword('');
                      setMessage('');
                    }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.9)',
                      color: '#1e293b',
                      border: '1px solid #1e293b',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '12px',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Additional Settings Sections */}
          <div style={{
            marginTop: '2rem',
            padding: '2rem',
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)'
          }}>
            <h2 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#1e293b',
              margin: 0,
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e40af" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              Account Information
            </h2>
            <div style={{
              display: 'grid',
              gap: '1rem'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)'
              }}>
                <div>
                  <p style={{
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#111827',
                    margin: 0
                  }}>Email</p>
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#64748b',
                    margin: 0
                  }}>{userEmail}</p>
                </div>
                <button style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  color: '#6366f1',
                  border: '1px solid #6366f1',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  fontSize: '0.75rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#1e293b';
                  e.target.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                  e.target.style.color = '#1e293b';
                }}>
                  Edit
                </button>
              </div>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)'
              }}>
                <div>
                  <p style={{
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#111827',
                    margin: 0
                  }}>Role</p>
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#64748b',
                    margin: 0
                  }}>Administrator</p>
                </div>
                <span style={{
                  background: '#dcfce7',
                  color: '#15803d',
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
        </div>
      </div>
    </Layout>
  );
}
