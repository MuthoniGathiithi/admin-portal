'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CreateCountryPage() {
  const [formData, setFormData] = useState({
    name: '',
    code: '',
    currency: '',
    regions: '',
    flagColors: '#000000,#FF0000,#FFFFFF'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      alert('Country created successfully!');
      window.location.href = '/reference/countries';
    }, 1000);
  };

  const handleCancel = () => {
    window.location.href = '/reference/countries';
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f9fafb'
    }}>
      {/* Sidebar */}
      <div style={{
        width: '280px',
        backgroundColor: 'white',
        borderRight: '1px solid #e5e7eb',
        minHeight: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{ padding: '2rem' }}>
          {/* ALAMA Logo */}
          <Link href="/dashboard" style={{ textDecoration: 'none' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '3rem'
            }}>
              <Image
                src="/alama_dark_logo_lt_bnjlIcW.png"
                alt="Alama"
                width={40}
                height={40}
                style={{
                  width: '40px',
                  height: '40px',
                  marginRight: '0.75rem'
                }}
              />
              <span style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#000000'
              }}>
                ALAMA
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{
              fontSize: '0.875rem',
              fontWeight: '600',
              color: '#6b7280',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              margin: '0 0 1rem 0'
            }}>
              Create Country
            </h3>
            <div style={{
              padding: '0.75rem 1rem',
              backgroundColor: '#eff6ff',
              borderRadius: '0.5rem',
              borderLeft: '4px solid #2563eb'
            }}>
              <span style={{
                color: '#2563eb',
                fontWeight: '500'
              }}>
                New Country Form
              </span>
            </div>
          </div>

          {/* Back to Countries */}
          <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
            <Link
              href="/reference/countries"
              style={{
                display: 'flex',
                alignItems: 'center',
                color: '#6b7280',
                textDecoration: 'none',
                fontSize: '0.875rem',
                transition: 'color 0.2s ease-in-out'
              }}
              onMouseOver={(e) => e.target.style.color = '#2563eb'}
              onMouseOut={(e) => e.target.style.color = '#6b7280'}
            >
              <svg style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Countries
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        marginLeft: '280px',
        padding: '2rem'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ marginBottom: '2rem' }}>
            <h1 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#1f2937',
              margin: '0 0 0.5rem 0'
            }}>
              Create New Country
            </h1>
            <p style={{
              color: '#6b7280',
              margin: 0
            }}>
              Add a new country to the reference system with institutional data
            </p>
          </div>

          {/* Form Card */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '1rem',
            border: '1px solid #e5e7eb',
            padding: '2rem'
          }}>
            <form onSubmit={handleSubmit}>
              <div style={{
                display: 'grid',
                gap: '1.5rem'
              }}>
                {/* Country Name */}
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    Country Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter country name"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '0.5rem',
                      fontSize: '0.875rem',
                      transition: 'all 0.2s ease-in-out',
                      outline: 'none'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#2563eb';
                      e.target.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {/* Country Code */}
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    Country Code *
                  </label>
                  <input
                    type="text"
                    name="code"
                    value={formData.code}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., MW, KE, UG"
                    maxLength={3}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '0.5rem',
                      fontSize: '0.875rem',
                      transition: 'all 0.2s ease-in-out',
                      outline: 'none',
                      textTransform: 'uppercase'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#2563eb';
                      e.target.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {/* Currency */}
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    Currency
                  </label>
                  <input
                    type="text"
                    name="currency"
                    value={formData.currency}
                    onChange={handleInputChange}
                    placeholder="e.g., MWK, KES, UGX"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '0.5rem',
                      fontSize: '0.875rem',
                      transition: 'all 0.2s ease-in-out',
                      outline: 'none'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#2563eb';
                      e.target.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {/* Regions */}
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    Regions
                  </label>
                  <textarea
                    name="regions"
                    value={formData.regions}
                    onChange={handleInputChange}
                    placeholder="Enter regions separated by commas (e.g., Northern, Central, Southern)"
                    rows={3}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '0.5rem',
                      fontSize: '0.875rem',
                      transition: 'all 0.2s ease-in-out',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#2563eb';
                      e.target.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {/* Flag Colors */}
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    Flag Colors
                  </label>
                  <input
                    type="text"
                    name="flagColors"
                    value={formData.flagColors}
                    onChange={handleInputChange}
                    placeholder="Enter hex colors separated by commas (e.g., #000000,#FF0000,#FFFFFF)"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '0.5rem',
                      fontSize: '0.875rem',
                      transition: 'all 0.2s ease-in-out',
                      outline: 'none'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#2563eb';
                      e.target.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                  <p style={{
                    fontSize: '0.75rem',
                    color: '#6b7280',
                    margin: '0.5rem 0 0 0'
                  }}>
                    Preview colors will appear here once you enter valid hex codes
                  </p>
                </div>
              </div>

              {/* Form Actions */}
              <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '1rem',
                marginTop: '2rem',
                paddingTop: '2rem',
                borderTop: '1px solid #e5e7eb'
              }}>
                <button
                  type="button"
                  onClick={handleCancel}
                  style={{
                    padding: '0.75rem 1.5rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.5rem',
                    backgroundColor: 'white',
                    color: '#374151',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease-in-out'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#f9fafb'}
                  onMouseOut={(e) => e.target.style.backgroundColor = 'white'}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.code}
                  style={{
                    padding: '0.75rem 1.5rem',
                    border: 'none',
                    borderRadius: '0.5rem',
                    backgroundColor: isSubmitting || !formData.name || !formData.code ? '#9ca3af' : '#2563eb',
                    color: 'white',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    cursor: isSubmitting || !formData.name || !formData.code ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s ease-in-out',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                  onMouseOver={(e) => {
                    if (!isSubmitting && formData.name && formData.code) {
                      e.target.style.backgroundColor = '#1d4ed8';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!isSubmitting && formData.name && formData.code) {
                      e.target.style.backgroundColor = '#2563eb';
                    }
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <svg style={{
                        width: '1rem',
                        height: '1rem',
                        marginRight: '0.5rem',
                        animation: 'spin 1s linear infinite'
                      }} fill="none" viewBox="0 0 24 24">
                        <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating...
                    </>
                  ) : (
                    <>
                      <svg style={{
                        width: '1rem',
                        height: '1rem',
                        marginRight: '0.5rem'
                      }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Create Country
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
