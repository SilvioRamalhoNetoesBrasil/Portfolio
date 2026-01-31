import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Cpu, HardDrive, MonitorIcon, Zap } from 'lucide-react';

export default function RequirementsPage() {
  const minRequirements = [
    { icon: Cpu, label: 'Processador', value: '1 GHz (32 ou 64-bit)' },
    { icon: Zap, label: 'Memória RAM', value: '512 MB' },
    { icon: HardDrive, label: 'Espaço em Disco', value: '2 GB' },
    { icon: MonitorIcon, label: 'Resolução', value: '800x600' },
  ];

  const recommendedRequirements = [
    { icon: Cpu, label: 'Processador', value: '2 GHz Dual Core' },
    { icon: Zap, label: 'Memória RAM', value: '2 GB ou mais' },
    { icon: HardDrive, label: 'Espaço em Disco', value: '10 GB' },
    { icon: MonitorIcon, label: 'Resolução', value: '1024x768 ou superior' },
  ];

  const supportedArchitectures = [
    'Intel x86 (32-bit)',
    'Intel/AMD x86_64 (64-bit)',
    'PowerPC 32-bit (PPC)',
    'PowerPC 64-bit (PPC64)',
  ];

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Requisitos do Sistema
          </h1>
          <p className="text-xl text-gray-400">
            Godzilla Linux - Requisitos para instalação
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gray-900 border-blue-900/50">
            <CardHeader>
              <CardTitle className="text-blue-400 text-2xl">Requisitos Mínimos</CardTitle>
              <CardDescription className="text-gray-400">
                Configuração básica para executar o sistema
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {minRequirements.map((req, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 bg-gray-800 rounded-lg">
                  <req.icon className="h-8 w-8 text-blue-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-400">{req.label}</p>
                    <p className="text-white font-semibold">{req.value}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-blue-900/50">
            <CardHeader>
              <CardTitle className="text-blue-400 text-2xl">Requisitos Recomendados</CardTitle>
              <CardDescription className="text-gray-400">
                Configuração ideal para melhor desempenho
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recommendedRequirements.map((req, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 bg-gray-800 rounded-lg">
                  <req.icon className="h-8 w-8 text-green-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-400">{req.label}</p>
                    <p className="text-white font-semibold">{req.value}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-blue-950 to-gray-900 border-blue-900/50 mb-8">
          <CardHeader>
            <CardTitle className="text-blue-400 text-2xl">Arquiteturas Suportadas</CardTitle>
            <CardDescription className="text-gray-400">
              O Godzilla Linux suporta as seguintes arquiteturas de processador
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {supportedArchitectures.map((arch, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="text-white font-medium">{arch}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-blue-900/50">
          <CardHeader>
            <CardTitle className="text-blue-400">Informações Adicionais</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-4">
            <div>
              <h3 className="text-white font-semibold mb-2">Instalação</h3>
              <p>
                O Godzilla Linux pode ser instalado em disco rígido, SSD ou executado
                diretamente do USB/DVD sem instalação (Live Mode).
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Compatibilidade</h3>
              <p>
                Compatível com a maioria dos hardwares modernos e legados. Baseado no
                Poky Yocto Project, oferece estabilidade e flexibilidade.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Desempenho</h3>
              <p>
                Otimizado para oferecer o melhor desempenho mesmo em hardware mais antigo,
                mantendo recursos modernos do Linux.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
