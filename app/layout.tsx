import '@/styles/globals.css';
import Navbar from '@/ui/Navbar';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Next.js Turbopack App Directory Playground</title>
      </head>
      <body className="bg-cyan-200 dark:bg-cyan-800 text-black dark:text-white w-4/6 mx-auto">
        <Navbar />
        <main className='w-full bg-cyan-100 dark:bg-cyan-900 px-4 py-4'>
          {children}
        </main>
      </body>
    </html>
  );
}
