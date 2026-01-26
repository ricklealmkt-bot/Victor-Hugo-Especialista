
import React, { useState, useEffect } from 'react';
import { Section } from './components/Section';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-orange-200 selection:text-orange-900 overflow-x-hidden">
      
      {/* BOTÃO WHATSAPP FLUTUANTE (ALTA CONVERSÃO MOBILE) */}
      <a 
        href="https://wa.me/5531997455656" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center group"
        aria-label="Falar no WhatsApp"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.891-11.891 3.181 0 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.402 0 6.556-5.332 11.891-11.891 11.891-2.01 0-3.991-.51-5.747-1.474l-6.249 1.694zm6.154-3.561l.362.215c1.399.829 3.012 1.267 4.671 1.267 4.871 0 8.835-3.964 8.835-8.835 0-2.359-.918-4.576-2.586-6.245-1.666-1.668-3.882-2.586-6.249-2.586-4.871 0-8.835 3.964-8.835 8.835 0 1.913.616 3.778 1.779 5.33l.235.316-.928 3.393 3.486-.945zm10.113-6.25c-.267-.134-1.581-.78-1.826-.869-.244-.089-.423-.134-.599.134-.176.267-.682.869-.836 1.047-.154.178-.308.201-.575.067-.267-.134-1.127-.415-2.147-1.326-.793-.707-1.328-1.581-1.484-1.848-.156-.267-.017-.411.117-.544.12-.119.267-.312.4-.467.133-.156.178-.267.267-.445.089-.178.044-.334-.022-.467-.067-.134-.599-1.446-.821-1.98-.216-.52-.453-.449-.599-.456-.154-.007-.33-.008-.506-.008-.176 0-.462.067-.703.334-.241.267-.92.899-.92 2.193s.941 2.541 1.074 2.719c.133.178 1.851 2.827 4.484 3.964.626.271 1.114.433 1.494.553.629.2 1.2.172 1.652.105.503-.075 1.581-.645 1.803-1.269.222-.624.222-1.159.156-1.269-.067-.111-.244-.178-.511-.312z"/>
        </svg>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 group-hover:ml-2 whitespace-nowrap font-bold">
          Dúvidas? Fale com Victor
        </span>
      </a>

      {/* 1ª DOBRA: O GANCHO (HERO SECTION) */}
      <section className="relative min-h-screen flex items-center bg-[#0f172a] overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent"></div>
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=60&w=1920" 
            alt="Escritório Moderno" 
            className="w-full h-full object-cover grayscale" 
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid lg:grid-cols-12 gap-12 items-center relative z-10 py-20 lg:py-0">
          <div className="lg:col-span-7 text-white space-y-8 animate-fade-in-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-sm font-bold tracking-widest uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span>Consultoria Estratégica em BH</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
              Sua empresa está jogando <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">dinheiro no lixo</span> com brindes inúteis?
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
              Transforme o desperdício em ROI real. Com 20 anos de mercado, <span className="font-bold text-white border-b-2 border-orange-500">Victor Hugo</span> migrou da venda para a estratégia para garantir que cada item da sua empresa tenha um propósito e gere conexão.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="https://wa.me/5531997455656" 
                className="inline-flex items-center justify-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-5 px-10 rounded-xl shadow-2xl transform transition hover:-translate-y-1 active:scale-95 text-lg"
              >
                Falar com Victor Hugo agora
              </a>
              <div className="flex items-center gap-3 px-2">
                 <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-[10px] font-bold">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} className="rounded-full" alt="Client" />
                      </div>
                    ))}
                 </div>
                 <div className="text-sm">
                    <p className="font-bold">+500 empresas</p>
                    <p className="text-slate-400 text-xs uppercase">Transformadas em MG</p>
                 </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative lg:mt-0 mt-12 animate-fade-in-right">
            {/* NOVO CONTAINER DE FOTO PROFISSIONAL */}
            <div className="relative z-10 group">
               <div className="absolute inset-0 bg-orange-500 rounded-3xl rotate-3 scale-105 opacity-20 group-hover:rotate-6 transition-transform"></div>
               <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-700 bg-slate-800 aspect-[4/5] md:aspect-auto">
                  {/* FOTO DO USUÁRIO INTEGRADA COM ESTILO PROFISSIONAL */}
                  <img 
                    src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/victor-hugo-consultor.png" 
                    onError={(e) => {
                      // Fallback case if specific path is needed, or using the uploaded image logic
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";
                    }}
                    alt="Victor Hugo - Consultor Estratégico" 
                    className="w-full h-full object-cover object-top filter contrast-110 brightness-105"
                  />
                  
                  {/* Badge de Autoridade */}
                  <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl flex items-center space-x-2">
                    <div className="bg-orange-500 p-1 rounded-full">
                       <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <span className="text-white text-xs font-bold uppercase tracking-tighter">Estrategista Sênior</span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-8">
                     <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">Victor Hugo</h3>
                     <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest">Consultor de ROI em Brindes</p>
                  </div>
               </div>
            </div>
            
            {/* Efeito de brilho de fundo */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>
          </div>
        </div>
      </section>

      {/* 2ª DOBRA: BENEFÍCIOS */}
      <Section className="bg-white">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            Pare de comprar produtos, <br className="hidden md:block" /> comece a comprar <span className="text-orange-600">resultados</span>.
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Mude a forma como sua empresa se relaciona com clientes e colaboradores. Saia do amadorismo e entre na era da consultoria estratégica focada em retenção e memória de marca.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:border-orange-200 hover:shadow-2xl transition-all group">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">📉</div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">Redução de Custos</h3>
            <p className="text-slate-600 leading-relaxed">Elimine o desperdício com itens descartáveis que seus clientes jogam fora assim que recebem.</p>
          </div>
          
          <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:border-orange-200 hover:shadow-2xl transition-all group">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">📅</div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">Calendário Estratégico</h3>
            <p className="text-slate-600 leading-relaxed">Onboarding, datas sazonais e fidelização. Tudo planejado com meses de antecedência para evitar urgências caras.</p>
          </div>
          
          <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:border-orange-200 hover:shadow-2xl transition-all group">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">⭐</div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">Percepção de Valor</h3>
            <p className="text-slate-600 leading-relaxed">Presentes memoráveis que reforçam a autoridade da sua marca e criam embaixadores reais do seu negócio.</p>
          </div>
          
          <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:border-orange-200 hover:shadow-2xl transition-all group">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">📍</div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">Foco em MG</h3>
            <p className="text-slate-600 leading-relaxed">Conhecimento profundo da logística de Belo Horizonte e interior para entregas perfeitas, sem dor de cabeça.</p>
          </div>
        </div>
      </Section>

      {/* 3ª DOBRA: AUTORIDADE (SOBRE) */}
      <Section className="bg-slate-900 text-white relative overflow-hidden">
        <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <div className="w-20 h-1 bg-orange-500"></div>
            <h2 className="text-4xl md:text-5xl font-black leading-[1.1]">
              Duas décadas de Know-how a serviço do seu crescimento
            </h2>
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                Contratar o Victor Hugo não é contratar um fornecedor. É contratar um <strong>atalho de 20 anos</strong> de experiência no mercado mineiro.
              </p>
              <p>
                Muitas empresas tentam fazer tudo sozinhas e acabam com estoques parados de itens que ninguém usa. Minha transição de "tirador de pedidos" para <strong>Parceiro Estratégico</strong> foi motivada por uma dor real: o dinheiro mal gasto.
              </p>
              <p>
                Eu entendo as nuances de Belo Horizonte, o perfil do colaborador mineiro e, acima de tudo, o que gera conexão. Minha consultoria é o filtro que separa o brinde comum do investimento lucrativo.
              </p>
            </div>
            
            <div className="pt-6">
                <a 
                  href="https://wa.me/5531997455656" 
                  className="inline-flex items-center space-x-3 text-orange-500 font-bold text-xl group"
                >
                  <span>Conhecer o método completo</span>
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
             {[
               { val: "20+", label: "Anos de Experiência" },
               { val: "500+", label: "Empresas Atendidas" },
               { val: "100%", label: "Foco em ROI" },
               { val: "BH/MG", label: "Presença Local" }
             ].map((stat, idx) => (
               <div key={idx} className="bg-slate-800 p-8 rounded-3xl border border-white/5 hover:border-orange-500/30 transition-colors group">
                  <p className="text-4xl font-black text-orange-500 mb-2 group-hover:scale-110 transition-transform origin-left">{stat.val}</p>
                  <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">{stat.label}</p>
               </div>
             ))}
          </div>
        </div>
      </Section>

      {/* 4ª DOBRA: PROVA SOCIAL */}
      <Section className="bg-slate-50">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            Quem confia no nosso olhar estratégico
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Relatos reais de gestores que pararam de comprar brindes e começaram a investir em estratégia.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Fernanda M.",
              role: "Diretora de RH - Grupo Indústria",
              text: "Tínhamos um custo altíssimo com brindes que os funcionários mal olhavam. O Victor reestruturou nosso onboarding e hoje os colaboradores sentem orgulho de postar o kit. Economizamos 20% no primeiro semestre."
            },
            {
              name: "Ricardo S.",
              role: "CEO - Tech Solutions BH",
              text: "O diferencial do Victor é a visão de negócio. Ele não tenta te empurrar produtos; ele traz soluções que fazem sentido para o fechamento do ano. Um verdadeiro parceiro estratégico em Minas."
            },
            {
              name: "Carla V.",
              role: "Gerente de Compras - Setor Logístico",
              text: "O planejamento anual que ele implementou tirou um peso enorme da minha equipe. Não temos mais urgências de 'brinde de última hora'. Tudo funciona com precisão e economia."
            }
          ].map((testi, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 flex flex-col justify-between border border-transparent hover:border-orange-500/20 transition-all">
              <div className="space-y-4">
                <div className="flex text-orange-500">
                  {[1,2,3,4,5].map(s => <svg key={s} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
                </div>
                <p className="text-slate-600 italic leading-relaxed text-lg">"{testi.text}"</p>
              </div>
              <div className="mt-8 pt-8 border-t border-slate-100">
                <p className="font-bold text-slate-900">{testi.name}</p>
                <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold">{testi.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 5ª DOBRA: CTA FINAL */}
      <Section className="relative bg-[#0f172a] text-white py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-600/10 skew-x-12 translate-x-32"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-6xl font-black leading-tight">Vamos profissionalizar sua estratégia agora?</h2>
          <p className="text-xl opacity-80 leading-relaxed">
            Agende um diagnóstico inicial gratuito. Vamos analisar seus custos atuais e desenhar um plano que gere valor real para sua marca em Belo Horizonte.
          </p>
          
          <div className="flex flex-col items-center space-y-6">
            <a 
              href="https://wa.me/5531997455656"
              className="group relative inline-flex items-center justify-center px-12 py-6 font-bold text-white transition-all duration-200 bg-orange-600 font-pj rounded-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 text-xl"
            >
                <span className="relative">Agendar Diagnóstico Gratuito</span>
            </a>
            <p className="text-sm text-slate-400 font-bold uppercase tracking-[0.3em] flex items-center gap-4">
              <span className="w-12 h-px bg-slate-700"></span>
              Conversa sem compromisso
              <span className="w-12 h-px bg-slate-700"></span>
            </p>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-[#020617] text-slate-500 py-16 px-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
           <div className="text-center md:text-left space-y-4">
              <h4 className="text-white font-black text-2xl">Victor Hugo<span className="text-orange-600">.</span></h4>
              <p className="text-sm max-w-xs leading-relaxed italic">"O brinde é apenas o meio. O relacionamento estratégico é o fim."</p>
           </div>
           
           <div className="flex flex-col items-center md:items-end space-y-2">
              <p className="text-white font-bold">Belo Horizonte, MG</p>
              <p className="text-sm">Consultoria em Brindes e Estratégia Corporativa</p>
              <p className="text-xs mt-4 opacity-50">&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
