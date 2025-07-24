// components/LayoutWrapper.js
'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  const hideNavAndFooter = pathname === '/media';

  return (
    <>
      {!hideNavAndFooter && <Navbar />}
      <main>{children}</main>
      {!hideNavAndFooter && <Footer />}
    </>
  );
}
