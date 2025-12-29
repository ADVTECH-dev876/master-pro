// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';

export const meta Metadata = {
  title: 'TaskFlow',
  description: 'Role-based task management with AI insights',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
