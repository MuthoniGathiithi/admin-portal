'use client';

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

export default function Layout({ children, breadcrumbs = [] }) {
  const [activeItem, setActiveItem] = useState('countries');

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      
      <div style={{
        flex: 1,
        marginLeft: '280px',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <TopBar breadcrumbs={breadcrumbs} />
        
        <main style={{
          flex: 1,
          padding: 'var(--space-6)',
          background: 'var(--gray-50)'
        }}>
          {children}
        </main>
      </div>
    </div>
  );
}
