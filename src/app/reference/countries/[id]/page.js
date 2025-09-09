'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Sidebar from '../../../../components/Sidebar';

export default function CountryViewPage() {
  const params = useParams();
  const countryId = params.id;
  const [country, setCountry] = useState(null);
  const [activeTab, setActiveTab] = useState('curriculars');

  useEffect(() => {
    // Load country data from localStorage
    const countries = JSON.parse(localStorage.getItem('countries') || '[]');
    const foundCountry = countries.find(c => c.id === countryId);
    setCountry(foundCountry);
  }, [countryId]);

  if (!country) {
    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
        <Sidebar activeItem="countries" />
        <div style={{ marginLeft: '280px', padding: '2rem' }}>
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <h2>Country not found</h2>
            <Link href="/reference/countries" style={{ color: '#4f46e5', textDecoration: 'none' }}>
              ← Back to Countries
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'curriculars', label: 'Curriculars' },
    { id: 'institutions', label: 'Institutions' },
    { id: 'resources', label: 'Resources' },
    { id: 'students', label: 'Students' }
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
      <Sidebar activeItem="countries" />
      
      <div style={{ marginLeft: '280px', padding: '2rem' }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <Link 
            href="/reference/countries" 
            style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              color: '#667eea',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              padding: '0.75rem 1.5rem',
              borderRadius: '12px',
              border: '1px solid rgba(102, 126, 234, 0.2)',
              backgroundColor: 'white',
              boxShadow: '0 2px 8px rgba(102, 126, 234, 0.1)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.2)';
              e.currentTarget.style.backgroundColor = '#f8fafc';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(102, 126, 234, 0.1)';
              e.currentTarget.style.backgroundColor = 'white';
            }}
          >
            <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Countries
          </Link>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <h1 style={{ 
              fontSize: '2rem', 
              fontWeight: '700', 
              color: '#1f2937',
              margin: 0 
            }}>
              {country.name}
            </h1>
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
            <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.75rem' }}>
              <Link 
                href={`/reference/countries/${country.id}/edit`}
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
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 3px 12px rgba(102, 126, 234, 0.3)';
                }}
              >
                Edit Country
              </Link>
              <button
                onClick={() => {
                  if (confirm(`Are you sure you want to delete ${country.name}?`)) {
                    const countries = JSON.parse(localStorage.getItem('countries') || '[]');
                    const updatedCountries = countries.filter(c => c.id !== country.id);
                    localStorage.setItem('countries', JSON.stringify(updatedCountries));
                    window.location.href = '/reference/countries';
                  }
                }}
                style={{
                  background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
                  color: 'white',
                  padding: '0.625rem 1.25rem',
                  borderRadius: '10px',
                  border: 'none',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 3px 12px rgba(220, 38, 38, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(220, 38, 38, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 3px 12px rgba(220, 38, 38, 0.3)';
                }}
              >
                Delete Country
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
              backgroundColor: 'white', 
              padding: '1rem', 
              borderRadius: '0.5rem',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.25rem' }}>Continent</div>
              <div style={{ fontWeight: '600', color: '#1f2937' }}>{country.continent}</div>
            </div>
            <div style={{ 
              backgroundColor: 'white', 
              padding: '1rem', 
              borderRadius: '0.5rem',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.25rem' }}>Tel Code</div>
              <div style={{ fontWeight: '600', color: '#1f2937' }}>{country.telcode}</div>
            </div>
            <div style={{ 
              backgroundColor: 'white', 
              padding: '1rem', 
              borderRadius: '0.5rem',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.25rem' }}>Latitude</div>
              <div style={{ fontWeight: '600', color: '#1f2937' }}>{country.centerLat}</div>
            </div>
            <div style={{ 
              backgroundColor: 'white', 
              padding: '1rem', 
              borderRadius: '0.5rem',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.25rem' }}>Longitude</div>
              <div style={{ fontWeight: '600', color: '#1f2937' }}>{country.centerLongitude}</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ 
          borderBottom: '1px solid #e5e7eb',
          marginBottom: '2rem'
        }}>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '1rem 1.5rem',
                  backgroundColor: activeTab === tab.id ? 'rgba(102, 126, 234, 0.1)' : 'transparent',
                  border: 'none',
                  borderRadius: '12px',
                  borderBottom: activeTab === tab.id ? '3px solid #667eea' : '3px solid transparent',
                  color: activeTab === tab.id ? '#667eea' : '#6b7280',
                  fontWeight: activeTab === tab.id ? '700' : '500',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
                onMouseOver={(e) => {
                  if (activeTab !== tab.id) {
                    e.currentTarget.style.backgroundColor = 'rgba(102, 126, 234, 0.05)';
                    e.currentTarget.style.color = '#667eea';
                  }
                }}
                onMouseOut={(e) => {
                  if (activeTab !== tab.id) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#6b7280';
                  }
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          {/* Left Column */}
          <div>
            {activeTab === 'curriculars' && (
              <div style={{ 
                backgroundColor: 'white', 
                padding: '1.5rem', 
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ 
                  fontSize: '1.125rem', 
                  fontWeight: '600', 
                  color: '#1f2937',
                  marginBottom: '1rem'
                }}>
                  Curriculars Overview
                </h3>
                <div style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem' }}>
                  Manage educational curricula and academic programs for {country.name}.
                </div>
                <div style={{ 
                  padding: '2rem', 
                  background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', 
                  borderRadius: '12px',
                  border: '1px solid #e5e7eb',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1rem' }}>No curricula programs created yet</div>
                  <button 
                    onClick={() => alert('Curriculum management coming soon!')}
                    style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '10px',
                    border: 'none',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 3px 12px rgba(102, 126, 234, 0.3)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 3px 12px rgba(102, 126, 234, 0.3)';
                  }}>
                    Add Curriculum
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'institutions' && (
              <div style={{ 
                backgroundColor: 'white', 
                padding: '1.5rem', 
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h3 style={{ 
                    fontSize: '1.125rem', 
                    fontWeight: '600', 
                    color: '#1f2937',
                    margin: 0
                  }}>
                    Institutions
                  </h3>
                  <button style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    padding: '0.75rem 1.25rem',
                    borderRadius: '10px',
                    border: 'none',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 3px 12px rgba(102, 126, 234, 0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 3px 12px rgba(102, 126, 234, 0.3)';
                  }}>
                    Add Institution
                  </button>
                </div>
                <div style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem' }}>
                  Educational institutions registered in {country.name}.
                </div>
                <div style={{ 
                  padding: '2rem', 
                  background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', 
                  borderRadius: '12px',
                  border: '1px solid #e5e7eb',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1rem' }}>No institutions registered yet</div>
                  <button 
                    onClick={() => alert('Institution management coming soon!')}
                    style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '10px',
                    border: 'none',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 3px 12px rgba(102, 126, 234, 0.3)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 3px 12px rgba(102, 126, 234, 0.3)';
                  }}>
                    Add Institution
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'resources' && (
              <div style={{ 
                backgroundColor: 'white', 
                padding: '1.5rem', 
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ 
                  fontSize: '1.125rem', 
                  fontWeight: '600', 
                  color: '#1f2937',
                  marginBottom: '1rem'
                }}>
                  Educational Resources
                </h3>
                <div style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem' }}>
                  Learning materials and resources available in {country.name}.
                </div>
                <div style={{ 
                  padding: '2rem', 
                  background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', 
                  borderRadius: '12px',
                  border: '1px solid #e5e7eb',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1rem' }}>No educational resources added yet</div>
                  <button 
                    onClick={() => alert('Resource management coming soon!')}
                    style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '10px',
                    border: 'none',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 3px 12px rgba(102, 126, 234, 0.3)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 3px 12px rgba(102, 126, 234, 0.3)';
                  }}>
                    Add Resources
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'students' && (
              <div style={{ 
                backgroundColor: 'white', 
                padding: '1.5rem', 
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ 
                  fontSize: '1.125rem', 
                  fontWeight: '600', 
                  color: '#1f2937',
                  marginBottom: '1rem'
                }}>
                  Student Statistics
                </h3>
                <div style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem' }}>
                  Student enrollment and performance data for {country.name}.
                </div>
                <div style={{ 
                  padding: '2rem', 
                  background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', 
                  borderRadius: '12px',
                  border: '1px solid #e5e7eb',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1rem' }}>No students enrolled yet</div>
                  <button 
                    onClick={() => alert('Student management coming soon!')}
                    style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '10px',
                    border: 'none',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 3px 12px rgba(102, 126, 234, 0.3)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 3px 12px rgba(102, 126, 234, 0.3)';
                  }}>
                    Add Students
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Institution Registration */}
            <div style={{
              backgroundColor: 'white', 
              padding: '2rem', 
              borderRadius: '20px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)',
              backdropFilter: 'blur(20px)'
            }}>
              <h3 style={{
                fontSize: '1.125rem', 
                fontWeight: '600', 
                color: '#1f2937',
                marginBottom: '1rem'
              }}>
                Institution Registration
              </h3>
              <div style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem' }}>
                Register new educational institutions in {country.name}.
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <button style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  padding: '1rem 1.25rem',
                  borderRadius: '12px',
                  border: 'none',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  width: '100%',
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
                }}>
                  Add New Institution
                </button>
                <button style={{
                  backgroundColor: '#10b981',
                  color: 'white',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  width: '100%'
                }}>
                  Manage Existing
                </button>
              </div>
            </div>

            {/* AI Assessments */}
            <div style={{ 
              backgroundColor: 'white', 
              padding: '1.5rem', 
              borderRadius: '0.75rem',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{ 
                fontSize: '1.125rem', 
                fontWeight: '600', 
                color: '#1f2937',
                marginBottom: '1rem'
              }}>
                AI Assessments
              </h3>
              <div style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem' }}>
                AI-powered educational assessments and analytics.
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                  <span>Assessment Accuracy</span>
                  <span style={{ fontWeight: '600' }}>0%</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                  <span>Active Assessments</span>
                  <span style={{ fontWeight: '600' }}>0</span>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <button style={{
                  backgroundColor: '#10b981',
                  color: 'white',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  width: '100%'
                }}>
                  View AI Dashboard
                </button>
                <button style={{
                  background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                  color: 'white',
                  padding: '1rem 1.25rem',
                  borderRadius: '12px',
                  border: 'none',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  width: '100%',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(245, 158, 11, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(245, 158, 11, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(245, 158, 11, 0.3)';
                }}>
                  Create Assessment
                </button>
              </div>
            </div>

            {/* Institution Maps - Redesigned */}
            <div style={{ 
              backgroundColor: 'white', 
              padding: '2rem', 
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.5rem'
              }}>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: '700', 
                  color: '#1f2937',
                  margin: 0
                }}>
                  Institution Maps
                </h3>
                <div style={{
                  background: '#1e40af',
                  color: 'white',
                  padding: '0.375rem 0.75rem',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>
                  0 Locations
                </div>
              </div>
              
              {/* Enhanced Map Container */}
              <div style={{ 
                background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', 
                height: '240px', 
                borderRadius: '12px',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '1rem',
                border: '2px dashed #cbd5e1',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Map Icon */}
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#1e40af',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '0.5rem'
                }}>
                  <svg style={{ width: '30px', height: '30px', color: 'white' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div style={{
                  textAlign: 'center'
                }}>
                  <div style={{ 
                    fontSize: '1rem', 
                    fontWeight: '600',
                    color: '#1f2937',
                    marginBottom: '0.25rem'
                  }}>Interactive Map View</div>
                  <div style={{ 
                    fontSize: '0.875rem',
                    color: '#6b7280'
                  }}>Showing institutions in {country.name}</div>
                </div>
              </div>
              
              {/* Action Buttons Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <button style={{
                  background: '#1e40af',
                  color: 'white',
                  padding: '1rem',
                  borderRadius: '12px',
                  border: 'none',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 12px rgba(30, 64, 175, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(30, 64, 175, 0.4)';
                  e.currentTarget.style.backgroundColor = '#1e3a8a';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(30, 64, 175, 0.3)';
                  e.currentTarget.style.backgroundColor = '#1e40af';
                }}>
                  <svg style={{ width: '16px', height: '16px' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  </svg>
                  View Map
                </button>
                <button style={{
                  background: '#374151',
                  color: 'white',
                  padding: '1rem',
                  borderRadius: '12px',
                  border: 'none',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 12px rgba(55, 65, 81, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(55, 65, 81, 0.4)';
                  e.currentTarget.style.backgroundColor = '#1f2937';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(55, 65, 81, 0.3)';
                  e.currentTarget.style.backgroundColor = '#374151';
                }}>
                  <svg style={{ width: '16px', height: '16px' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4v16m8-8H4"/>
                  </svg>
                  Add Location
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
