import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Background from '@/components/Utilities/Background';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Test Typing',
  description: 'Typing Fast. Made By Ozy',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="selection:bg-slate-900">
      <body className={inter.className}>
        <Background />
        <Header />
        {children}
      </body>
    </html>
  );
}
