import type { Metadata } from 'next';
import './globals.css';
import HeaderLayout from '@/components/server/HeaderLayout';
import FooterLayout from '@/components/server/Footer/FooterLayout';
export const metadata: Metadata = {
  title: 'ML Portfolio',
  description: 'Showcasing my work so far in this NEXT application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-800">
        <div className="min-h-[90vh] md:rounded-[25px] md:m-12 bg-white">
          <header>
            <HeaderLayout />
          </header>
          {children}
          <footer>
            <FooterLayout />
          </footer>
        </div>
      </body>
    </html>
  );
}
