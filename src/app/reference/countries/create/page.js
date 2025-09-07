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

  // Country data database with coordinates, continent, and tel codes
  const countryData = {
    'kenya': { lat: -1.286389, lng: 36.817223, continent: 'Africa', telcode: '+254' },
    'malawi': { lat: -13.254308, lng: 34.301525, continent: 'Africa', telcode: '+265' },
    'uganda': { lat: 1.373333, lng: 32.290275, continent: 'Africa', telcode: '+256' },
    'tanzania': { lat: -6.369028, lng: 34.888822, continent: 'Africa', telcode: '+255' },
    'rwanda': { lat: -1.940278, lng: 29.873888, continent: 'Africa', telcode: '+250' },
    'burundi': { lat: -3.373056, lng: 29.918886, continent: 'Africa', telcode: '+257' },
    'ethiopia': { lat: 9.145000, lng: 40.489673, continent: 'Africa', telcode: '+251' },
    'somalia': { lat: 5.152149, lng: 46.199616, continent: 'Africa', telcode: '+252' },
    'south sudan': { lat: 6.877000, lng: 31.307000, continent: 'Africa', telcode: '+211' },
    'sudan': { lat: 12.862807, lng: 30.217636, continent: 'Africa', telcode: '+249' },
    'djibouti': { lat: 11.825138, lng: 42.590275, continent: 'Africa', telcode: '+253' },
    'eritrea': { lat: 15.179384, lng: 39.782334, continent: 'Africa', telcode: '+291' },
    'zambia': { lat: -13.133897, lng: 27.849332, continent: 'Africa', telcode: '+260' },
    'zimbabwe': { lat: -19.015438, lng: 29.154857, continent: 'Africa', telcode: '+263' },
    'botswana': { lat: -22.328474, lng: 24.684866, continent: 'Africa', telcode: '+267' },
    'namibia': { lat: -22.95764, lng: 18.49041, continent: 'Africa', telcode: '+264' },
    'south africa': { lat: -30.559482, lng: 22.937506, continent: 'Africa', telcode: '+27' },
    'lesotho': { lat: -29.609988, lng: 28.233608, continent: 'Africa', telcode: '+266' },
    'swaziland': { lat: -26.522503, lng: 31.465866, continent: 'Africa', telcode: '+268' },
    'mozambique': { lat: -18.665695, lng: 35.529562, continent: 'Africa', telcode: '+258' },
    'madagascar': { lat: -18.766947, lng: 46.869107, continent: 'Africa', telcode: '+261' },
    'mauritius': { lat: -20.348404, lng: 57.552152, continent: 'Africa', telcode: '+230' },
    'seychelles': { lat: -4.679574, lng: 55.491977, continent: 'Africa', telcode: '+248' },
    'comoros': { lat: -11.875001, lng: 43.872219, continent: 'Africa', telcode: '+269' },
    'nigeria': { lat: 9.081999, lng: 8.675277, continent: 'Africa', telcode: '+234' },
    'ghana': { lat: 7.946527, lng: -1.023194, continent: 'Africa', telcode: '+233' },
    'ivory coast': { lat: 7.539989, lng: -5.54708, continent: 'Africa', telcode: '+225' },
    'senegal': { lat: 14.497401, lng: -14.452362, continent: 'Africa', telcode: '+221' },
    'mali': { lat: 17.570692, lng: -3.996166, continent: 'Africa', telcode: '+223' },
    'burkina faso': { lat: 12.238333, lng: -1.561593, continent: 'Africa', telcode: '+226' },
    'niger': { lat: 17.607789, lng: 8.081666, continent: 'Africa', telcode: '+227' },
    'chad': { lat: 15.454166, lng: 18.732207, continent: 'Africa', telcode: '+235' },
    'cameroon': { lat: 7.369722, lng: 12.354722, continent: 'Africa', telcode: '+237' },
    'central african republic': { lat: 6.611111, lng: 20.939444, continent: 'Africa', telcode: '+236' },
    'democratic republic of congo': { lat: -4.038333, lng: 21.758664, continent: 'Africa', telcode: '+243' },
    'republic of congo': { lat: -0.228021, lng: 15.827659, continent: 'Africa', telcode: '+242' },
    'gabon': { lat: -0.803689, lng: 11.609444, continent: 'Africa', telcode: '+241' },
    'equatorial guinea': { lat: 1.650801, lng: 10.267895, continent: 'Africa', telcode: '+240' },
    'sao tome and principe': { lat: 0.18636, lng: 6.613081, continent: 'Africa', telcode: '+239' },
    'cape verde': { lat: 16.002082, lng: -24.013197, continent: 'Africa', telcode: '+238' },
    'gambia': { lat: 13.443182, lng: -15.310139, continent: 'Africa', telcode: '+220' },
    'guinea bissau': { lat: 11.803749, lng: -15.180413, continent: 'Africa', telcode: '+245' },
    'guinea': { lat: 9.945587, lng: -9.696645, continent: 'Africa', telcode: '+224' },
    'sierra leone': { lat: 8.460555, lng: -11.779889, continent: 'Africa', telcode: '+232' },
    'liberia': { lat: 6.428055, lng: -9.429499, continent: 'Africa', telcode: '+231' },
    'togo': { lat: 8.619543, lng: 0.824782, continent: 'Africa', telcode: '+228' },
    'benin': { lat: 9.30769, lng: 2.315834, continent: 'Africa', telcode: '+229' },
    'mauritania': { lat: 21.00789, lng: -10.940835, continent: 'Africa', telcode: '+222' },
    'morocco': { lat: 31.791702, lng: -7.09262, continent: 'Africa', telcode: '+212' },
    'algeria': { lat: 28.033886, lng: 1.659626, continent: 'Africa', telcode: '+213' },
    'tunisia': { lat: 33.886917, lng: 9.537499, continent: 'Africa', telcode: '+216' },
    'libya': { lat: 26.3351, lng: 17.228331, continent: 'Africa', telcode: '+218' },
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

    // Navigate to country view page
    window.location.href = `/reference/countries/${newCountry.id}`;
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

          {/* Header */}
          <div style={{ marginBottom: '2rem' }}>
            <h1 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#1f2937',
              margin: 0
            }}>
              Add New Country
            </h1>
          </div>

          {/* Form */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '20px',
            padding: '3rem',
            border: '1px solid #e5e7eb',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
            backdropFilter: 'blur(20px)'
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
                      padding: '1rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '12px',
                      fontSize: '0.875rem',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      backgroundColor: '#fafbfc'
                    }}
                    placeholder="Enter country name"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#667eea';
                      e.target.style.backgroundColor = 'white';
                      e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e5e7eb';
                      e.target.style.backgroundColor = '#fafbfc';
                      e.target.style.boxShadow = 'none';
                    }}
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
                    onFocus={(e) => {
                      e.target.style.borderColor = '#667eea';
                      e.target.style.backgroundColor = 'white';
                      e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e5e7eb';
                      e.target.style.backgroundColor = '#fafbfc';
                      e.target.style.boxShadow = 'none';
                    }}
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
                    onFocus={(e) => {
                      e.target.style.borderColor = '#667eea';
                      e.target.style.backgroundColor = 'white';
                      e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e5e7eb';
                      e.target.style.backgroundColor = '#fafbfc';
                      e.target.style.boxShadow = 'none';
                    }}
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
                      padding: '1rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '12px',
                      fontSize: '0.875rem',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      backgroundColor: '#fafbfc'
                    }}
                    placeholder="e.g., +265, +254"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#667eea';
                      e.target.style.backgroundColor = 'white';
                      e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e5e7eb';
                      e.target.style.backgroundColor = '#fafbfc';
                      e.target.style.boxShadow = 'none';
                    }}
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
                    placeholder="e.g., -13.254308"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#667eea';
                      e.target.style.backgroundColor = 'white';
                      e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e5e7eb';
                      e.target.style.backgroundColor = '#fafbfc';
                      e.target.style.boxShadow = 'none';
                    }}
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
                    placeholder="e.g., 34.301525"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#667eea';
                      e.target.style.backgroundColor = 'white';
                      e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e5e7eb';
                      e.target.style.backgroundColor = '#fafbfc';
                      e.target.style.boxShadow = 'none';
                    }}
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
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = '#d1d5db';
                    e.currentTarget.style.backgroundColor = '#f9fafb';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = '#e5e7eb';
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  style={{
                    padding: '1rem 2rem',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
                  }}
                >
                  <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
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
