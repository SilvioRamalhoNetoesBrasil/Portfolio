'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search } from 'lucide-react';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const allContent = [
    {
      title: 'Godzilla Linux Download',
      description: 'Baixe a distribuição Linux Godzilla para diferentes arquiteturas',
      link: '/download',
      keywords: ['download', 'linux', 'godzilla', 'distribuição', 'baixar', 'iso', 'imagem'],
    },
    {
      title: 'Requisitos do Sistema',
      description: 'Requisitos mínimos e recomendados para instalar o Godzilla Linux',
      link: '/requirements',
      keywords: ['requisitos', 'sistema', 'hardware', 'mínimo', 'recomendado'],
    },
    {
      title: 'Suporte Técnico',
      description: 'Entre em contato com o suporte para relatar problemas',
      link: '/support',
      keywords: ['suporte', 'ajuda', 'problema', 'bug', 'erro', 'whatsapp'],
    },
    {
      title: 'Contato',
      description: 'Formulário de contato e informações',
      link: '/contact',
      keywords: ['contato', 'email', 'telefone', 'mensagem', 'formulário'],
    },
    {
      title: 'Arquitetura x86 (32-bit)',
      description: 'Download para processadores Intel e AMD de 32 bits',
      link: '/download',
      keywords: ['x86', '32-bit', '32 bits', 'intel', 'amd'],
    },
    {
      title: 'Arquitetura x86_64 (64-bit)',
      description: 'Download para processadores Intel e AMD de 64 bits',
      link: '/download',
      keywords: ['x86_64', '64-bit', '64 bits', 'intel', 'amd'],
    },
    {
      title: 'Arquitetura PowerPC 32-bit',
      description: 'Download para processadores PowerPC de 32 bits',
      link: '/download',
      keywords: ['powerpc', 'ppc', '32-bit', 'ibm'],
    },
    {
      title: 'Arquitetura PowerPC 64-bit',
      description: 'Download para processadores PowerPC de 64 bits',
      link: '/download',
      keywords: ['powerpc', 'ppc64', '64-bit', 'ibm'],
    },
  ];

  const results = allContent.filter((item) => {
    const searchTerms = query.toLowerCase().split(' ');
    return searchTerms.some(
      (term) =>
        item.title.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term) ||
        item.keywords.some((keyword) => keyword.toLowerCase().includes(term))
    );
  });

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Resultados da Pesquisa
          </h1>
          <p className="text-gray-400">
            Pesquisando por: <span className="text-blue-400 font-semibold">{query}</span>
          </p>
        </div>

        {results.length > 0 ? (
          <div className="space-y-4">
            <p className="text-gray-400 mb-6">
              Encontrados {results.length} resultado{results.length !== 1 ? 's' : ''}
            </p>
            {results.map((result, index) => (
              <Link key={index} href={result.link}>
                <Card className="bg-gray-900 border-blue-900/50 hover:border-blue-600 transition-colors cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-blue-400">{result.title}</CardTitle>
                    <CardDescription className="text-gray-400">
                      {result.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-blue-300 hover:underline">
                      Ver mais →
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <Card className="bg-gray-900 border-blue-900/50">
            <CardContent className="py-12 text-center">
              <Search className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Nenhum resultado encontrado
              </h3>
              <p className="text-gray-400">
                Tente usar palavras-chave diferentes ou mais gerais.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
