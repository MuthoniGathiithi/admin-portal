'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = ({ countries, activeCountry, setActiveCountry }) => {
  return (
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

        {/* Countries Section */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem'
          }}>
            <h3 style={{
              fontSize: '0.875rem',
              fontWeight: '600',
              color: '#6b7280',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              margin: 0
            }}>
              Countries
            </h3>
            <span style={{
              fontSize: '0.75rem',
              color: '#9ca3af',
              backgroundColor: '#f3f4f6',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.375rem'
            }}>
              {countries.length}
            </span>
          </div>

          {/* Countries List */}
          <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
            {countries.length > 0 ? (
              countries.map((country) => (
                <button
                  key={country.id}
                  onClick={() => setActiveCountry(country)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.5rem',
                    transition: 'all 0.2s ease-in-out',
                    border: 'none',
                    backgroundColor: activeCountry?.id === country.id ? '#eff6ff' : 'transparent',
                    color: activeCountry?.id === country.id ? '#2563eb' : '#374151',
                    borderLeft: activeCountry?.id === country.id ? '4px solid #2563eb' : '4px solid transparent',
                    marginBottom: '0.25rem',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => {
                    if (activeCountry?.id !== country.id) {
                      e.target.style.backgroundColor = '#f9fafb';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (activeCountry?.id !== country.id) {
                      e.target.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{ fontWeight: '500' }}>{country.name}</span>
                    <span style={{
                      fontSize: '0.75rem',
                      color: '#9ca3af'
                    }}>
                      {country.code}
                    </span>
                  </div>
                </button>
              ))
            ) : (
              <div style={{
                textAlign: 'center',
                padding: '2rem 1rem',
                color: '#9ca3af'
              }}>
                <svg style={{
                  width: '3rem',
                  height: '3rem',
                  margin: '0 auto 1rem',
                  color: '#d1d5db'
                }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p style={{
                  fontSize: '0.875rem',
                  margin: 0
                }}>
                  No countries added yet
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Back to Dashboard */}
        <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
          <Link
            href="/dashboard"
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
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

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
      <div style={{ textAlign: 'center', maxWidth: '400px', padding: '2rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <svg style={{
            width: '5rem',
            height: '5rem',
            margin: '0 auto',
            color: '#d1d5db'
          }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          color: '#1f2937',
          marginBottom: '0.5rem'
        }}>
          No Countries Added Yet
        </h2>
        <p style={{
          color: '#6b7280',
          marginBottom: '2rem',
          lineHeight: '1.5'
        }}>
          Get started by adding your first country to the reference system. You can manage country details, institutions, and regional information.
        </p>
        <button
          onClick={onCreateCountry}
          style={{
            backgroundColor: '#2563eb',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            border: 'none',
            fontSize: '0.875rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease-in-out',
            display: 'flex',
            alignItems: 'center',
            margin: '0 auto'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
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
  if (!country) {
    return null;
  }

  const mockData = {
    malawi: {
      name: 'Malawi',
      code: 'MW',
      currency: 'MWK',
      institutions: ['University of Malawi', 'Mzuzu University', 'Lilongwe University'],
      regions: ['Northern', 'Central', 'Southern'],
      flagColors: ['#000000', '#FF0000', '#00FF00']
    },
    kenya: {
      name: 'Kenya',
      code: 'KE',
      currency: 'KES',
      institutions: ['University of Nairobi', 'Kenyatta University', 'Moi University'],
      regions: ['Nairobi', 'Central', 'Coast', 'Eastern', 'North Eastern', 'Nyanza', 'Rift Valley', 'Western'],
      flagColors: ['#000000', '#FF0000', '#FFFFFF', '#00FF00']
    }
  };

  const data = mockData[country.id] || {
    name: country.name,
    code: country.code,
    currency: 'N/A',
    institutions: [],
    regions: [],
    flagColors: ['#000000', '#FF0000', '#FFFFFF']
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-black">{data.name}</h1>
          <p className="text-gray-600">Country Code: {data.code}</p>
        </div>
        <Link
          href={`/reference/countries/${country.id}/edit`}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Edit Country
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Basic Information */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-black mb-4">Basic Information</h2>
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium text-gray-500">Country Name</label>
              <p className="text-black">{data.name}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Country Code</label>
              <p className="text-black">{data.code}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Currency</label>
              <p className="text-black">{data.currency}</p>
            </div>
          </div>
        </div>

        {/* Flag Colors */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-black mb-4">Flag Colors</h2>
          <div className="flex space-x-2">
            {data.flagColors.map((color, index) => (
              <div
                key={index}
                className="w-12 h-12 rounded border border-gray-300"
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
          <div className="mt-2 text-sm text-gray-600">
            Colors: {data.flagColors.join(', ')}
          </div>
        </div>

        {/* Institutions */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-black mb-4">Institutions</h2>
          <div className="space-y-2">
            {data.institutions.length > 0 ? (
              data.institutions.map((institution, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded border-l-4 border-blue-600">
                  <p className="text-black">{institution}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No institutions registered</p>
            )}
          </div>
        </div>

        {/* Regions */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-black mb-4">Regions</h2>
          <div className="grid grid-cols-2 gap-2">
            {data.regions.length > 0 ? (
              data.regions.map((region, index) => (
                <div key={index} className="p-2 bg-gray-50 rounded text-center">
                  <p className="text-black text-sm">{region}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 col-span-2">No regions defined</p>
            )}
          </div>
        </div>
      </div>

      {/* Institutions Map Placeholder */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h2 className="text-xl font-semibold text-black mb-4">Institutions Map</h2>
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-gray-500">Interactive map will be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CountriesPage() {
  const [countries, setCountries] = useState([]); // Start with empty array
  const [activeCountry, setActiveCountry] = useState(null);

  const handleCreateCountry = () => {
    // Navigate to create country page
    window.location.href = '/reference/countries/create';
  };

  const handleEditCountry = (country) => {
    window.location.href = `/reference/countries/${country.id}/edit`;
  };

  const handleDeleteCountry = (country) => {
    if (confirm(`Are you sure you want to delete ${country.name}?`)) {
      setCountries(countries.filter(c => c.id !== country.id));
      if (activeCountry?.id === country.id) {
        setActiveCountry(null);
      }
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f9fafb'
    }}>
      <Sidebar 
        countries={countries} 
        activeCountry={activeCountry} 
        setActiveCountry={setActiveCountry} 
      />
      
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
            {countries.length > 0 && (
              <button
                onClick={handleCreateCountry}
                style={{
                  backgroundColor: '#2563eb',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease-in-out',
                  display: 'flex',
                  alignItems: 'center'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
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
            )}
          </div>

          {/* Main Content */}
          {countries.length === 0 ? (
            <EmptyState onCreateCountry={handleCreateCountry} />
          ) : activeCountry ? (
            <CountryDetails 
              country={activeCountry} 
              onEditCountry={handleEditCountry}
              onDeleteCountry={handleDeleteCountry}
            />
          ) : (
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
                <p style={{
                  color: '#6b7280',
                  fontSize: '1.125rem'
                }}>
                  Select a country from the sidebar to view details
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
