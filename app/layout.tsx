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
      <body className={" bg-gray-900 text-white md:w-full lg:w-4/6  mx-auto"}>
        <Navbar />
        <main className='w-full mt-16'>
          {children}
        </main>
      </body>
    </html>
  );
}
