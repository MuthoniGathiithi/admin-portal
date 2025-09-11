'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Layout from '../../../components/Layout';

export default function CountriesPage() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRegion, setFilterRegion] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load countries from localStorage - no hardcoded data
    const savedCountries = localStorage.getItem('countries');
    if (savedCountries) {
      setCountries(JSON.parse(savedCountries));
    }
    setIsLoading(false);
  }, []);

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this country?')) {
      const updatedCountries = countries.filter(c => c.id !== id);
      setCountries(updatedCountries);
      localStorage.setItem('countries', JSON.stringify(updatedCountries));
    }
  };

  const filteredCountries = countries.filter(country => {
    const matchesSearch = country.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = !filterRegion || country.continent === filterRegion;
    return matchesSearch && matchesRegion;
  });

  const regions = [...new Set(countries.map(c => c.continent).filter(Boolean))];

  return (
    <Layout breadcrumbs={['Reference', 'Countries']}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 'var(--space-6)'
        }}>
          <div>
            <h1 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: 'var(--gray-900)',
              marginBottom: 'var(--space-2)'
            }}>
              Countries
            </h1>
            <p style={{
              color: 'var(--gray-600)',
              margin: 0
            }}>
              Manage country reference data
            </p>
          </div>
          
          <Link href="/reference/countries/create" className="btn btn-primary">
            + Add Country
          </Link>
        </div>

        {/* Search and Filter Bar */}
        <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
          <div style={{
            display: 'flex',
            gap: 'var(--space-4)',
            alignItems: 'center'
          }}>
            <div style={{ flex: 1 }}>
              <input
                type="text"
                placeholder="Search countries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input"
              />
            </div>
            
            <div style={{ minWidth: '200px' }}>
              <select
                value={filterRegion}
                onChange={(e) => setFilterRegion(e.target.value)}
                className="input"
              >
                <option value="">All Regions</option>
                {regions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Countries List */}
        <div className="card">
          {isLoading ? (
            <div style={{ textAlign: 'center', padding: 'var(--space-8)' }}>
              <p>Loading countries...</p>
            </div>
          ) : filteredCountries.length === 0 ? (
            <div style={{ textAlign: 'center', padding: 'var(--space-8)' }}>
              <p style={{ color: 'var(--gray-500)', marginBottom: 'var(--space-4)' }}>
                {searchTerm || filterRegion ? 'No countries match your filters' : 'No countries found'}
              </p>
              <Link href="/reference/countries/create" className="btn btn-primary">
                Add First Country
              </Link>
            </div>
          ) : (
            <div style={{ overflow: 'auto' }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse'
              }}>
                <thead>
                  <tr style={{
                    borderBottom: '1px solid var(--gray-200)'
                  }}>
                    <th style={{
                      textAlign: 'left',
                      padding: 'var(--space-3)',
                      fontWeight: '600',
                      color: 'var(--gray-700)'
                    }}>
                      Flag
                    </th>
                    <th style={{
                      textAlign: 'left',
                      padding: 'var(--space-3)',
                      fontWeight: '600',
                      color: 'var(--gray-700)'
                    }}>
                      Name
                    </th>
                    <th style={{
                      textAlign: 'left',
                      padding: 'var(--space-3)',
                      fontWeight: '600',
                      color: 'var(--gray-700)'
                    }}>
                      Continent
                    </th>
                    <th style={{
                      textAlign: 'left',
                      padding: 'var(--space-3)',
                      fontWeight: '600',
                      color: 'var(--gray-700)'
                    }}>
                      Tel Code
                    </th>
                    <th style={{
                      textAlign: 'right',
                      padding: 'var(--space-3)',
                      fontWeight: '600',
                      color: 'var(--gray-700)'
                    }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCountries.map((country) => (
                    <tr key={country.id} style={{
                      borderBottom: '1px solid var(--gray-100)'
                    }}>
                      <td style={{ padding: 'var(--space-3)' }}>
                        {country.flagSvg ? (
                          <img 
                            src={country.flagSvg} 
                            alt={`${country.name} flag`}
                            style={{ 
                              width: '32px', 
                              height: '20px', 
                              objectFit: 'cover', 
                              borderRadius: '2px',
                              border: '1px solid var(--gray-200)',
                              display: 'block'
                            }}
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'inline';
                            }}
                          />
                        ) : null}
                        <span 
                          style={{ 
                            fontSize: '1.5rem',
                            display: country.flagSvg ? 'none' : 'inline'
                          }}
                        >
                          {country.flag || '🏳️'}
                        </span>
                      </td>
                      <td style={{
                        padding: 'var(--space-3)',
                        fontWeight: '500',
                        color: 'var(--gray-900)'
                      }}>
                        {country.name}
                      </td>
                      <td style={{
                        padding: 'var(--space-3)',
                        color: 'var(--gray-600)'
                      }}>
                        {country.continent}
                      </td>
                      <td style={{
                        padding: 'var(--space-3)',
                        color: 'var(--gray-600)'
                      }}>
                        {country.telCode}
                      </td>
                      <td style={{
                        padding: 'var(--space-3)',
                        textAlign: 'right'
                      }}>
                        <div style={{
                          display: 'flex',
                          gap: 'var(--space-2)',
                          justifyContent: 'flex-end'
                        }}>
                          <Link
                            href={`/reference/countries/${country.id}`}
                            className="btn btn-secondary"
                            style={{
                              padding: 'var(--space-1) var(--space-3)',
                              fontSize: '0.75rem'
                            }}
                          >
                            View
                          </Link>
                          <Link
                            href={`/reference/countries/${country.id}/edit`}
                            className="btn btn-secondary"
                            style={{
                              padding: 'var(--space-1) var(--space-3)',
                              fontSize: '0.75rem'
                            }}
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => handleDelete(country.id)}
                            className="btn"
                            style={{
                              padding: 'var(--space-1) var(--space-3)',
                              fontSize: '0.75rem',
                              background: '#dc2626',
                              color: 'white'
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
