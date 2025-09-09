'use client';

export default function LoadingSpinner({ size = 'md', color = '#1e40af' }) {
  const sizes = {
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '48px'
  };

  return (
    <div style={{
      display: 'inline-block',
      width: sizes[size],
      height: sizes[size],
      border: `2px solid rgba(30, 64, 175, 0.2)`,
      borderRadius: '50%',
      borderTopColor: color,
      animation: 'spin 1s ease-in-out infinite'
    }} />
  );
}
