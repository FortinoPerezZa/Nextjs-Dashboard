import '@/app/ui/global.css';
import React, { ReactNode } from 'react';

export default function RootLayout({
    children,
    } : {
        children: ReactNode;
    }){
    return (
      <html lang="en">
        <body>
            <div>
                {children}
            </div>
    </body>
    </html>
  );
  }