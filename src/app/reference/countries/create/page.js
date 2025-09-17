'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '../../../../components/Layout';

export default function CreateCountryPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    flagSvg: '',
    continent: '',
    telCode: '',
    centerLatitude: '',
    centerLongitude: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Get existing countries
      const existingCountries = JSON.parse(localStorage.getItem('countries') || '[]');
      
      // Check if country already exists
      const existingCountry = existingCountries.find(c => 
        c.name.toLowerCase() === formData.name.toLowerCase()
      );
      
      if (existingCountry) {
        throw new Error('A country with this name already exists');
      }
      
      // Create new country with ID
      const newCountry = {
        ...formData,
        id: Date.now() // Simple ID generation
      };

      // Save to localStorage
      const updatedCountries = [...existingCountries, newCountry];
      localStorage.setItem('countries', JSON.stringify(updatedCountries));

      // Show success message
      setShowSuccess(true);
      
      // Redirect after showing success
      setTimeout(() => {
        router.push('/reference/countries');
      }, 1500);
    } catch (err) {
      setError(err.message || 'Failed to create country. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });

    // Auto-fill country data when name is entered
    if (name === 'name' && value.length > 2) {
      // Debounce the API call
      const timeoutId = setTimeout(async () => {
        try {
          const response = await fetch(`https://restcountries.com/v3.1/name/${value}?fullText=false`);
          if (response.ok) {
            const countryDataArray = await response.json();
            // Find exact match or closest match
            const countryData = countryDataArray.find(country => 
              country.name?.common?.toLowerCase() === value.toLowerCase()
            ) || countryDataArray[0];
            
            if (countryData) {
              // Use PNG flag for better compatibility, fallback to SVG
              const flagUrl = countryData.flags?.png || countryData.flags?.svg || '';
              const telCode = countryData.idd?.root ? 
                countryData.idd.root + (countryData.idd.suffixes?.[0] || '') : '';
              
              setFormData(prev => ({
                ...prev,
                name: countryData.name?.common || value,
                flagSvg: flagUrl,
                continent: countryData.continents?.[0] || '',
                telCode: telCode,
                centerLatitude: countryData.latlng?.[0]?.toString() || '',
                centerLongitude: countryData.latlng?.[1]?.toString() || ''
              }));
            }
          }
        } catch (error) {
          console.log('Could not auto-fill country data:', error);
          // Keep the manually entered name even if API fails
          setFormData(prev => ({
            ...prev,
            name: value
          }));
        }
      }, 500); // 500ms debounce
      
      return () => clearTimeout(timeoutId);
    }
  };

  return (
    <Layout breadcrumbs={['Reference', 'Countries', 'Create']}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{
            fontSize: '2.25rem',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '0.5rem',
            letterSpacing: '-0.025em'
          }}>
            Add New Country
          </h1>
        </div>

        {/* Success Toast */}
        {showSuccess && (
          <div style={{
            position: 'fixed',
            top: '2rem',
            right: '2rem',
            background: '#10b981',
            color: 'white',
            padding: '1rem 1.5rem',
            borderRadius: '8px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            animation: 'slideIn 0.3s ease-out'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            Country added successfully!
          </div>
        )}

        {/* Error Alert */}
        {error && (
          <div style={{
            background: '#fef2f2',
            border: '1px solid #fecaca',
            borderRadius: '8px',
            padding: '1rem',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="15" y1="9" x2="9" y2="15"/>
              <line x1="9" y1="9" x2="15" y2="15"/>
            </svg>
            <span style={{ color: '#dc2626', fontSize: '0.875rem', fontWeight: '500' }}>
              {error}
            </span>
          </div>
        )}

        {/* Form */}
        <div style={{
          background: '#ffffff',
          borderRadius: '8px',
          padding: '2rem',
          border: '1px solid #e1e5e9',
          boxShadow: 'none'
        }}>
          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem'
          }}>
            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.375rem',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#1f2937'
              }}>
                Country Name <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem 0.875rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  background: '#ffffff',
                  transition: 'border-color 0.15s ease',
                  outline: 'none',
                  fontFamily: 'inherit'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#3b82f6';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#d1d5db';
                }}
                placeholder="Your country name..."
                required
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.375rem',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#1f2937'
              }}>
                Flag Image URL <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                type="url"
                name="flagSvg"
                value={formData.flagSvg}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem 0.875rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  background: '#ffffff',
                  transition: 'border-color 0.15s ease',
                  outline: 'none',
                  fontFamily: 'inherit'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#3b82f6';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#d1d5db';
                }}
                placeholder="Flag image URL..."
                required
              />
              {formData.flagSvg && (
                <div style={{ 
                  marginTop: '0.75rem',
                  padding: '0.75rem',
                  background: '#f9fafb',
                  borderRadius: '6px',
                  border: '1px solid #e5e7eb'
                }}>
                  <p style={{
                    fontSize: '0.75rem',
                    color: '#6b7280',
                    margin: '0 0 0.5rem 0'
                  }}>Flag Preview:</p>
                  <img 
                    src={formData.flagSvg} 
                    alt="Flag preview" 
                    style={{ 
                      width: '60px', 
                      height: '40px', 
                      objectFit: 'cover', 
                      borderRadius: '4px',
                      border: '1px solid #e5e7eb',
                      display: 'block'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              )}
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem'
            }}>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.375rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: '#1f2937'
                }}>
                  Continent <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  type="text"
                  name="continent"
                  value={formData.continent}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.875rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '0.875rem',
                    background: '#ffffff',
                    transition: 'border-color 0.15s ease',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#3b82f6';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                  }}
                  placeholder="Continent name..."
                  required
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.375rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: '#1f2937'
                }}>
                  Phone Number <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  type="text"
                  name="telCode"
                  value={formData.telCode}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.875rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '0.875rem',
                    background: '#ffffff',
                    transition: 'border-color 0.15s ease',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#3b82f6';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                  }}
                  placeholder="Type phone number..."
                  required
                />
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem'
            }}>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.375rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: '#1f2937'
                }}>
                  Latitude <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  type="number"
                  step="any"
                  name="centerLatitude"
                  value={formData.centerLatitude}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.875rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '0.875rem',
                    background: '#ffffff',
                    transition: 'border-color 0.15s ease',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#3b82f6';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                  }}
                  placeholder="Latitude..."
                  required
                />
              </div>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.375rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: '#1f2937'
                }}>
                  Longitude <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  type="number"
                  step="any"
                  name="centerLongitude"
                  value={formData.centerLongitude}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.875rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '0.875rem',
                    background: '#ffffff',
                    transition: 'border-color 0.15s ease',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#3b82f6';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                  }}
                  placeholder="Longitude..."
                  required
                />
              </div>
            </div>

            {/* Form Actions */}
            <div style={{
              display: 'flex',
              gap: '0.75rem',
              marginTop: '1.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid #e5e7eb'
            }}>
              <button
                type="button"
                onClick={() => router.push('/reference/countries')}
                style={{
                  flex: 1,
                  padding: '0.75rem 1rem',
                  background: '#ffffff',
                  color: '#6b7280',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  fontFamily: 'inherit'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#f9fafb';
                  e.target.style.borderColor = '#9ca3af';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#ffffff';
                  e.target.style.borderColor = '#d1d5db';
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  flex: 2,
                  padding: '0.75rem 1rem',
                  background: isSubmitting ? '#9ca3af' : 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.15s ease',
                  fontFamily: 'inherit'
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.target.style.background = 'linear-gradient(180deg, #0f172a 0%, #020617 100%)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.target.style.background = 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)';
                  }
                }}
              >
                {isSubmitting ? 'Creating...' : 'Create Country'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
