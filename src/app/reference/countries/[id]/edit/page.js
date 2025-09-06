'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import Sidebar from '../../../../components/Sidebar';

export default function EditCountryPage() {
  const router = useRouter();
  const params = useParams();
  const countryId = params.id;

  const [formData, setFormData] = useState({
    name: '',
    flagsvg: '',
    continent: '',
    telcode: '',
    centerLat: '',
    centerLongitude: ''
  });

  useEffect(() => {
    // Mock data loading based on country ID
    const mockData = {
      malawi: {
        name: 'Malawi',
        flagsvg: '<svg>...</svg>',
        continent: 'Africa',
        telcode: '+265',
        centerLat: '-13.254308',
        centerLongitude: '34.301525'
      },
      kenya: {
        name: 'Kenya',
        flagsvg: '<svg>...</svg>',
        continent: 'Africa',
        telcode: '+254',
        centerLat: '-0.023559',
        centerLongitude: '37.906193'
      }
    };

    const data = mockData[countryId] || {
      name: '',
      flagsvg: '',
      continent: '',
      telcode: '',
      centerLat: '',
      centerLongitude: ''
    };

    setFormData(data);
  }, [countryId]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Saving country data:', formData);
    router.push('/reference/countries');
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8fafc'
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
              gap: '0.5rem',
              color: '#4f46e5',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: '600',
              marginBottom: '2rem',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              border: '1px solid #e5e7eb',
              backgroundColor: 'white'
            }}
          >
            ← Back to Countries
          </Link>

          {/* Header */}
          <div style={{ marginBottom: '2rem' }}>
            <h1 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#1f2937',
              margin: 0
            }}>
              Edit Country
            </h1>
          </div>

          {/* Form */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '1rem',
            padding: '2.5rem',
            border: '1px solid #e5e7eb',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
          }}>
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
                      padding: '0.875rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '0.5rem',
                      fontSize: '0.875rem',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    placeholder="Enter country name"
                    onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
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
                      padding: '0.875rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '0.5rem',
                      fontSize: '0.875rem',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    placeholder="SVG code or URL"
                    onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
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
                      padding: '0.875rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '0.5rem',
                      fontSize: '0.875rem',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                      backgroundColor: 'white'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  >
                    <option value="">Select continent</option>
                    <option value="Africa">Africa</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="North America">North America</option>
                    <option value="South America">South America</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Antarctica">Antarctica</option>
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
                      padding: '0.875rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '0.5rem',
                      fontSize: '0.875rem',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    placeholder="e.g., +265, +254"
                    onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
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
                      padding: '0.875rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '0.5rem',
                      fontSize: '0.875rem',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    placeholder="e.g., -13.254308"
                    onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
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
                      padding: '0.875rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '0.5rem',
                      fontSize: '0.875rem',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    placeholder="e.g., 34.301525"
                    onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
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
                    padding: '0.875rem 2rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '0.5rem',
                    textDecoration: 'none',
                    color: '#374151',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    backgroundColor: 'white',
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.backgroundColor = '#f9fafb';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.borderColor = '#e5e7eb';
                    e.target.style.backgroundColor = 'white';
                  }}
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  style={{
                    padding: '0.875rem 2rem',
                    backgroundColor: '#4f46e5',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#4338ca'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#4f46e5'}
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
