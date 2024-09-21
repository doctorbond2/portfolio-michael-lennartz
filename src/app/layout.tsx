import type { Metadata } from 'next';
import './globals.css';
import HeaderLayout from '@/components/server/HeaderLayout';
import FooterLayout from '@/components/server/Footer/FooterLayout';
import { OptionsProvider } from '@/context/OptionsContext';
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
        <div className="block md:hidden fixed inset-0 bg-black bg-opacity-75 z-50 items-center justify-center">
          <div className="text-center text-white p-5">
            <h1 className="text-2xl font-bold">
              Responsive mobile view coming soon!
            </h1>
            <p className="mt-2 text-lg">
              Please view my portfolio on a larger monitor!
            </p>
          </div>
        </div>
        <div className="hidden md:block w-full">
          <OptionsProvider>
            <div className="min-h-[90vh] max-h-[90vh] md:rounded-[25px] md:m-12 bg-white">
              <header>
                <HeaderLayout />
              </header>
              {children}
              <footer>
                <FooterLayout />
              </footer>
            </div>
          </OptionsProvider>
        </div>
      </body>
    </html>
  );
}
