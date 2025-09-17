'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Layout from '../../../components/Layout';

export default function CountriesPage() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRegion, setFilterRegion] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load countries from localStorage - no hardcoded data
    const savedCountries = localStorage.getItem('countries');
    if (savedCountries) {
      setCountries(JSON.parse(savedCountries));
    }
    setIsLoading(false);
  }, []);

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this country?')) {
      const updatedCountries = countries.filter(c => c.id !== id);
      setCountries(updatedCountries);
      localStorage.setItem('countries', JSON.stringify(updatedCountries));
    }
  };

  const filteredCountries = countries.filter(country => {
    const matchesSearch = country.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = !filterRegion || country.continent === filterRegion;
    return matchesSearch && matchesRegion;
  });

  const regions = [...new Set(countries.map(c => c.continent).filter(Boolean))];

  return (
    <Layout breadcrumbs={['Reference', 'Countries']}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Stats Card */}
        <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 0'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-6)'
            }}>
              <div>
                <h2 style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: '#111827',
                  margin: 0,
                  lineHeight: '1'
                }}>
                  {countries.length}
                </h2>
                <p style={{
                  fontSize: '0.875rem',
                  color: '#6b7280',
                  margin: 0,
                  fontWeight: '500'
                }}>
                  Countries
                </p>
              </div>
              
              {(searchTerm || filterRegion) && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  paddingLeft: 'var(--space-6)',
                  borderLeft: '2px solid #e5e7eb'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <circle cx="11" cy="11" r="8"/>
                      <path d="m21 21-4.35-4.35"/>
                    </svg>
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      color: '#111827',
                      margin: 0,
                      lineHeight: '1'
                    }}>
                      {filteredCountries.length}
                    </h3>
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#6b7280',
                      margin: 0,
                      fontWeight: '500'
                    }}>
                      Filtered Results
                    </p>
                  </div>
                </div>
              )}
            </div>
            
            <button
              onClick={() => window.location.href = '/reference/countries/create'}
              style={{
                background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                padding: '0.75rem 1.5rem',
                fontSize: '0.875rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(180deg, #0f172a 0%, #020617 100%)';
                e.target.style.transform = 'translateY(-1px)';
                e.target.style.boxShadow = '0 6px 8px -1px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19"/>
                <line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
              Add New Country
            </button>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
          <div style={{
            display: 'flex',
            gap: 'var(--space-4)',
            alignItems: 'center'
          }} className="countries-search-bar">
            <div style={{ flex: 1 }}>
              <input
                type="text"
                placeholder="Search countries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input"
              />
            </div>
            
            <div style={{ minWidth: '200px' }}>
              <select
                value={filterRegion}
                onChange={(e) => setFilterRegion(e.target.value)}
                className="input"
              >
                <option value="">All Regions</option>
                {regions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Countries List */}
        <div className="card">
          {isLoading ? (
            <div style={{ textAlign: 'center', padding: 'var(--space-8)' }}>
              <p>Loading countries...</p>
            </div>
          ) : filteredCountries.length === 0 ? (
            <div style={{ textAlign: 'center', padding: 'var(--space-8)' }}>
              <p style={{ color: 'var(--gray-500)', marginBottom: 'var(--space-4)' }}>
                {searchTerm || filterRegion ? 'No countries match your filters' : 'No countries found'}
              </p>
              <Link href="/reference/countries/create" className="btn btn-primary">
                Add First Country
              </Link>
            </div>
          ) : (
            <div style={{ overflow: 'auto' }} className="countries-table-container">
              <table style={{
                width: '100%',
                borderCollapse: 'collapse'
              }} className="countries-table">
                <thead>
                  <tr style={{
                    borderBottom: '2px solid #e5e7eb',
                    background: '#f9fafb'
                  }}>
                    <th style={{
                      textAlign: 'left',
                      padding: '1rem 1.25rem',
                      fontWeight: '700',
                      color: '#1f2937',
                      fontSize: '0.9rem',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase'
                    }}>
                      Flag
                    </th>
                    <th style={{
                      textAlign: 'left',
                      padding: '1rem 1.25rem',
                      fontWeight: '700',
                      color: '#1f2937',
                      fontSize: '0.9rem',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase'
                    }}>
                      Name
                    </th>
                    <th style={{
                      textAlign: 'left',
                      padding: '1rem 1.25rem',
                      fontWeight: '700',
                      color: '#1f2937',
                      fontSize: '0.9rem',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase'
                    }}>
                      Continent
                    </th>
                    <th style={{
                      textAlign: 'left',
                      padding: '1rem 1.25rem',
                      fontWeight: '700',
                      color: '#1f2937',
                      fontSize: '0.9rem',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase'
                    }}>
                      Tel Code
                    </th>
                    <th style={{
                      textAlign: 'center',
                      padding: '1rem 1.25rem',
                      fontWeight: '700',
                      color: '#1f2937',
                      fontSize: '0.9rem',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase'
                    }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCountries.map((country, index) => (
                    <tr key={country.id} style={{
                      borderBottom: '1px solid #f3f4f6',
                      background: index % 2 === 0 ? '#ffffff' : '#f9fafb',
                      transition: 'background-color 0.15s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = index % 2 === 0 ? '#ffffff' : '#f9fafb'}
                    >
                      <td style={{ 
                        padding: '1.5rem',
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        {country.flagSvg ? (
                          <img 
                            src={country.flagSvg} 
                            alt={`${country.name} flag`}
                            style={{ 
                              width: '32px', 
                              height: '20px', 
                              objectFit: 'cover', 
                              borderRadius: '2px',
                              border: '1px solid #e5e7eb',
                              display: 'block'
                            }}
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'inline';
                            }}
                          />
                        ) : null}
                        <span 
                          style={{ 
                            fontSize: '1.5rem',
                            display: country.flagSvg ? 'none' : 'inline',
                            lineHeight: '1'
                          }}
                        >
                          {country.flag || '🏳️'}
                        </span>
                      </td>
                      <td style={{
                        padding: '1.5rem',
                        fontWeight: '600',
                        color: '#111827',
                        textAlign: 'left',
                        fontSize: '0.95rem'
                      }}>
                        {country.name}
                      </td>
                      <td style={{
                        padding: '1.5rem',
                        color: '#6b7280',
                        textAlign: 'left',
                        fontSize: '0.9rem',
                        fontWeight: '500'
                      }}>
                        {country.continent}
                      </td>
                      <td style={{
                        padding: '1.5rem',
                        color: '#6b7280',
                        textAlign: 'left',
                        fontSize: '0.9rem',
                        fontWeight: '500'
                      }}>
                        {country.telCode}
                      </td>
                      <td style={{
                        padding: '1.5rem',
                        textAlign: 'center'
                      }}>
                        <div style={{
                          display: 'flex',
                          gap: '0.5rem',
                          justifyContent: 'center',
                          alignItems: 'center'
                        }} className="countries-actions">
                          <button
                            onClick={() => window.location.href = `/reference/countries/${country.id}`}
                            title="View Country"
                            style={{
                              background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
                              color: 'white',
                              border: 'none',
                              borderRadius: '8px',
                              padding: '0.5rem',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '36px',
                              height: '36px'
                            }}
                            onMouseEnter={(e) => e.target.style.background = 'linear-gradient(180deg, #0f172a 0%, #020617 100%)'}
                            onMouseLeave={(e) => e.target.style.background = 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)'}
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                              <circle cx="12" cy="12" r="3"/>
                            </svg>
                          </button>
                          <button
                            onClick={() => window.location.href = `/reference/countries/${country.id}/edit`}
                            title="Edit Country"
                            style={{
                              background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
                              color: 'white',
                              border: 'none',
                              borderRadius: '8px',
                              padding: '0.5rem',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '36px',
                              height: '36px'
                            }}
                            onMouseEnter={(e) => e.target.style.background = 'linear-gradient(180deg, #0f172a 0%, #020617 100%)'}
                            onMouseLeave={(e) => e.target.style.background = 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)'}
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                              <path d="m18.5 2.5 a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                            </svg>
                          </button>
                          <button
                            onClick={() => handleDelete(country.id)}
                            title="Delete Country"
                            style={{
                              background: '#ef4444',
                              color: 'white',
                              border: 'none',
                              borderRadius: '8px',
                              padding: '0.5rem',
                              cursor: 'pointer',
                              transition: 'background-color 0.2s ease',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '36px',
                              height: '36px'
                            }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#dc2626'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#ef4444'}
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polyline points="3,6 5,6 21,6"/>
                              <path d="m19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"/>
                              <line x1="10" y1="11" x2="10" y2="17"/>
                              <line x1="14" y1="11" x2="14" y2="17"/>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
