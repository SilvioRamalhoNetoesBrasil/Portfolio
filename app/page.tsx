import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Mail, Phone, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-b from-blue-950 to-black py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Silvio Ramalho Neto
              </h1>
              <p className="text-xl md:text-2xl text-blue-400">
                Desenvolvedor de Sistemas Linux
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Criador da Distribuição Linux Godzilla Linux Baseada no Poky Yocto Project
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/download">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Download className="mr-2 h-5 w-5" />
                    Download Godzilla Linux
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-950">
                    <Mail className="mr-2 h-5 w-5" />
                    Entrar em Contato
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <Image
                  src="/eu2.png"
                  alt="Silvio Ramalho Neto"
                  width={320}
                  height={320}
                  className="rounded-full border-4 border-blue-600 shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Sobre o Projeto
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gray-900 border-blue-900/50">
              <CardHeader>
                <CardTitle className="text-blue-400">Godzilla Linux</CardTitle>
                <CardDescription className="text-gray-400">
                  Distribuição Linux personalizada
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  Uma distribuição Linux baseada no Poky Yocto Project, desenvolvida para
                  oferecer flexibilidade e desempenho em múltiplas arquiteturas.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-blue-400">Arquiteturas Suportadas:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>x86 (32-bit)</li>
                    <li>x86_64 (64-bit)</li>
                    <li>PowerPC 32-bit (PPC)</li>
                    <li>PowerPC 64-bit (PPC64)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-blue-900/50">
              <CardHeader>
                <CardTitle className="text-blue-400">Informações de Contato</CardTitle>
                <CardDescription className="text-gray-400">
                  Entre em contato comigo
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span>silvioneto36762@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span>+55 (28) 99963-2513</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span>Guaçuí, Espírito Santo, Brasil</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-blue-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Galeria
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="relative h-64 rounded-lg overflow-hidden border-2 border-blue-600">
              <Image
                src="/eu.png"
                alt="Silvio Ramalho Neto"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden border-2 border-blue-600">
              <Image
                src="/eu2.png"
                alt="Silvio Ramalho Neto"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden border-2 border-blue-600">
              <Image
                src="/eu3.png"
                alt="Silvio Ramalho Neto"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
