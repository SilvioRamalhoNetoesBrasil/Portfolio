'use client';

import { useState } from 'react';
import { emailjs } from "@emailjs/browser";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';


  emailjs.sendForm(service_ddq2vrn, template_f31lz2t, 8Vt7ukZ__yi_kWDl73aJZ)
  
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Erro',
        description: 'Por favor, preencha todos os campos obrigatórios.',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Mensagem enviada!',
      description: 'Obrigado pelo contato. Responderemos em breve.',
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'E-mail de Contato',
      value: 'silvioneto36762@gmail.com',
      link: 'mailto:silvioneto36762@gmail.com',
    },
    {
      icon: Mail,
      label: 'E-mail de Suporte',
      value: 'sn.silvioneto18@gmail.com',
      link: 'mailto:sn.silvioneto18@gmail.com',
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+55 (28) 99963-2513',
      link: 'https://wa.me/5528999632513',
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Guaçuí, Espírito Santo, Brasil',
      link: null,
    },
  ];

  return (
    <div className="min-h-screen bg-black py-20">
      <Toaster />
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-400">
            Estou à disposição para responder suas dúvidas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="bg-gray-900 border-blue-900/50">
              <CardHeader>
                <CardTitle className="text-blue-400 text-2xl">Formulário de Contato</CardTitle>
                <CardDescription className="text-gray-400">
                  Preencha o formulário abaixo e entraremos em contato
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-300">
                        Nome completo *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        className="bg-gray-800 border-blue-900/50 text-white"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300">
                        E-mail *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        className="bg-gray-800 border-blue-900/50 text-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-300">
                        Telefone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+55 (00) 00000-0000"
                        className="bg-gray-800 border-blue-900/50 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-gray-300">
                        Assunto
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Assunto da mensagem"
                        className="bg-gray-800 border-blue-900/50 text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">
                      Mensagem *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Sua mensagem..."
                      rows={6}
                      className="bg-gray-800 border-blue-900/50 text-white"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-gray-900 border-blue-900/50">
              <CardHeader>
                <CardTitle className="text-blue-400">Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <info.icon className="h-4 w-4" />
                      <span className="text-sm">{info.label}</span>
                    </div>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-400 transition-colors block"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white">{info.value}</p>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-950 to-gray-900 border-blue-900/50">
              <CardHeader>
                <CardTitle className="text-blue-400">Horário de Atendimento</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="mb-2">Segunda a Sexta:</p>
                <p className="text-white font-semibold mb-4">9:00 - 18:00</p>
                <p className="text-sm text-gray-400">
                  Respondemos todas as mensagens em até 48 horas úteis.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
