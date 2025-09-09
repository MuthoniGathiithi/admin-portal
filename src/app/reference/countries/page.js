'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Sidebar from '../../../components/Sidebar';
import Breadcrumb from '../../../components/Breadcrumb';
import LoadingSpinner from '../../../components/LoadingSpinner';

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
            background: '#1e40af',
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
            boxShadow: '0 4px 15px rgba(30, 64, 175, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(30, 64, 175, 0.4)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(30, 64, 175, 0.3)';
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
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterContinent, setFilterContinent] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  // Load countries from localStorage on component mount
  useEffect(() => {
    const loadCountries = async () => {
      setIsLoading(true);
      // Simulate loading delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const savedCountries = JSON.parse(localStorage.getItem('countries') || '[]');
      setCountries(savedCountries);
      if (savedCountries.length > 0) {
        setActiveCountry(savedCountries[0]);
      }
      setIsLoading(false);
    };
    
    loadCountries();
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

  // Filter countries based on search, continent, and status
  const filteredCountries = countries.filter(country => {
    const matchesSearch = country.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesContinent = filterContinent === 'all' || country.continent === filterContinent;
    const matchesStatus = filterStatus === 'all' || 
      (filterStatus === 'active' && country.status !== 'inactive') ||
      (filterStatus === 'inactive' && country.status === 'inactive');
    return matchesSearch && matchesContinent && matchesStatus;
  });

  // Clear all filters function
  const clearFilters = () => {
    setSearchTerm('');
    setFilterContinent('all');
    setFilterStatus('all');
  };

  // Check if any filters are active
  const hasActiveFilters = searchTerm !== '' || filterContinent !== 'all' || filterStatus !== 'all';

  const continents = [...new Set(countries.map(c => c.continent))].sort();

  if (isLoading) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
      }}>
        <Sidebar activeItem="countries" />
        <div style={{
          marginLeft: '280px',
          padding: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <LoadingSpinner size="xl" />
            <p style={{ color: '#6b7280', fontSize: '1rem' }}>Loading countries...</p>
          </div>
        </div>
      </div>
    );
  }

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
          {/* Breadcrumb Navigation */}
          <Breadcrumb items={[
            { label: 'Dashboard', href: '/dashboard' },
            { label: 'Reference', href: '/reference' },
            { label: 'Countries' }
          ]} />
          
          {/* Enhanced Search and Filter Bar */}
          {countries.length > 0 && (
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '16px',
              marginBottom: '2rem',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
                flexWrap: 'wrap'
              }}>
                {/* Enhanced Search Input */}
                <div style={{ position: 'relative', flex: '1', minWidth: '300px' }}>
                  <input
                    type="text"
                    placeholder="Search countries by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '1rem 1rem 1rem 3rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '12px',
                      fontSize: '0.875rem',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      backgroundColor: '#fafbfc'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#667eea';
                      e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                      e.target.style.backgroundColor = 'white';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e5e7eb';
                      e.target.style.boxShadow = 'none';
                      e.target.style.backgroundColor = '#fafbfc';
                    }}
                  />
                  <svg style={{
                    position: 'absolute',
                    left: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '20px',
                    height: '20px',
                    color: '#9ca3af'
                  }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                
                {/* Filter Controls */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  {/* Continent Filter */}
                  <div style={{ position: 'relative' }}>
                    <select
                      value={filterContinent}
                      onChange={(e) => setFilterContinent(e.target.value)}
                      style={{
                        padding: '1rem 2.5rem 1rem 1rem',
                        border: '2px solid #e5e7eb',
                        borderRadius: '12px',
                        fontSize: '0.875rem',
                        outline: 'none',
                        backgroundColor: '#fafbfc',
                        cursor: 'pointer',
                        appearance: 'none',
                        minWidth: '150px'
                      }}
                    >
                      <option value="all">All Continents</option>
                      {continents.map(continent => (
                        <option key={continent} value={continent}>{continent}</option>
                      ))}
                    </select>
                    <svg style={{
                      position: 'absolute',
                      right: '0.75rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '16px',
                      height: '16px',
                      color: '#9ca3af',
                      pointerEvents: 'none'
                    }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 10l5 5 5-5z"/>
                    </svg>
                  </div>

                  {/* Status Filter */}
                  <div style={{ position: 'relative' }}>
                    <select
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value)}
                      style={{
                        padding: '1rem 2.5rem 1rem 1rem',
                        border: '2px solid #e5e7eb',
                        borderRadius: '12px',
                        fontSize: '0.875rem',
                        outline: 'none',
                        backgroundColor: '#fafbfc',
                        cursor: 'pointer',
                        appearance: 'none',
                        minWidth: '120px'
                      }}
                    >
                      <option value="all">All Status</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                    <svg style={{
                      position: 'absolute',
                      right: '0.75rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '16px',
                      height: '16px',
                      color: '#9ca3af',
                      pointerEvents: 'none'
                    }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 10l5 5 5-5z"/>
                    </svg>
                  </div>

                  {/* Clear Filters Button */}
                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      style={{
                        padding: '1rem 1.5rem',
                        border: '2px solid #e5e7eb',
                        borderRadius: '12px',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        backgroundColor: 'white',
                        color: '#6b7280',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.borderColor = '#dc2626';
                        e.target.style.color = '#dc2626';
                        e.target.style.backgroundColor = '#fef2f2';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.borderColor = '#e5e7eb';
                        e.target.style.color = '#6b7280';
                        e.target.style.backgroundColor = 'white';
                      }}
                    >
                      <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Clear
                    </button>
                  )}
                </div>
                
                {/* Results Count */}
                <div style={{
                  fontSize: '0.875rem',
                  color: '#6b7280',
                  fontWeight: '600',
                  padding: '1rem 1.5rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '12px',
                  border: '1px solid #e5e7eb'
                }}>
                  {filteredCountries.length} of {countries.length} countries
                </div>
              </div>
            </div>
          )}
          
          {/* Enhanced Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '3rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid #e5e7eb'
          }}>
            <div>
              <h1 style={{
                fontSize: '2.5rem',
                fontWeight: '800',
                color: '#1f2937',
                margin: '0 0 0.75rem 0',
                letterSpacing: '-0.025em'
              }}>
                Countries
              </h1>
              <p style={{
                color: '#6b7280',
                margin: 0,
                fontSize: '1.125rem'
              }}>
                Manage country references and institutional data
              </p>
            </div>
            <button
              onClick={handleCreateCountry}
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '1.25rem 2.5rem',
                borderRadius: '16px',
                border: 'none',
                fontSize: '1rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(102, 126, 234, 0.5)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)';
              }}
            >
              <svg style={{
                width: '20px',
                height: '20px'
              }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add Country
            </button>
          </div>

          {/* Countries List */}
          {countries.length === 0 ? (
            <EmptyState onCreateCountry={handleCreateCountry} />
          ) : filteredCountries.length === 0 ? (
            <div style={{
              backgroundColor: 'white',
              padding: '3rem',
              borderRadius: '16px',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#f3f4f6',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem'
              }}>
                <svg style={{ width: '40px', height: '40px', color: '#9ca3af' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '0.5rem'
              }}>No countries found</h3>
              <p style={{
                color: '#6b7280',
                marginBottom: '1.5rem'
              }}>Try adjusting your search or filter criteria</p>
              <button
                onClick={clearFilters}
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
                  gap: '0.5rem'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-1px)';
                  e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Clear Filters
              </button>
            </div>
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
                  <svg style={{ width: '24px', height: '24px', color: '#667eea' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Countries
                </h3>
              </div>
              
              <div style={{ padding: '1.5rem' }}>
                {filteredCountries.map((country, index) => (
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
                          background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                          color: 'white',
                          padding: '0.75rem 1.5rem',
                          borderRadius: '12px',
                          textDecoration: 'none',
                          fontSize: '0.875rem',
                          fontWeight: '600',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
                          border: '1px solid rgba(255, 255, 255, 0.2)'
                        }}
                        onMouseOver={(e) => {
                          e.target.style.transform = 'translateY(-2px)';
                          e.target.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.4)';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.3)';
                        }}
                      >
                        <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View
                      </Link>
                      <button
                        onClick={() => handleEditCountry(country)}
                        style={{
                          background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                          color: 'white',
                          padding: '0.75rem 1.5rem',
                          borderRadius: '12px',
                          border: 'none',
                          fontSize: '0.875rem',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                        onMouseOver={(e) => {
                          e.target.style.transform = 'translateY(-2px)';
                          e.target.style.boxShadow = '0 8px 25px rgba(139, 92, 246, 0.4)';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = '0 4px 15px rgba(139, 92, 246, 0.3)';
                        }}
                      >
                        <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteCountry(country)}
                        style={{
                          background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                          color: 'white',
                          padding: '0.75rem 1.5rem',
                          borderRadius: '12px',
                          border: 'none',
                          fontSize: '0.875rem',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 4px 15px rgba(239, 68, 68, 0.3)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                        onMouseOver={(e) => {
                          e.target.style.transform = 'translateY(-2px)';
                          e.target.style.boxShadow = '0 8px 25px rgba(239, 68, 68, 0.4)';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = '0 4px 15px rgba(239, 68, 68, 0.3)';
                        }}
                      >
                        <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
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
