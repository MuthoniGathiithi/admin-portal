'use client';

import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';

export default function DashboardPage() {
  const [stats, setStats] = useState({
    totalCountries: 0,
    lastUpdated: new Date().toLocaleDateString()
  });

  useEffect(() => {
    // Get countries count from localStorage
    const countries = JSON.parse(localStorage.getItem('countries') || '[]');
    setStats(prev => ({
      ...prev,
      totalCountries: countries.length
    }));
  }, []);

  const StatCard = ({ title, value, description, color = '#6366f1' }) => (
    <div style={{
      background: '#ffffff',
      borderRadius: '16px',
      padding: '2rem',
      border: '1px solid #e5e7eb',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1rem'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
            <path d="M2 12h20"/>
          </svg>
        </div>
        <div>
          <h3 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#111827',
            margin: 0,
            lineHeight: '1'
          }}>
            {value}
          </h3>
        </div>
      </div>
      <h4 style={{
        fontSize: '1.1rem',
        fontWeight: '700',
        color: '#374151',
        margin: '0 0 0.5rem 0'
      }}>
        {title}
      </h4>
      <p style={{
        fontSize: '0.875rem',
        color: '#6b7280',
        margin: 0
      }}>
        {description}
      </p>
    </div>
  );

  const QuickActionCard = ({ title, description, action, icon, color = '#6366f1' }) => (
    <div style={{
      background: '#ffffff',
      borderRadius: '16px',
      padding: '1.5rem',
      border: '1px solid #e5e7eb',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    }}
    onClick={action}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
      e.currentTarget.style.borderColor = color;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
      e.currentTarget.style.borderColor = '#e5e7eb';
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1rem'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{ color: color }}>
            {icon}
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <h4 style={{
            fontSize: '1rem',
            fontWeight: '600',
            color: '#111827',
            margin: '0 0 0.25rem 0'
          }}>
            {title}
          </h4>
          <p style={{
            fontSize: '0.875rem',
            color: '#6b7280',
            margin: 0
          }}>
            {description}
          </p>
        </div>
        <div style={{
          fontSize: '1.2rem',
          color: '#9ca3af'
        }}>
          →
        </div>
      </div>
    </div>
  );

  return (
    <Layout breadcrumbs={['Dashboard']}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2.5rem'
        }}>
          <StatCard
            title="No of Countries"
            value={stats.totalCountries}
            description="Countries in system"
            color="#6366f1"
          />
        </div>

        {/* Quick Actions */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '800',
            color: '#111827',
            marginBottom: '1.5rem',
            letterSpacing: '-0.025em'
          }}>
            Quick Actions
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            <QuickActionCard
              title="Manage Countries"
              description="View, add, or edit country information"
              icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                <path d="M2 12h20"/>
              </svg>}
              color="#6366f1"
              action={() => window.location.href = '/reference/countries'}
            />
            <QuickActionCard
              title="Add New Country"
              description="Quickly add a new country to the system"
              icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19"/>
                <line x1="5" y1="12" x2="19" y2="12"/>
              </svg>}
              color="#10b981"
              action={() => window.location.href = '/reference/countries/create'}
            />
            <QuickActionCard
              title="User Profile"
              description="Manage your account and preferences"
              icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>}
              color="#8b5cf6"
              action={() => window.location.href = '/profile'}
            />
          </div>
        </div>

      </div>
    </Layout>
  );
}
