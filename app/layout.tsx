import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Silvio Ramalho Neto - Portfolio',
  description: 'Criador da Distribuição Linux Godzilla Linux Baseada no Poky Yocto Project',
  openGraph: {
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-black text-white`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-950 border-t border-blue-900/30 py-8 mt-20">
          <div className="container mx-auto px-4 text-center text-gray-400">
            <p>&copy; 2024 Silvio Ramalho Neto da Silva. Todos os direitos reservados.</p>
            <p className="mt-2 text-sm">Criador da Distribuição Linux Godzilla Linux</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
