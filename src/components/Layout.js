'use client';

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

export default function Layout({ children, breadcrumbs = [] }) {
  const [activeItem, setActiveItem] = useState('countries');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <style jsx>{`
        .main-content {
          margin-left: 280px;
          transition: margin-left 0.3s ease;
        }
        
        /* Desktop - Large screens */
        @media (min-width: 1025px) {
          .main-content {
            margin-left: 280px;
          }
        }
        
        /* Tablet - Medium screens */
        @media (min-width: 769px) and (max-width: 1024px) {
          .main-content {
            margin-left: 240px;
          }
        }
        
        /* Large Mobile - Small tablets */
        @media (min-width: 481px) and (max-width: 768px) {
          .main-content {
            margin-left: 0 !important;
          }
        }
        
        /* Small Mobile */
        @media (max-width: 480px) {
          .main-content {
            margin-left: 0 !important;
          }
          
          main {
            padding: 1rem !important;
          }
        }
      `}</style>
      
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar 
          activeItem={activeItem} 
          setActiveItem={setActiveItem}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
        
        <div className="main-content" style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column'
        }}>
          <TopBar 
            breadcrumbs={breadcrumbs}
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
          
          <main style={{
            flex: 1,
            padding: '1.5rem',
            background: '#f8fafc',
            minHeight: 'calc(100vh - 70px)'
          }}>
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
