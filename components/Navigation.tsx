'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { href: '/', label: 'Início' },
    { href: '/download', label: 'Download' },
    { href: '/requirements', label: 'Requisitos' },
    { href: '/support', label: 'Suporte' },
    { href: '/contact', label: 'Contato' },
  ];

  return (
    <nav className="bg-gray-950 border-b border-blue-900/30 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
            SilvioRamalhoNeto
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <form onSubmit={handleSearch} className="hidden md:flex items-center space-x-2">
            <Input
              type="text"
              placeholder="Pesquisar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 bg-gray-900 border-blue-900/50 text-white placeholder:text-gray-500"
            />
            <Button type="submit" size="sm" className="bg-blue-600 hover:bg-blue-700">
              <Search className="h-4 w-4" />
            </Button>
          </form>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-blue-400"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <form onSubmit={handleSearch} className="flex items-center space-x-2 mb-4">
              <Input
                type="text"
                placeholder="Pesquisar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-gray-900 border-blue-900/50 text-white placeholder:text-gray-500"
              />
              <Button type="submit" size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Search className="h-4 w-4" />
              </Button>
            </form>
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-300 hover:text-blue-400 transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
