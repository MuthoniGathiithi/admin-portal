'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Layout from '../../../../../components/Layout';

export default function EditCountryPage() {
  const router = useRouter();
  const params = useParams();
  const [formData, setFormData] = useState({
    name: '',
    flagSvg: '',
    continent: '',
    telCode: '',
    centerLatitude: '',
    centerLongitude: ''
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const countries = JSON.parse(localStorage.getItem('countries') || '[]');
    const foundCountry = countries.find(c => c.id === parseInt(params.id));
    
    if (foundCountry) {
      setFormData(foundCountry);
    } else {
      router.push('/reference/countries');
    }
    setIsLoading(false);
  }, [params.id, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Get existing countries
    const countries = JSON.parse(localStorage.getItem('countries') || '[]');
    
    // Update the country
    const updatedCountries = countries.map(country => 
      country.id === parseInt(params.id) ? { ...formData, id: parseInt(params.id) } : country
    );

    // Save to localStorage
    localStorage.setItem('countries', JSON.stringify(updatedCountries));

    // Simulate API call delay
    setTimeout(() => {
      setIsSubmitting(false);
      router.push(`/reference/countries/${params.id}`);
    }, 500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isLoading) {
    return (
      <Layout breadcrumbs={['Reference', 'Countries', 'Loading...', 'Edit']}>
        <div style={{ textAlign: 'center', padding: 'var(--space-8)' }}>
          <p>Loading country details...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout breadcrumbs={['Reference', 'Countries', formData.name, 'Edit']}>
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
            Edit Country
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: '#6b7280',
            margin: 0
          }}>
            Update the details for <strong style={{ color: '#374151' }}>{formData.name}</strong>
          </p>
        </div>

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
                  }}>Current Flag:</p>
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
                onClick={() => router.push(`/reference/countries/${params.id}`)}
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
                {isSubmitting ? 'Updating...' : 'Update Country'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
