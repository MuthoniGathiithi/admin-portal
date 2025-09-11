import './globals.css'

export const metadata = {
  title: 'ALAMA Admin Portal',
  description: 'Administrative portal for ALAMA system',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
