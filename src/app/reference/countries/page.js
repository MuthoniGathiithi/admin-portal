'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Sidebar from '../../../components/Sidebar';

const EmptyState = ({ onCreateCountry }) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      backgroundColor: 'white',
      borderRadius: '1rem',
      border: '1px solid #e5e7eb'
    }}>
      <div style={{ textAlign: 'center' }}>
        <svg style={{
          width: '4rem',
          height: '4rem',
          margin: '0 auto 1rem',
          color: '#d1d5db'
        }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: '600',
          color: '#1f2937',
          marginBottom: '0.5rem'
        }}>
          No countries yet
        </h3>
        <p style={{
          color: '#6b7280',
          fontSize: '1rem',
          marginBottom: '2rem'
        }}>
          Get started by adding your first country to the system.
        </p>
        <button
          onClick={onCreateCountry}
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '12px',
            border: 'none',
            fontSize: '0.875rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            margin: '0 auto',
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
          <svg style={{
            width: '1rem',
            height: '1rem',
            marginRight: '0.5rem'
          }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add First Country
        </button>
      </div>
    </div>
  );
};

const CountryDetails = ({ country, onEditCountry, onDeleteCountry }) => {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '1rem',
      border: '1px solid #e5e7eb',
      padding: '2rem'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '2rem'
      }}>
        <div>
          <h2 style={{
            fontSize: '1.875rem',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '0.5rem'
          }}>
            {country.name}
          </h2>
          <p style={{
            color: '#6b7280',
            fontSize: '1rem'
          }}>
            {country.continent} • Tel: {country.telcode}
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button
            onClick={() => onEditCountry(country)}
            style={{
              backgroundColor: '#4f46e5',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              border: 'none',
              fontSize: '0.875rem',
              fontWeight: '500',
              cursor: 'pointer'
            }}
          >
            Edit
          </button>
          <button
            onClick={() => onDeleteCountry(country)}
            style={{
              backgroundColor: '#dc2626',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              border: 'none',
              fontSize: '0.875rem',
              fontWeight: '500',
              cursor: 'pointer'
            }}
          >
            Delete
          </button>
        </div>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
        marginBottom: '2rem'
      }}>
        <div style={{
          backgroundColor: '#f9fafb',
          padding: '1rem',
          borderRadius: '0.5rem'
        }}>
          <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.25rem' }}>Latitude</div>
          <div style={{ fontWeight: '600', color: '#1f2937' }}>{country.centerLat}</div>
        </div>
        <div style={{
          backgroundColor: '#f9fafb',
          padding: '1rem',
          borderRadius: '0.5rem'
        }}>
          <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.25rem' }}>Longitude</div>
          <div style={{ fontWeight: '600', color: '#1f2937' }}>{country.centerLongitude}</div>
        </div>
      </div>
      
      <div style={{
        backgroundColor: '#f9fafb',
        padding: '1.5rem',
        borderRadius: '0.5rem'
      }}>
        <h3 style={{
          fontSize: '1.125rem',
          fontWeight: '600',
          color: '#1f2937',
          marginBottom: '1rem'
        }}>
          Quick Actions
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem'
        }}>
          <Link
            href={`/reference/countries/${country.id}`}
            style={{
              display: 'block',
              backgroundColor: 'white',
              padding: '1rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              border: '1px solid #e5e7eb',
              transition: 'all 0.2s ease'
            }}
          >
            <div style={{ fontWeight: '500', color: '#1f2937', marginBottom: '0.25rem' }}>View Details</div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>See institutions, resources & more</div>
          </Link>
          <div style={{
            backgroundColor: 'white',
            padding: '1rem',
            borderRadius: '0.5rem',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ fontWeight: '500', color: '#1f2937', marginBottom: '0.25rem' }}>Institutions</div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>0 registered</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CountriesPage() {
  const [countries, setCountries] = useState([]);
  const [activeCountry, setActiveCountry] = useState(null);

  // Load countries from localStorage on component mount
  useEffect(() => {
    const savedCountries = JSON.parse(localStorage.getItem('countries') || '[]');
    setCountries(savedCountries);
    if (savedCountries.length > 0) {
      setActiveCountry(savedCountries[0]);
    }
  }, []);

  const handleCreateCountry = () => {
    window.location.href = '/reference/countries/create';
  };

  const handleEditCountry = (country) => {
    window.location.href = `/reference/countries/${country.id}/edit`;
  };

  const handleDeleteCountry = (country) => {
    if (confirm(`Are you sure you want to delete ${country.name}?`)) {
      const updatedCountries = countries.filter(c => c.id !== country.id);
      setCountries(updatedCountries);
      localStorage.setItem('countries', JSON.stringify(updatedCountries));
      if (activeCountry?.id === country.id) {
        setActiveCountry(updatedCountries.length > 0 ? updatedCountries[0] : null);
      }
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
    }}>
      <Sidebar activeItem="countries" />
      
      <div style={{
        marginLeft: '280px',
        padding: '2rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem'
          }}>
            <div>
              <h1 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#1f2937',
                margin: '0 0 0.5rem 0'
              }}>
                Reference → Countries
              </h1>
              <p style={{
                color: '#6b7280',
                margin: 0
              }}>
                Manage country references and institutional data
              </p>
            </div>
            <button
              onClick={handleCreateCountry}
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '0.875rem 1.75rem',
                borderRadius: '12px',
                border: 'none',
                fontSize: '0.875rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
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
              <svg style={{
                width: '1rem',
                height: '1rem',
                marginRight: '0.5rem'
              }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add Country
            </button>
          </div>

          {/* Countries List */}
          {countries.length === 0 ? (
            <EmptyState onCreateCountry={handleCreateCountry} />
          ) : (
            <div style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              border: '1px solid #e5e7eb',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
              backdropFilter: 'blur(20px)'
            }}>
              <div style={{
                padding: '2rem',
                borderBottom: '1px solid #e5e7eb',
                background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: '#1f2937',
                  margin: 0,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <svg style={{ width: '24px', height: '24px', color: '#667eea' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Countries ({countries.length})
                </h3>
              </div>
              
              <div style={{ padding: '0' }}>
                {countries.map((country, index) => (
                  <div
                    key={country.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '2rem',
                      borderBottom: index < countries.length - 1 ? '1px solid #f3f4f6' : 'none',
                      transition: 'all 0.3s ease',
                      position: 'relative'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = '#f8fafc';
                      e.currentTarget.style.transform = 'translateX(4px)';
                      e.currentTarget.style.borderLeft = '4px solid #667eea';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.borderLeft = 'none';
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        marginBottom: '0.5rem'
                      }}>
                        <h4 style={{
                          fontSize: '1.125rem',
                          fontWeight: '600',
                          color: '#1f2937',
                          margin: 0
                        }}>
                          {country.name}
                        </h4>
                        <span style={{
                          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                          color: 'white',
                          padding: '0.375rem 1rem',
                          borderRadius: '20px',
                          fontSize: '0.75rem',
                          fontWeight: '600',
                          boxShadow: '0 2px 8px rgba(16, 185, 129, 0.3)',
                          border: '1px solid rgba(255, 255, 255, 0.2)'
                        }}>
                          Active
                        </span>
                      </div>
                      <div style={{
                        display: 'flex',
                        gap: '2rem',
                        fontSize: '0.875rem',
                        color: '#6b7280'
                      }}>
                        <span><strong>Continent:</strong> {country.continent}</span>
                        <span><strong>Tel Code:</strong> {country.telcode}</span>
                        <span><strong>Coordinates:</strong> {country.centerLat}, {country.centerLongitude}</span>
                      </div>
                    </div>
                    
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      <Link
                        href={`/reference/countries/${country.id}`}
                        style={{
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          color: 'white',
                          padding: '0.625rem 1.25rem',
                          borderRadius: '10px',
                          textDecoration: 'none',
                          fontSize: '0.875rem',
                          fontWeight: '600',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 3px 12px rgba(102, 126, 234, 0.3)',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                        onMouseOver={(e) => {
                          e.target.style.transform = 'translateY(-1px)';
                          e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = '0 3px 12px rgba(102, 126, 234, 0.3)';
                        }}
                      >
                        View
                      </Link>
                      <button
                        onClick={() => handleEditCountry(country)}
                        style={{
                          background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)',
                          color: 'white',
                          padding: '0.625rem 1.25rem',
                          borderRadius: '10px',
                          border: 'none',
                          fontSize: '0.875rem',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 3px 12px rgba(107, 114, 128, 0.3)',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                        onMouseOver={(e) => {
                          e.target.style.transform = 'translateY(-1px)';
                          e.target.style.boxShadow = '0 6px 20px rgba(107, 114, 128, 0.4)';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = '0 3px 12px rgba(107, 114, 128, 0.3)';
                        }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteCountry(country)}
                        style={{
                          background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
                          color: 'white',
                          padding: '0.625rem 1.25rem',
                          borderRadius: '10px',
                          border: 'none',
                          fontSize: '0.875rem',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 3px 12px rgba(220, 38, 38, 0.3)',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                        onMouseOver={(e) => {
                          e.target.style.transform = 'translateY(-1px)';
                          e.target.style.boxShadow = '0 6px 20px rgba(220, 38, 38, 0.4)';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = '0 3px 12px rgba(220, 38, 38, 0.3)';
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
