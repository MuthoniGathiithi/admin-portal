'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Layout from '../../../../components/Layout';
import Link from 'next/link';

export default function ViewCountryPage() {
  const params = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load country data from localStorage
    const savedCountries = localStorage.getItem('countries');
    console.log('Saved countries:', savedCountries);
    console.log('Looking for ID:', params.id);
    
    if (savedCountries) {
      const countries = JSON.parse(savedCountries);
      console.log('Parsed countries:', countries);
      
      // Try different ID matching strategies
      let foundCountry = countries.find(c => c.id === params.id);
      
      if (!foundCountry) {
        // Try string comparison
        foundCountry = countries.find(c => String(c.id) === String(params.id));
      }
      
      if (!foundCountry) {
        // Try name-based lookup as fallback
        foundCountry = countries.find(c => c.name.toLowerCase() === params.id.toLowerCase());
      }
      
      console.log('Found country:', foundCountry);
      
      if (foundCountry) {
        setCountry(foundCountry);
      }
    }
    setLoading(false);
  }, [params.id]);

  if (loading) {
    return (
      <Layout breadcrumbs={['Reference', 'Countries', 'Loading...']}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '1.125rem',
          color: '#64748b'
        }}>
          Loading country details...
        </div>
      </Layout>
    );
  }

  if (!country) {
    return (
      <Layout breadcrumbs={['Reference', 'Countries', 'Not Found']}>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <h1 style={{ fontSize: '2rem', color: '#ef4444', marginBottom: '1rem' }}>
            Country not found
          </h1>
          <Link
            href="/reference/countries"
            style={{
              background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
              color: '#ffffff',
              padding: '0.875rem 1.5rem',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.875rem',
              border: 'none',
              borderRadius: '12px',
              transition: 'all 0.2s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 4px 12px rgba(30, 41, 59, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px rgba(30, 41, 59, 0.4)';
              e.target.style.background = 'linear-gradient(180deg, #0f172a 0%, #020617 100%)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 12px rgba(30, 41, 59, 0.3)';
              e.target.style.background = 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)';
            }}
          >
            ← Back to Countries
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout breadcrumbs={['Reference', 'Countries', country.name]}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        padding: '2rem',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
      }}>
        {/* Header with Back Button */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '3rem'
        }}>
          <h1 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#1e293b',
            margin: 0
          }}>
            {country.name}
          </h1>
          <Link
            href="/reference/countries"
            style={{
              background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
              color: '#ffffff',
              padding: '0.875rem 1.5rem',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.875rem',
              border: 'none',
              borderRadius: '12px',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 4px 12px rgba(30, 41, 59, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px rgba(30, 41, 59, 0.4)';
              e.target.style.background = 'linear-gradient(180deg, #0f172a 0%, #020617 100%)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 12px rgba(30, 41, 59, 0.3)';
              e.target.style.background = 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)';
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15,18 9,12 15,6"/>
            </svg>
            Back
          </Link>
        </div>

        {/* Prominent Circular Flag Display */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '2rem'
        }}>
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            border: '1px solid rgba(226, 232, 240, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(248, 250, 252, 0.8)',
            backdropFilter: 'blur(10px)',
            fontSize: '3.5rem',
            overflow: 'hidden',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
          }}>
            {country.flagSvg ? (
              <img 
                src={country.flagSvg} 
                alt={`${country.name} flag`}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover'
                }}
              />
            ) : (
              country.flag || '🏳️'
            )}
          </div>
        </div>

        {/* Four Action Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          <button 
            onClick={() => console.log('Navigate to Institutions')}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px rgba(30, 41, 59, 0.4)';
              e.target.style.background = 'linear-gradient(180deg, #0f172a 0%, #020617 100%)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 12px rgba(30, 41, 59, 0.3)';
              e.target.style.background = 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)';
            }}
            style={{
              background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
              color: '#ffffff',
              border: 'none',
              padding: '1rem 1.5rem',
              borderRadius: '12px',
              fontSize: '0.875rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              boxShadow: '0 4px 12px rgba(30, 41, 59, 0.3)',
              minWidth: '140px',
              justifyContent: 'center'
            }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 21h18"/>
              <path d="M5 21V7l8-4v18"/>
              <path d="M19 21V11l-6-4"/>
            </svg>
            Institutions
          </button>
          
          <button 
            onClick={() => console.log('Navigate to Resources')}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px rgba(30, 41, 59, 0.4)';
              e.target.style.background = 'linear-gradient(180deg, #0f172a 0%, #020617 100%)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 12px rgba(30, 41, 59, 0.3)';
              e.target.style.background = 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)';
            }}
            style={{
              background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
              color: '#ffffff',
              border: 'none',
              padding: '1rem 1.5rem',
              borderRadius: '12px',
              fontSize: '0.875rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              boxShadow: '0 4px 12px rgba(30, 41, 59, 0.3)',
              minWidth: '140px',
              justifyContent: 'center'
            }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14,2 14,8 20,8"/>
            </svg>
            Resources
          </button>
          
          <button 
            onClick={() => console.log('Navigate to Students')}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px rgba(30, 41, 59, 0.4)';
              e.target.style.background = 'linear-gradient(180deg, #0f172a 0%, #020617 100%)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 12px rgba(30, 41, 59, 0.3)';
              e.target.style.background = 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)';
            }}
            style={{
              background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
              color: '#ffffff',
              border: 'none',
              padding: '1rem 1.5rem',
              borderRadius: '12px',
              fontSize: '0.875rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              boxShadow: '0 4px 12px rgba(30, 41, 59, 0.3)',
              minWidth: '140px',
              justifyContent: 'center'
            }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            Students
          </button>
          
          <button 
            onClick={() => console.log('Navigate to Curriculum')}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px rgba(30, 41, 59, 0.4)';
              e.target.style.background = 'linear-gradient(180deg, #0f172a 0%, #020617 100%)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 12px rgba(30, 41, 59, 0.3)';
              e.target.style.background = 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)';
            }}
            style={{
              background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
              color: '#ffffff',
              border: 'none',
              padding: '1rem 1.5rem',
              borderRadius: '12px',
              fontSize: '0.875rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              boxShadow: '0 4px 12px rgba(30, 41, 59, 0.3)',
              minWidth: '140px',
              justifyContent: 'center'
            }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
            </svg>
            Curriculum
          </button>
        </div>

        {/* Two Adjacent Sections */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {/* Institution Registration Section */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(226, 232, 240, 0.3)',
            borderRadius: '16px',
            padding: '2rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '2rem'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: '#1e293b',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '1rem',
                boxShadow: '0 4px 12px -2px rgba(30, 41, 59, 0.3)'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                  <path d="M3 21h18"/>
                  <path d="M5 21V7l8-4v18"/>
                  <path d="M19 21V11l-6-4"/>
                </svg>
              </div>
              <h2 style={{
                fontSize: '1.125rem',
                fontWeight: '700',
                color: '#1e293b',
                margin: 0
              }}>
                Institution Registration
              </h2>
            </div>
            
            <div style={{
              padding: '1.5rem 0'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'baseline',
                marginBottom: '1rem'
              }}>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginRight: '0.5rem',
                  lineHeight: '1'
                }}>
                  {country.institutions?.length || 0}
                </div>
                <span style={{
                  fontSize: '1rem',
                  color: '#64748b',
                  fontWeight: '500'
                }}>
                  institutions
                </span>
              </div>
              <p style={{
                fontSize: '0.875rem',
                color: '#64748b',
                margin: '0 0 2rem 0',
                lineHeight: '1.5'
              }}>
                {(country.institutions?.length || 0) === 0 ? '0' : `Currently registered in ${country.name}`}
              </p>
              
              <button style={{
                background: '#1e293b',
                color: '#ffffff',
                border: 'none',
                padding: '0.875rem 1.5rem',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px -2px rgba(30, 41, 59, 0.3)',
                width: '100%'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-1px)';
                e.target.style.boxShadow = '0 8px 20px -4px rgba(30, 41, 59, 0.4)';
                e.target.style.background = '#0f172a';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 12px -2px rgba(30, 41, 59, 0.3)';
                e.target.style.background = '#1e293b';
              }}>
                Register New Institution
              </button>
            </div>
          </div>

          {/* AI Assessment Section */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(226, 232, 240, 0.3)',
            borderRadius: '16px',
            padding: '2rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '2rem'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: '#6366f1',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '1rem',
                boxShadow: '0 4px 12px -2px rgba(99, 102, 241, 0.3)'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                  <path d="M9 12l2 2 4-4"/>
                  <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.66 0 3.22.45 4.56 1.23"/>
                </svg>
              </div>
              <h2 style={{
                fontSize: '1.125rem',
                fontWeight: '700',
                color: '#1e293b',
                margin: 0
              }}>
                AI Assessment
              </h2>
            </div>
            
            <div style={{
              padding: '1.5rem 0'
            }}>
            </div>
          </div>
        </div>

        {/* Institution MAP Section */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(226, 232, 240, 0.3)',
          borderRadius: '16px',
          padding: '2rem',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '2rem'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: '#64748b',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '1rem',
              boxShadow: '0 4px 12px -2px rgba(100, 116, 139, 0.3)'
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h2 style={{
              fontSize: '1.125rem',
              fontWeight: '700',
              color: '#1e293b',
              margin: 0
            }}>
              Institution MAP
            </h2>
          </div>
          
          <div style={{
            background: 'rgba(248, 250, 252, 0.6)',
            backdropFilter: 'blur(5px)',
            border: '2px dashed rgba(226, 232, 240, 0.4)',
            borderRadius: '12px',
            padding: '3rem 2rem',
            textAlign: 'center',
            minHeight: '240px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              background: '#64748b',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
              boxShadow: '0 4px 12px -2px rgba(100, 116, 139, 0.3)'
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h3 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              color: '#1e293b',
              marginBottom: '0.75rem'
            }}>
              Institution Map Visualization
            </h3>
            <p style={{
              fontSize: '0.875rem',
              color: '#64748b',
              margin: 0,
              maxWidth: '360px',
              lineHeight: '1.5'
            }}>
              Interactive map showing all institutions in {country.name} will be displayed here
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
