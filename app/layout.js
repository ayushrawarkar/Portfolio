// app/layout.js
import { Inter } from 'next/font/google';
import '../public/styles/globals.css';
import LayoutWrapper from '../components/LayoutWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Anup Ingle | Portfolio',
  description: 'Professional Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-text`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
