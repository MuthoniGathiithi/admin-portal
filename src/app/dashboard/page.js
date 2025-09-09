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
              background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
              padding: isMobile ? '1.5rem' : '2rem',
              borderRadius: '16px',
              color: 'white',
              boxShadow: '0 8px 25px rgba(30, 64, 175, 0.25)',
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
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM11 19.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
              </div>
              <div style={{ fontSize: '0.875rem', opacity: 0.8 }}>
                ↗ Active educational systems
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #374151 0%, #1f2937 100%)',
              padding: isMobile ? '1.5rem' : '2rem',
              borderRadius: '16px',
              color: 'white',
              boxShadow: '0 8px 25px rgba(55, 65, 81, 0.25)',
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
                    <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 6h-2v8h-2v-6H9v6H7v-8H5l7-7 7 7h-2z"/>
                  </svg>
                </div>
              </div>
              <div style={{ fontSize: '0.875rem', opacity: 0.8 }}>
                ↗ No institutions registered yet
              </div>
            </div>

            <div style={{
              background: 'white',
              padding: isMobile ? '1.5rem' : '2rem',
              borderRadius: '16px',
              color: '#1f2937',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              border: '2px solid #1e40af'
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
            padding: isMobile ? '1.5rem' : '2rem',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            marginBottom: isMobile ? '1.5rem' : '2rem'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#1f2937',
              marginBottom: '1.5rem'
            }}>
              Quick Actions
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              <div style={{
                background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
                padding: isMobile ? '1.5rem' : '2rem',
                borderRadius: '16px',
                color: 'white',
                boxShadow: '0 8px 25px rgba(30, 64, 175, 0.25)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(30, 64, 175, 0.35)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(30, 64, 175, 0.25)';
              }}
              onClick={() => window.location.href = '/reference/countries/create'}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ fontSize: '0.875rem', opacity: 0.8, marginBottom: '0.5rem' }}>Quick Action</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: '700' }}>Add New Country</div>
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
                    <svg style={{ width: '30px', height: '30px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </div>
                <div style={{ fontSize: '0.875rem', opacity: 0.8 }}>
                  ↗ Register a new educational system
                </div>
              </div>
              
              <div style={{
                background: 'linear-gradient(135deg, #374151 0%, #1f2937 100%)',
                padding: isMobile ? '1.5rem' : '2rem',
                borderRadius: '16px',
                color: 'white',
                boxShadow: '0 8px 25px rgba(55, 65, 81, 0.25)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(55, 65, 81, 0.35)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(55, 65, 81, 0.25)';
              }}
              onClick={() => window.location.href = '/reference/countries'}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ fontSize: '0.875rem', opacity: 0.8, marginBottom: '0.5rem' }}>Quick Action</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: '700' }}>Edit/View Countries</div>
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
                    <svg style={{ width: '30px', height: '30px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                </div>
                <div style={{ fontSize: '0.875rem', opacity: 0.8 }}>
                  ↗ View and edit country data
                </div>
              </div>
            </div>
          </div>

          {/* Data Visualization Section */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: isMobile ? '1rem' : '1.5rem',
            marginBottom: isMobile ? '1.5rem' : '2rem'
          }}>
            {/* Countries by Continent Chart */}
            <div style={{
              background: 'white',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              padding: isMobile ? '1.5rem' : '2rem',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
              opacity: isLoaded ? 1 : 0,
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                color: '#1f2937',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <svg style={{ width: '20px', height: '20px', color: '#1e40af' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                </svg>
                Countries by Continent
              </h3>
              <div style={{ height: '200px', position: 'relative' }}>
                {/* Enhanced Bar Chart with Insights */}
                {countries.length > 0 && (
                  <div style={{ 
                    marginBottom: '1rem', 
                    padding: '0.75rem', 
                    backgroundColor: '#f8fafc', 
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    color: '#374151',
                    fontWeight: '500'
                  }}>
                    💡 {(() => {
                      const continentCounts = { 'Africa': 0, 'Asia': 0, 'Europe': 0, 'Americas': 0 };
                      countries.forEach(country => {
                        const countryName = country.name?.toLowerCase() || '';
                        if (countryName.includes('kenya') || countryName.includes('nigeria') || countryName.includes('south africa') || countryName.includes('egypt') || countryName.includes('ghana')) {
                          continentCounts['Africa']++;
                        } else if (countryName.includes('china') || countryName.includes('india') || countryName.includes('japan') || countryName.includes('korea') || countryName.includes('thailand')) {
                          continentCounts['Asia']++;
                        } else if (countryName.includes('germany') || countryName.includes('france') || countryName.includes('uk') || countryName.includes('italy') || countryName.includes('spain')) {
                          continentCounts['Europe']++;
                        } else if (countryName.includes('usa') || countryName.includes('canada') || countryName.includes('brazil') || countryName.includes('mexico') || countryName.includes('argentina')) {
                          continentCounts['Americas']++;
                        } else {
                          continentCounts['Africa']++;
                        }
                      });
                      const maxContinent = Object.keys(continentCounts).reduce((a, b) => continentCounts[a] > continentCounts[b] ? a : b);
                      return `${maxContinent} is your most active continent with ${continentCounts[maxContinent]} countries`;
                    })()}
                  </div>
                )}
                <div style={{ display: 'flex', alignItems: 'end', height: '140px', gap: '12px', justifyContent: 'space-around' }}>
                  {(() => {
                    // Count countries by continent based on actual data
                    const continentCounts = {
                      'Africa': 0,
                      'Asia': 0,
                      'Europe': 0,
                      'Americas': 0
                    };
                    
                    countries.forEach(country => {
                      const countryName = country.name?.toLowerCase() || '';
                      // Simple continent mapping - can be expanded
                      if (countryName.includes('kenya') || countryName.includes('nigeria') || countryName.includes('south africa') || countryName.includes('egypt') || countryName.includes('ghana')) {
                        continentCounts['Africa']++;
                      } else if (countryName.includes('china') || countryName.includes('india') || countryName.includes('japan') || countryName.includes('korea') || countryName.includes('thailand')) {
                        continentCounts['Asia']++;
                      } else if (countryName.includes('germany') || countryName.includes('france') || countryName.includes('uk') || countryName.includes('italy') || countryName.includes('spain')) {
                        continentCounts['Europe']++;
                      } else if (countryName.includes('usa') || countryName.includes('canada') || countryName.includes('brazil') || countryName.includes('mexico') || countryName.includes('argentina')) {
                        continentCounts['Americas']++;
                      } else {
                        // Default assignment for unknown countries - assume Africa for now since Kenya is there
                        continentCounts['Africa']++;
                      }
                    });
                    
                    return [
                      { name: 'Africa', count: continentCounts['Africa'], color: '#10b981' },
                      { name: 'Asia', count: continentCounts['Asia'], color: '#3b82f6' },
                      { name: 'Europe', count: continentCounts['Europe'], color: '#f59e0b' },
                      { name: 'Americas', count: continentCounts['Americas'], color: '#ef4444' }
                    ];
                  })().map((continent, index) => {
                    const maxHeight = 120;
                    const height = countries.length > 0 ? Math.max((continent.count / countries.length) * maxHeight, 8) : 8;
                    return (
                      <div key={continent.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                        <div style={{
                          width: '100%',
                          maxWidth: '40px',
                          height: `${height}px`,
                          backgroundColor: continent.color,
                          borderRadius: '4px 4px 0 0',
                          marginBottom: '8px',
                          transition: 'all 0.3s ease',
                          transform: isLoaded ? 'scaleY(1)' : 'scaleY(0)',
                          transformOrigin: 'bottom',
                          transitionDelay: `${0.5 + index * 0.1}s`
                        }}></div>
                        <div style={{ fontSize: '0.75rem', color: '#6b7280', textAlign: 'center', fontWeight: '500' }}>
                          {continent.name}
                        </div>
                        <div style={{ fontSize: '0.875rem', color: '#1f2937', fontWeight: '600' }}>
                          {continent.count}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>


          {/* Recent Activity - Enhanced */}
          <div style={{
            background: 'white',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
            padding: isMobile ? '1.5rem' : '2rem',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
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
                fontSize: isMobile ? '1.25rem' : '1.5rem',
                fontWeight: '700',
                color: '#1f2937',
                margin: 0,
                letterSpacing: '-0.01em'
              }}>Recent Activity</h2>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1.25rem',
              background: 'rgba(30, 64, 175, 0.05)',
              borderRadius: '12px',
              border: '1px solid rgba(30, 64, 175, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: '4px',
                background: '#1e40af'
              }}></div>
              <div style={{
                width: '12px',
                height: '12px',
                background: '#1e40af',
                borderRadius: '50%',
                boxShadow: '0 0 10px rgba(30, 64, 175, 0.5)',
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
