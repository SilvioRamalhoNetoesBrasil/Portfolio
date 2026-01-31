import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { emailjs } from "@emailjs/browser";
import { Button } from '@/components/ui/button';
import { Mail, MessageSquare, Phone, AlertCircle, Bug, HelpCircle } from 'lucide-react';
import Link from 'next/link';

  emailjs.sendForm(service_mwsrl7k, template_2d8vtaj, 8Vt7ukZ__yi_kWDl73aJZ)

export default function SupportPage() {
  const supportChannels = [
    {
      icon: Mail,
      title: 'E-mail de Suporte',
      value: 'sn.silvioneto18@gmail.com',
      description: 'Resposta em até 48 horas',
      link: 'mailto:sn.silvioneto18@gmail.com',
      buttonText: 'Enviar E-mail',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      value: '+55 (28) 99271-4857',
      description: 'Atendimento rápido via WhatsApp',
      link: 'https://wa.me/5528992714857',
      buttonText: 'Abrir WhatsApp',
    },
  ];

  const commonIssues = [
    {
      icon: Bug,
      title: 'Relatar Bug',
      description: 'Encontrou um problema no sistema? Relate aqui.',
    },
    {
      icon: AlertCircle,
      title: 'Erro na Instalação',
      description: 'Problemas durante a instalação da distribuição.',
    },
    {
      icon: HelpCircle,
      title: 'Dúvidas Gerais',
      description: 'Tire suas dúvidas sobre o Godzilla Linux.',
    },
  ];

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Suporte Técnico
          </h1>
          <p className="text-xl text-gray-400">
            Silvio Ramalho Neto da Silva - Criador do Godzilla Linux
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {supportChannels.map((channel, index) => (
            <Card key={index} className="bg-gray-900 border-blue-900/50">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <channel.icon className="h-8 w-8 text-blue-400" />
                  <CardTitle className="text-blue-400">{channel.title}</CardTitle>
                </div>
                <CardDescription className="text-gray-400">
                  {channel.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gray-800 rounded-lg">
                  <p className="text-white font-semibold text-lg">{channel.value}</p>
                </div>
                <a href={channel.link} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    {channel.buttonText}
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-br from-blue-950 to-gray-900 border-blue-900/50 mb-8">
          <CardHeader>
            <CardTitle className="text-blue-400 text-2xl">Como Podemos Ajudar?</CardTitle>
            <CardDescription className="text-gray-400">
              Problemas comuns e como resolvê-los
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {commonIssues.map((issue, index) => (
                <div key={index} className="p-4 bg-gray-800/50 rounded-lg space-y-2">
                  <issue.icon className="h-8 w-8 text-blue-400" />
                  <h3 className="text-white font-semibold">{issue.title}</h3>
                  <p className="text-gray-400 text-sm">{issue.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-blue-900/50">
          <CardHeader>
            <CardTitle className="text-blue-400">Diretrizes para Relatar Problemas</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-4">
            <p>
              Para que possamos ajudá-lo melhor, ao relatar um problema no Godzilla Linux,
              por favor inclua:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Arquitetura do processador utilizada (x86, x86_64, PPC, PPC64)</li>
              <li>Versão do Godzilla Linux instalada</li>
              <li>Descrição detalhada do problema</li>
              <li>Passos para reproduzir o erro</li>
              <li>Mensagens de erro (se houver)</li>
              <li>Configuração do hardware (se relevante)</li>
            </ul>
            <div className="pt-4">
              <p className="text-white font-semibold mb-2">
                Entre em contato através dos canais acima ou use nosso formulário de contato:
              </p>
              <Link href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Ir para Formulário de Contato
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
