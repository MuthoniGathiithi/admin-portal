'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Sidebar from '../../../../components/Sidebar';

export default function CreateCountryPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    flagsvg: '',
    continent: '',
    telcode: '',
    centerLat: '',
    centerLongitude: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Country data database with coordinates, continent, and tel codes
  const countryData = {
    // North America
    'canada': { lat: 56.130366, lng: -106.346771, continent: 'North America', telcode: '+1' },
    'united states': { lat: 37.09024, lng: -95.712891, continent: 'North America', telcode: '+1' },
    'usa': { lat: 37.09024, lng: -95.712891, continent: 'North America', telcode: '+1' },
    'mexico': { lat: 23.634501, lng: -102.552784, continent: 'North America', telcode: '+52' },
    
    // South America
    'brazil': { lat: -14.235004, lng: -51.92528, continent: 'South America', telcode: '+55' },
    'argentina': { lat: -38.416097, lng: -63.616672, continent: 'South America', telcode: '+54' },
    'chile': { lat: -35.675147, lng: -71.542969, continent: 'South America', telcode: '+56' },
    
    // Europe
    'united kingdom': { lat: 55.378051, lng: -3.435973, continent: 'Europe', telcode: '+44' },
    'uk': { lat: 55.378051, lng: -3.435973, continent: 'Europe', telcode: '+44' },
    'france': { lat: 46.227638, lng: 2.213749, continent: 'Europe', telcode: '+33' },
    'germany': { lat: 51.165691, lng: 10.451526, continent: 'Europe', telcode: '+49' },
    'italy': { lat: 41.87194, lng: 12.56738, continent: 'Europe', telcode: '+39' },
    'spain': { lat: 40.463667, lng: -3.74922, continent: 'Europe', telcode: '+34' },
    
    // Asia
    'china': { lat: 35.86166, lng: 104.195397, continent: 'Asia', telcode: '+86' },
    'india': { lat: 20.593684, lng: 78.96288, continent: 'Asia', telcode: '+91' },
    'japan': { lat: 36.204824, lng: 138.252924, continent: 'Asia', telcode: '+81' },
    
    // Oceania
    'australia': { lat: -25.274398, lng: 133.775136, continent: 'Oceania', telcode: '+61' },
    'new zealand': { lat: -40.900557, lng: 174.885971, continent: 'Oceania', telcode: '+64' },
    
    // Africa
    'kenya': { lat: -1.286389, lng: 36.817223, continent: 'Africa', telcode: '+254' },
    'nigeria': { lat: 9.081999, lng: 8.675277, continent: 'Africa', telcode: '+234' },
    'south africa': { lat: -30.559482, lng: 22.937506, continent: 'Africa', telcode: '+27' },
    'egypt': { lat: 26.820553, lng: 30.802498, continent: 'Africa', telcode: '+20' }
  };

  // Auto-fill coordinates, continent, and tel code when country name changes
  useEffect(() => {
    if (formData.name) {
      const countryKey = formData.name.toLowerCase().trim();
      const data = countryData[countryKey];
      if (data) {
        setFormData(prev => ({
          ...prev,
          centerLat: data.lat.toString(),
          centerLongitude: data.lng.toString(),
          continent: data.continent,
          telcode: data.telcode
        }));
      }
    }
  }, [formData.name]);

  // Auto-hide success message after 5 seconds
  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.continent || !formData.telcode || !formData.centerLat || !formData.centerLongitude) {
      alert('Please fill in all required fields');
      return;
    }

    // Check for duplicate country names
    const existingCountries = JSON.parse(localStorage.getItem('countries') || '[]');
    const duplicateCountry = existingCountries.find(
      country => country.name.toLowerCase().trim() === formData.name.toLowerCase().trim()
    );
    
    if (duplicateCountry) {
      alert('Country already exists. Please choose a different name.');
      return;
    }

    // Create country object
    const newCountry = {
      id: Date.now().toString(),
      ...formData
    };

    // Save to localStorage
    existingCountries.push(newCountry);
    localStorage.setItem('countries', JSON.stringify(existingCountries));

    // Show success message
    setSuccessMessage(`Country '${formData.name}' has been added successfully!`);
    setShowSuccess(true);

    // Reset form
    setFormData({
      name: '',
      flagsvg: '',
      continent: '',
      telcode: '',
      centerLat: '',
      centerLongitude: ''
    });

    // Navigate after a brief delay to show success message
    setTimeout(() => {
      window.location.href = `/reference/countries/${newCountry.id}`;
    }, 2000);
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
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* Back Button */}
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
              marginBottom: '2rem',
              padding: '0.75rem 1.5rem',
              borderRadius: '12px',
              border: '1px solid rgba(102, 126, 234, 0.2)',
              backgroundColor: 'white',
              boxShadow: '0 2px 8px rgba(102, 126, 234, 0.1)',
              transition: 'all 0.3s ease'
            }}
          >
            <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Countries
          </Link>

          {/* Success Message */}
          {showSuccess && (
            <div style={{
              backgroundColor: '#10b981',
              color: 'white',
              padding: '1rem 1.5rem',
              borderRadius: '12px',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)'
            }}>
              <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span style={{ fontWeight: '600' }}>{successMessage}</span>
            </div>
          )}

          {/* Header */}
          <div style={{ marginBottom: '2rem' }}>
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              color: '#1f2937',
              margin: 0,
              letterSpacing: '-0.025em'
            }}>
              Add New Country
            </h1>
            <p style={{
              fontSize: '1rem',
              color: '#6b7280',
              margin: '0.5rem 0 0 0',
              fontWeight: '400'
            }}>
              Register a new educational system in the platform
            </p>
          </div>

          {/* Form */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '20px',
            padding: '3rem',
            border: '1px solid #e5e7eb',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
            backdropFilter: 'blur(20px)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)'
            }}></div>
            
            <form onSubmit={handleSubmit}>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '2rem'
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
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '12px',
                      fontSize: '0.875rem',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      backgroundColor: '#fafbfc'
                    }}
                    placeholder="Enter country name (e.g., Canada, USA)"
                  />
                </div>

                {/* Flag SVG */}
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    Flag SVG *
                  </label>
                  <input
                    type="text"
                    name="flagsvg"
                    value={formData.flagsvg}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '12px',
                      fontSize: '0.875rem',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      backgroundColor: '#fafbfc'
                    }}
                    placeholder="SVG code or URL"
                  />
                </div>

                {/* Continent */}
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    Continent *
                  </label>
                  <select
                    name="continent"
                    value={formData.continent}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '12px',
                      fontSize: '0.875rem',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      backgroundColor: '#fafbfc'
                    }}
                  >
                    <option value="">Select continent</option>
                    <option value="Africa">Africa</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="North America">North America</option>
                    <option value="South America">South America</option>
                    <option value="Oceania">Oceania</option>
                  </select>
                </div>

                {/* Tel Code */}
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    Tel Code *
                  </label>
                  <input
                    type="text"
                    name="telcode"
                    value={formData.telcode}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '12px',
                      fontSize: '0.875rem',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      backgroundColor: '#fafbfc'
                    }}
                    placeholder="e.g., +1, +44"
                  />
                </div>

                {/* Center Latitude */}
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    Center Latitude *
                  </label>
                  <input
                    type="number"
                    name="centerLat"
                    value={formData.centerLat}
                    onChange={handleInputChange}
                    required
                    step="any"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '12px',
                      fontSize: '0.875rem',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      backgroundColor: '#fafbfc'
                    }}
                    placeholder="e.g., 56.130366"
                  />
                </div>

                {/* Center Longitude */}
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    Center Longitude *
                  </label>
                  <input
                    type="number"
                    name="centerLongitude"
                    value={formData.centerLongitude}
                    onChange={handleInputChange}
                    required
                    step="any"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '12px',
                      fontSize: '0.875rem',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      backgroundColor: '#fafbfc'
                    }}
                    placeholder="e.g., -106.346771"
                  />
                </div>
              </div>

              {/* Submit Buttons */}
              <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '1rem',
                marginTop: '3rem',
                paddingTop: '2rem',
                borderTop: '1px solid #e5e7eb'
              }}>
                <Link
                  href="/reference/countries"
                  style={{
                    padding: '1rem 2rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    color: '#6b7280',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    backgroundColor: 'white',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  style={{
                    padding: '1.25rem 3rem',
                    background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '14px',
                    fontSize: '1rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 25px rgba(30, 64, 175, 0.4)'
                  }}
                >
                  Add Country
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
