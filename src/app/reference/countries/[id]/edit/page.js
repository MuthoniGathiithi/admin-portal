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
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 'var(--space-6)' }}>
          <h1 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: 'var(--gray-900)',
            marginBottom: 'var(--space-2)'
          }}>
            Edit Country
          </h1>
          <p style={{
            color: 'var(--gray-600)',
            margin: 0
          }}>
            Update the details for {formData.name}
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
                    style={{ width: '60px', height: '40px', objectFit: 'cover', borderRadius: '4px' }}
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
                onClick={() => router.push(`/reference/countries/${params.id}`)}
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
                {isSubmitting ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
