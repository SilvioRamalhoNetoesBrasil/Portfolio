'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Download, Cpu, HardDrive } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';

export default function DownloadPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedArch, setSelectedArch] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const architectures = [
    {
      name: 'x86 (32-bit)',
      description: 'Para processadores Intel e AMD de 32 bits',
      icon: Cpu,
      file: 'godzilla-linux-x86-32bit.iso',
    },
    {
      name: 'x86_64 (64-bit)',
      description: 'Para processadores Intel e AMD de 64 bits',
      icon: Cpu,
      file: 'godzilla-linux-x86_64-64bit.iso',
    },
    {
      name: 'PowerPC 32-bit (PPC)',
      description: 'Para processadores PowerPC de 32 bits',
      icon: Cpu,
      file: 'godzilla-linux-ppc-32bit.iso',
    },
    {
      name: 'PowerPC 64-bit (PPC64)',
      description: 'Para processadores PowerPC de 64 bits',
      icon: Cpu,
      file: 'godzilla-linux-ppc64-64bit.iso',
    },
  ];

  const handleDownloadClick = (arch: typeof architectures[0]) => {
    setSelectedArch(arch.name);
    setIsOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email) {
      toast({
        title: 'Erro',
        description: 'Por favor, preencha todos os campos.',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Link enviado!',
      description: `O link de download será enviado para ${email}`,
    });

    setTimeout(() => {
      setIsOpen(false);
      setName('');
      setEmail('');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black py-20">
      <Toaster />
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Download Godzilla Linux
          </h1>
          <p className="text-xl text-gray-400">
            Escolha a arquitetura do seu processador
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {architectures.map((arch, index) => (
            <Card key={index} className="bg-gray-900 border-blue-900/50 hover:border-blue-600 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <arch.icon className="h-8 w-8 text-blue-400" />
                  <CardTitle className="text-blue-400">{arch.name}</CardTitle>
                </div>
                <CardDescription className="text-gray-400">
                  {arch.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-400">
                    <HardDrive className="h-4 w-4 mr-2" />
                    <span>{arch.file}</span>
                  </div>
                  <Button
                    onClick={() => handleDownloadClick(arch)}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Baixar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-br from-blue-950 to-gray-900 border-blue-900/50">
          <CardHeader>
            <CardTitle className="text-blue-400">Sobre o Godzilla Linux</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-4">
            <p>
              O Godzilla Linux é uma distribuição Linux baseada no Poky Yocto Project,
              desenvolvida por Silvio Ramalho Neto da Silva. Esta distribuição oferece:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Suporte para múltiplas arquiteturas de processador</li>
              <li>Sistema otimizado e leve</li>
              <li>Baseado em tecnologia Yocto Project comprovada</li>
              <li>Ideal para sistemas embarcados e desktops</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-gray-900 border-blue-900/50 text-white">
          <DialogHeader>
            <DialogTitle className="text-blue-400">Solicitar Link de Download</DialogTitle>
            <DialogDescription className="text-gray-400">
              Preencha o formulário abaixo para receber o link de download para {selectedArch}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-300">
                Nome completo
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome"
                className="bg-gray-800 border-blue-900/50 text-white"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300">
                E-mail
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="bg-gray-800 border-blue-900/50 text-white"
                required
              />
            </div>
            <div className="pt-4">
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Enviar Link
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
