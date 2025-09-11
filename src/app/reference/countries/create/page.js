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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Get existing countries
    const existingCountries = JSON.parse(localStorage.getItem('countries') || '[]');
    
    // Create new country with ID
    const newCountry = {
      ...formData,
      id: Date.now() // Simple ID generation
    };

    // Save to localStorage
    const updatedCountries = [...existingCountries, newCountry];
    localStorage.setItem('countries', JSON.stringify(updatedCountries));

    // Simulate API call delay
    setTimeout(() => {
      setIsSubmitting(false);
      router.push('/reference/countries');
    }, 500);
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });

    // Auto-fill country data when name is entered
    if (name === 'name' && value.length > 2) {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${value}?fullText=true`);
        if (response.ok) {
          const [countryData] = await response.json();
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
    }
  };

  return (
    <Layout breadcrumbs={['Reference', 'Countries', 'Create']}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 'var(--space-6)' }}>
          <h1 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: 'var(--gray-900)',
            marginBottom: 'var(--space-2)'
          }}>
            Add New Country
          </h1>
          <p style={{
            color: 'var(--gray-600)',
            margin: 0
          }}>
            Enter the country name and other details will auto-fill
          </p>
        </div>

        {/* Form */}
        <div className="card">
          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-4)'
          }}>
            <div>
              <label style={{
                display: 'block',
                marginBottom: 'var(--space-2)',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: 'var(--gray-700)'
              }}>
                Country Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input"
                placeholder="Enter country name"
                required
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: 'var(--space-2)',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: 'var(--gray-700)'
              }}>
                Flag SVG URL *
              </label>
              <input
                type="url"
                name="flagSvg"
                value={formData.flagSvg}
                onChange={handleChange}
                className="input"
                placeholder="https://flagcdn.com/w320/ke.png"
                required
              />
              {formData.flagSvg && (
                <div style={{ marginTop: 'var(--space-2)' }}>
                  <img 
                    src={formData.flagSvg} 
                    alt="Flag preview" 
                    style={{ 
                      width: '60px', 
                      height: '40px', 
                      objectFit: 'cover', 
                      borderRadius: '4px',
                      border: '1px solid var(--gray-200)',
                      display: 'block'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              )}
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: 'var(--space-2)',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: 'var(--gray-700)'
              }}>
                Continent *
              </label>
              <input
                type="text"
                name="continent"
                value={formData.continent}
                onChange={handleChange}
                className="input"
                placeholder="Africa"
                required
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: 'var(--space-2)',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: 'var(--gray-700)'
              }}>
                Telephone Code *
              </label>
              <input
                type="text"
                name="telCode"
                value={formData.telCode}
                onChange={handleChange}
                className="input"
                placeholder="+254"
                required
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: 'var(--space-2)',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: 'var(--gray-700)'
              }}>
                Center Latitude *
              </label>
              <input
                type="number"
                step="any"
                name="centerLatitude"
                value={formData.centerLatitude}
                onChange={handleChange}
                className="input"
                placeholder="-1.286389"
                required
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: 'var(--space-2)',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: 'var(--gray-700)'
              }}>
                Center Longitude *
              </label>
              <input
                type="number"
                step="any"
                name="centerLongitude"
                value={formData.centerLongitude}
                onChange={handleChange}
                className="input"
                placeholder="36.817223"
                required
              />
            </div>

            {/* Form Actions */}
            <div style={{
              display: 'flex',
              gap: 'var(--space-3)',
              marginTop: 'var(--space-4)',
              paddingTop: 'var(--space-4)',
              borderTop: '1px solid var(--gray-200)'
            }}>
              <button
                type="button"
                onClick={() => router.push('/reference/countries')}
                className="btn btn-secondary"
                style={{ flex: 1 }}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
                style={{ flex: 1 }}
              >
                {isSubmitting ? 'Saving...' : 'Save Country'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
