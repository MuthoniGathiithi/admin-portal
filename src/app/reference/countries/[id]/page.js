'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Layout from '../../../../components/Layout';
import Link from 'next/link';

export default function ViewCountryPage() {
  const params = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showInstitutionForm, setShowInstitutionForm] = useState(false);
  const [showCurriculumForm, setShowCurriculumForm] = useState(false);
  const [institutionForm, setInstitutionForm] = useState({
    name: '',
    type: 'university',
    address: '',
    phone: '',
    email: '',
    website: ''
  });
  const [curriculumForm, setCurriculumForm] = useState({
    name: '',
    description: '',
    level: 'undergraduate',
    duration: '',
    credits: ''
  });

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setCountry({
        id: params.id,
        name: 'Kenya',
        continent: 'Africa',
        telCode: '+254',
        flagSvg: null,
        centerLatitude: -1.2921,
        centerLongitude: 36.8219
      });
      setLoading(false);
    }, 500);
  }, [params.id]);

  if (loading) {
    return (
      <Layout breadcrumbs={['Reference', 'Countries', 'Loading...']}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '1.125rem',
          color: '#64748b'
        }}>
          Loading country details...
        </div>
      </Layout>
    );
  }

  if (!country) {
    return (
      <Layout breadcrumbs={['Reference', 'Countries', 'Not Found']}>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <h1 style={{ fontSize: '2rem', color: '#ef4444', marginBottom: '1rem' }}>
            Country not found
          </h1>
          <Link
            href="/reference/countries"
            style={{
              color: '#1e40af',
              textDecoration: 'none',
              fontSize: '1.125rem'
            }}
          >
            ← Back to Countries
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout breadcrumbs={['Reference', 'Countries', country.name]}>
      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto',
        padding: '1.5rem',
        background: '#f8fafc',
        minHeight: '100vh'
      }}>
        {/* Header with Stats Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
            padding: '2rem',
            borderRadius: '16px',
            color: 'white',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '100px',
              height: '100px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%'
            }}></div>
            <h1 style={{
              fontSize: '2rem',
              fontWeight: '600',
              margin: 0,
              marginBottom: '0.5rem',
              position: 'relative',
              zIndex: 2
            }}>
              {country.name}
            </h1>
            <p style={{
              fontSize: '1rem',
              opacity: 0.8,
              margin: 0,
              position: 'relative',
              zIndex: 2
            }}>
              Country Profile
            </p>
          </div>
          
          <div style={{
            background: '#ffffff',
            padding: '2rem',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1rem'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: '#f1f5f9',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1e40af" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <h3 style={{
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: '#64748b',
                  margin: 0,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>Capital</h3>
                <p style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#1e293b',
                  margin: 0
                }}>Nairobi</p>
              </div>
            </div>
          </div>
          
        </div>

        {/* Main Content - Country Details */}
        <div style={{
          marginBottom: '2rem'
        }}>
          <div style={{
            background: '#ffffff',
            padding: '2rem',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '2rem'
            }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#1e293b',
                margin: 0
              }}>Country Information</h2>
              <div style={{
                display: 'flex',
                gap: '0.75rem'
              }}>
                <Link
                  href={`/reference/countries/${country.id}/edit`}
                  style={{
                    background: '#1e40af',
                    color: '#ffffff',
                    padding: '0.75rem 1.5rem',
                    textDecoration: 'none',
                    fontWeight: '500',
                    fontSize: '0.875rem',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                  Edit
                </Link>
                <Link
                  href="/reference/countries"
                  style={{
                    background: '#ffffff',
                    color: '#64748b',
                    padding: '0.75rem 1.5rem',
                    textDecoration: 'none',
                    fontWeight: '500',
                    fontSize: '0.875rem',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15,18 9,12 15,6"/>
                  </svg>
                  Back
                </Link>
              </div>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem'
            }}>
              <div style={{
                padding: '1.5rem',
                background: '#f8fafc',
                borderRadius: '12px',
                border: '1px solid #e2e8f0'
              }}>
                <h3 style={{
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: '#64748b',
                  margin: 0,
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>Languages</h3>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#1e293b',
                  margin: 0
                }}>Swahili & English</p>
              </div>
              
              <div style={{
                padding: '1.5rem',
                background: '#f8fafc',
                borderRadius: '12px',
                border: '1px solid #e2e8f0'
              }}>
                <h3 style={{
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: '#64748b',
                  margin: 0,
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>Currency</h3>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#1e293b',
                  margin: 0
                }}>Kenyan Shilling (KES)</p>
              </div>
              
              <div style={{
                padding: '1.5rem',
                background: '#f8fafc',
                borderRadius: '12px',
                border: '1px solid #e2e8f0'
              }}>
                <h3 style={{
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: '#64748b',
                  margin: 0,
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>Time Zone</h3>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#1e293b',
                  margin: 0
                }}>EAT (UTC+3)</p>
              </div>
              
              <div style={{
                padding: '1.5rem',
                background: '#f8fafc',
                borderRadius: '12px',
                border: '1px solid #e2e8f0'
              }}>
                <h3 style={{
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: '#64748b',
                  margin: 0,
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>Continent</h3>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#1e293b',
                  margin: 0
                }}>{country.continent}</p>
              </div>
              
              <div style={{
                padding: '1.5rem',
                background: '#f8fafc',
                borderRadius: '12px',
                border: '1px solid #e2e8f0'
              }}>
                <h3 style={{
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: '#64748b',
                  margin: 0,
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>Phone Code</h3>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#1e293b',
                  margin: 0
                }}>{country.telCode}</p>
              </div>
            </div>
          </div>
        </div>


        {/* Management Sections */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Resources */}
          <div style={{
            background: '#ffffff',
            padding: '2rem',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.5rem'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#1e293b',
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: '#8b5cf6',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14,2 14,8 20,8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10,9 9,9 8,9"/>
                  </svg>
                </div>
                Resources
              </h3>
              <span style={{
                background: '#f1f5f9',
                color: '#64748b',
                padding: '0.25rem 0.75rem',
                borderRadius: '12px',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}>0 items</span>
            </div>
            
            <div style={{
              textAlign: 'center',
              padding: '2rem 1rem'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                background: '#f8fafc',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                border: '2px dashed #e2e8f0'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10,9 9,9 8,9"/>
                </svg>
              </div>
              <h4 style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#1e293b',
                margin: 0,
                marginBottom: '0.5rem'
              }}>No resources yet</h4>
              <p style={{
                fontSize: '0.875rem',
                color: '#64748b',
                margin: 0,
                marginBottom: '1.5rem',
                lineHeight: '1.5'
              }}>Add educational resources and materials for this country.</p>
              <button 
                style={{
                  background: '#8b5cf6',
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14m-7-7h14"/>
                </svg>
                Add Resource
              </button>
            </div>
          </div>
          {/* Curriculums */}
          <div style={{
            background: '#ffffff',
            padding: '2rem',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.5rem'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#1e293b',
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: '#1e40af',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                  </svg>
                </div>
                Curriculums
              </h3>
              <span style={{
                background: '#f1f5f9',
                color: '#64748b',
                padding: '0.25rem 0.75rem',
                borderRadius: '12px',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}>0 items</span>
            </div>
            
            <div style={{
              textAlign: 'center',
              padding: '2rem 1rem'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                background: '#f8fafc',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                border: '2px dashed #e2e8f0'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
              </div>
              <h4 style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#1e293b',
                margin: 0,
                marginBottom: '0.5rem'
              }}>No curriculums yet</h4>
              <p style={{
                fontSize: '0.875rem',
                color: '#64748b',
                margin: 0,
                marginBottom: '1.5rem',
                lineHeight: '1.5'
              }}>Get started by adding your first curriculum to this country.</p>
              <button 
                onClick={() => setShowCurriculumForm(true)}
                style={{
                  background: '#1e40af',
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14m-7-7h14"/>
                </svg>
                Add Curriculum
              </button>
            </div>
          </div>
          
          {/* Institutions */}
          <div style={{
            background: '#ffffff',
            padding: '2rem',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.5rem'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#1e293b',
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: '#059669',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M3 21h18"/>
                    <path d="M5 21V7l8-4v18"/>
                    <path d="M19 21V11l-6-4"/>
                  </svg>
                </div>
                Institutions
              </h3>
              <span style={{
                background: '#f1f5f9',
                color: '#64748b',
                padding: '0.25rem 0.75rem',
                borderRadius: '12px',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}>0 items</span>
            </div>
            
            <div style={{
              textAlign: 'center',
              padding: '2rem 1rem'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                background: '#f8fafc',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                border: '2px dashed #e2e8f0'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2">
                  <path d="M3 21h18"/>
                  <path d="M5 21V7l8-4v18"/>
                  <path d="M19 21V11l-6-4"/>
                </svg>
              </div>
              <h4 style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#1e293b',
                margin: 0,
                marginBottom: '0.5rem'
              }}>No institutions yet</h4>
              <p style={{
                fontSize: '0.875rem',
                color: '#64748b',
                margin: 0,
                marginBottom: '1.5rem',
                lineHeight: '1.5'
              }}>Add educational institutions to track and manage them.</p>
              <button 
                onClick={() => setShowInstitutionForm(true)}
                style={{
                  background: '#059669',
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14m-7-7h14"/>
                </svg>
                Add Institution
              </button>
            </div>
          </div>
        </div>

        {/* Institution Form Modal */}
        {showInstitutionForm && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1rem'
          }}>
            <div style={{
              background: '#ffffff',
              borderRadius: '16px',
              padding: '2rem',
              maxWidth: '500px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '2rem'
              }}>
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1e293b',
                  margin: 0
                }}>Add New Institution</h2>
                <button 
                  onClick={() => setShowInstitutionForm(false)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '1.5rem',
                    color: '#64748b',
                    cursor: 'pointer',
                    padding: '0.5rem',
                    borderRadius: '50%'
                  }}
                >
                  ×
                </button>
              </div>
              
              <form onSubmit={(e) => {
                e.preventDefault();
                console.log('Institution form submitted:', institutionForm);
                setShowInstitutionForm(false);
                setInstitutionForm({ name: '', type: 'university', address: '', phone: '', email: '', website: '' });
              }}>
                <div style={{ display: 'grid', gap: '1.5rem' }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#374151',
                      marginBottom: '0.5rem'
                    }}>Institution Name</label>
                    <input
                      type="text"
                      required
                      value={institutionForm.name}
                      onChange={(e) => setInstitutionForm({...institutionForm, name: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '0.875rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                  
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#374151',
                      marginBottom: '0.5rem'
                    }}>Institution Type</label>
                    <select
                      value={institutionForm.type}
                      onChange={(e) => setInstitutionForm({...institutionForm, type: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '0.875rem',
                        outline: 'none'
                      }}
                    >
                      <option value="university">University</option>
                      <option value="college">College</option>
                      <option value="school">School</option>
                      <option value="institute">Institute</option>
                    </select>
                  </div>
                  
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#374151',
                      marginBottom: '0.5rem'
                    }}>Address</label>
                    <textarea
                      required
                      value={institutionForm.address}
                      onChange={(e) => setInstitutionForm({...institutionForm, address: e.target.value})}
                      rows={3}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '0.875rem',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        color: '#374151',
                        marginBottom: '0.5rem'
                      }}>Phone</label>
                      <input
                        type="tel"
                        value={institutionForm.phone}
                        onChange={(e) => setInstitutionForm({...institutionForm, phone: e.target.value})}
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          border: '1px solid #d1d5db',
                          borderRadius: '8px',
                          fontSize: '0.875rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                    
                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        color: '#374151',
                        marginBottom: '0.5rem'
                      }}>Email</label>
                      <input
                        type="email"
                        value={institutionForm.email}
                        onChange={(e) => setInstitutionForm({...institutionForm, email: e.target.value})}
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          border: '1px solid #d1d5db',
                          borderRadius: '8px',
                          fontSize: '0.875rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#374151',
                      marginBottom: '0.5rem'
                    }}>Website</label>
                    <input
                      type="url"
                      value={institutionForm.website}
                      onChange={(e) => setInstitutionForm({...institutionForm, website: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '0.875rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  marginTop: '2rem',
                  justifyContent: 'flex-end'
                }}>
                  <button
                    type="button"
                    onClick={() => setShowInstitutionForm(false)}
                    style={{
                      background: '#ffffff',
                      color: '#64748b',
                      border: '1px solid #e2e8f0',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '8px',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      cursor: 'pointer'
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    style={{
                      background: '#059669',
                      color: '#ffffff',
                      border: 'none',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '8px',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      cursor: 'pointer'
                    }}
                  >
                    Add Institution
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Curriculum Form Modal */}
        {showCurriculumForm && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1rem'
          }}>
            <div style={{
              background: '#ffffff',
              borderRadius: '16px',
              padding: '2rem',
              maxWidth: '500px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '2rem'
              }}>
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1e293b',
                  margin: 0
                }}>Add New Curriculum</h2>
                <button 
                  onClick={() => setShowCurriculumForm(false)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '1.5rem',
                    color: '#64748b',
                    cursor: 'pointer',
                    padding: '0.5rem',
                    borderRadius: '50%'
                  }}
                >
                  ×
                </button>
              </div>
              
              <form onSubmit={(e) => {
                e.preventDefault();
                console.log('Curriculum form submitted:', curriculumForm);
                setShowCurriculumForm(false);
                setCurriculumForm({ name: '', description: '', level: 'undergraduate', duration: '', credits: '' });
              }}>
                <div style={{ display: 'grid', gap: '1.5rem' }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#374151',
                      marginBottom: '0.5rem'
                    }}>Curriculum Name</label>
                    <input
                      type="text"
                      required
                      value={curriculumForm.name}
                      onChange={(e) => setCurriculumForm({...curriculumForm, name: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '0.875rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                  
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#374151',
                      marginBottom: '0.5rem'
                    }}>Description</label>
                    <textarea
                      required
                      value={curriculumForm.description}
                      onChange={(e) => setCurriculumForm({...curriculumForm, description: e.target.value})}
                      rows={3}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '0.875rem',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>
                  
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#374151',
                      marginBottom: '0.5rem'
                    }}>Level</label>
                    <select
                      value={curriculumForm.level}
                      onChange={(e) => setCurriculumForm({...curriculumForm, level: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '0.875rem',
                        outline: 'none'
                      }}
                    >
                      <option value="undergraduate">Undergraduate</option>
                      <option value="graduate">Graduate</option>
                      <option value="postgraduate">Postgraduate</option>
                      <option value="certificate">Certificate</option>
                      <option value="diploma">Diploma</option>
                    </select>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        color: '#374151',
                        marginBottom: '0.5rem'
                      }}>Duration</label>
                      <input
                        type="text"
                        placeholder="e.g., 4 years"
                        value={curriculumForm.duration}
                        onChange={(e) => setCurriculumForm({...curriculumForm, duration: e.target.value})}
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          border: '1px solid #d1d5db',
                          borderRadius: '8px',
                          fontSize: '0.875rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                    
                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        color: '#374151',
                        marginBottom: '0.5rem'
                      }}>Credits</label>
                      <input
                        type="number"
                        value={curriculumForm.credits}
                        onChange={(e) => setCurriculumForm({...curriculumForm, credits: e.target.value})}
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          border: '1px solid #d1d5db',
                          borderRadius: '8px',
                          fontSize: '0.875rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  marginTop: '2rem',
                  justifyContent: 'flex-end'
                }}>
                  <button
                    type="button"
                    onClick={() => setShowCurriculumForm(false)}
                    style={{
                      background: '#ffffff',
                      color: '#64748b',
                      border: '1px solid #e2e8f0',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '8px',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      cursor: 'pointer'
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    style={{
                      background: '#1e40af',
                      color: '#ffffff',
                      border: 'none',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '8px',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      cursor: 'pointer'
                    }}
                  >
                    Add Curriculum
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Institution Map Section */}
        <div style={{
          background: '#ffffff',
          padding: '2rem',
          borderRadius: '16px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
          marginTop: '2rem'
        }}>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            color: '#1e293b',
            margin: 0,
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: '#1e40af',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            Institution Map
          </h3>
          
          {/* Interactive Map Container */}
          <div style={{
            width: '100%',
            height: '400px',
            background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
            borderRadius: '12px',
            border: '2px dashed #cbd5e1',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Map Background Pattern */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `
                linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}></div>
            
            {/* Map Content */}
            <div style={{
              textAlign: 'center',
              zIndex: 1
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                background: '#ffffff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                border: '2px solid #1e40af',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1e40af" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h4 style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#1e293b',
                margin: 0,
                marginBottom: '0.5rem'
              }}>Interactive Institution Map</h4>
              <p style={{
                fontSize: '0.875rem',
                color: '#64748b',
                margin: 0,
                lineHeight: '1.5',
                maxWidth: '300px'
              }}>View and manage institutions across {country.name} on an interactive map</p>
            </div>
            
          </div>
          
          {/* Map Legend */}
          <div style={{
            marginTop: '1rem',
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            fontSize: '0.75rem'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                background: '#059669',
                borderRadius: '50%'
              }}></div>
              <span style={{ color: '#64748b' }}>Universities</span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                background: '#dc2626',
                borderRadius: '50%'
              }}></div>
              <span style={{ color: '#64748b' }}>Colleges</span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                background: '#f59e0b',
                borderRadius: '50%'
              }}></div>
              <span style={{ color: '#64748b' }}>Schools</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
