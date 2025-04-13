import Image from "next/image"
import { Mail, Linkedin, Globe, Phone } from "lucide-react"

export default function DesignerResume() {
  return (
    <div className="min-h-screen bg-[#f5f2e8] p-4 md:p-8 lg:p-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="flex justify-between items-start mb-12">
          <div className="text-pink-500">
            <h3 className="text-sm md:text-base">Alessandra Sanches</h3>
          </div>
          <div className="flex gap-1">
            <span className="text-pink-500">+</span>
            <span className="text-pink-500">+</span>
            <span className="text-pink-500">+</span>
          </div>
        </header>

        {/* Title Section */}
        <div className="relative mb-16">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
            FULL STACK
            <br />
            DEVELOPER
          </h1>
          <div className="absolute top-8 md:top-12 right-32 md:right-64 rotate-12">
            <div className="bg-pink-400 text-white px-6 py-1 rounded-full text-sm font-medium">CURRÍCULO</div>
          </div>
          <div className="absolute top-24 md:top-32 right-16 md:right-32">
            <span className="text-2xl">✨</span>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-8 top-1/3">
          <div className="flex flex-col gap-1">
            <span className="text-pink-500">+</span>
            <span className="text-pink-500">+</span>
            <span className="text-pink-500">+</span>
          </div>
        </div>

        <div className="absolute right-8 bottom-1/3">
          <div className="flex gap-1">
            <span className="text-pink-500">+</span>
            <span className="text-pink-500">+</span>
            <span className="text-pink-500">+</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Left Column - Profile & Skills */}
          <div>
            <div className="bg-white rounded-lg p-4 mb-8 shadow-sm">
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/alessandra.perfil.jpg?height=192&width=192"
                    alt="Alessandra Sanches"
                    width={192}
                    height={192}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2">Alessandra Sanches</h3>
                <div className="flex items-center gap-2 text-sm mb-2">
                  <Linkedin size={14} />
                  <a href="https://www.linkedin.com/in/als-sanches/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  LinkedIn
                </a>
                </div>
                <div className="flex items-center gap-2 text-sm mb-2">
                  <Globe size={14} />
                  <a href="https://www.behance.net/alssanches" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Behance
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm mb-2">
                  <Mail size={14} />
                  <a href="mailto:als.sanches@outlook.com" className="hover:underline">
                    als.sanches@outlook.com
                  </a>  
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone size={14} />
                  <a href="https://wa.me/551194211473" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  (11) 94211-4973
                </a>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="relative mb-4">
                <h2 className="text-2xl font-bold">HABILIDADES TÉCNICAS</h2>
                <div className="absolute -bottom-2 left-0 w-32 h-1 bg-pink-400"></div>
              </div>

              <div className="mt-6">
                <h3 className="font-bold mb-2">Front-end:</h3>
                <p className="text-sm mb-4">React.js, TypeScript, HTML/CSS</p>

                <h3 className="font-bold mb-2">Back-end:</h3>
                <p className="text-sm mb-4">PHP, Laravel, PostgreSQL</p>

                <h3 className="font-bold mb-2">Cloud:</h3>
                <p className="text-sm mb-4">AWS (CloudFront, Lambda, DynamoDB)</p>

                <h3 className="font-bold mb-2">Design:</h3>
                <p className="text-sm mb-4">Figma (Expert), Wireframing, Testes A/B, Jornada do Usuário</p>

                <h3 className="font-bold mb-2">Soft Skills:</h3>
                <p className="text-sm">Gestão Ágil, Atendimento ao Cliente, Resolução de Problemas</p>
              </div>
            </div>

            <div className="mb-8">
              <div className="relative mb-4">
                <h2 className="text-2xl font-bold">FORMAÇÃO</h2>
                <div className="absolute -bottom-2 left-0 w-32 h-1 bg-pink-400"></div>
              </div>

              <div className="mt-6">
                <h3 className="font-bold mb-1">FATEC Cotia</h3>
                <p className="text-sm mb-4">
                  Desenvolvimento de Software Multiplataforma | Noturno
                  <br />
                  Conclusão em 06.2026
                </p>

                <h3 className="font-bold mb-1">ESAMC</h3>
                <p className="text-sm">Bacharelado em Design | jan 2019 - jan 2022</p>
              </div>
            </div>

            <div>
              <div className="relative mb-4">
                <h2 className="text-2xl font-bold">IDIOMAS</h2>
                <div className="absolute -bottom-2 left-0 w-32 h-1 bg-pink-400"></div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <div className="bg-pink-400 text-white text-xs px-3 py-1 rounded-full">Português (Nativo)</div>
                <div className="bg-pink-400 text-white text-xs px-3 py-1 rounded-full">Inglês (Conversação)</div>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="mb-8">
              <h2 className="text-4xl font-black mb-2">Olá!</h2>
              <div className="w-16 h-2 bg-pink-400 mb-6 rounded-full"></div>
              <p className="text-sm leading-relaxed mb-6">
                Profissional multifacetado com 3+ anos de experiência combinando desenvolvimento full stack (React.js,
                PHP, Laravel, AWS) e design de UX/UI (Figma, testes A/B, jornada do usuário). Expertise em projetos
                end-to-end, desde wireframes até infraestrutura cloud, com foco em performance e experiência intuitiva.
              </p>
            </div>

            <div className="mb-8">
              <div className="relative mb-4">
                <h2 className="text-2xl font-bold">EXPERIÊNCIA PROFISSIONAL</h2>
                <div className="absolute -bottom-2 left-0 w-32 h-1 bg-pink-400"></div>
              </div>

              <div className="mt-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold">Dry Telecom (Barueri, SP)</h3>
                  <p className="text-pink-500 text-sm">Set 2024 – Atual</p>
                </div>
                <p className="font-medium mb-2">Desenvolvedor Full Stack</p>
                <ul className="list-disc pl-5 text-sm space-y-1 mb-6">
                  <li>
                    Arquitetura de soluções full stack com React.js + TypeScript (front) e Laravel + PostgreSQL (back).
                  </li>
                  <li>
                    Otimização de performance com AWS: CloudFront (CDN), Lambda (serverless) e DynamoDB (banco NoSQL).
                  </li>
                  <li>Design de interfaces responsivas e prototipagem de wireframes, garantindo UX intuitivo.</li>
                </ul>
              </div>

              <div className="mt-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold">Flip.net</h3>
                  <p className="text-pink-500 text-sm">Mar 2024 – Set 2024</p>
                </div>
                <p className="font-medium mb-2">Estagiário de Suporte Técnico & UX</p>
                <ul className="list-disc pl-5 text-sm space-y-1 mb-6">
                  <li>Suporte a clientes + gestão de banco de dados.</li>
                  <li>Colaboração em wireframes e melhoria de usabilidade em 2 produtos SaaS.</li>
                </ul>
              </div>

              <div className="mt-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold">Cash.in (Híbrido)</h3>
                  <p className="text-pink-500 text-sm">Abr 2022 – Mai 2023</p>
                </div>
                <p className="font-medium mb-2">UX Designer (Part-time)</p>
                <ul className="list-disc pl-5 text-sm space-y-1 mb-6">
                  <li>Redesenho de fluxos de usuário, reduzindo etapas de cadastro em 40%.</li>
                  <li>Pesquisas de usuário + questionários para realinhar estratégia de produto.</li>
                </ul>
              </div>

              <div className="mt-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold">Agência Manti (Freelance Remoto)</h3>
                  <p className="text-pink-500 text-sm">Set 2021 – Ago 2022</p>
                </div>
                <p className="font-medium mb-2">Designer</p>
                <ul className="list-disc pl-5 text-sm space-y-1 mb-6">
                  <li>Desenvolvimento de wireframes e UI para clientes internacionais.</li>
                  <li>Produção gráfica de materiais para eventos (100+ peças entregues).</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="relative mb-4">
                <h2 className="text-2xl font-bold">CERTIFICAÇÕES</h2>
                <div className="absolute -bottom-2 left-0 w-32 h-1 bg-pink-400"></div>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold mb-3 bg-black text-white inline-block px-3 py-1 rounded-full text-sm">
                    Cloud & DevOps
                  </h3>
                  <ul className="list-disc pl-5 text-sm space-y-2">
                    <li>AWS Certified Cloud Practitioner (DIO, Jan/2024) - Fundamentos em EC2, S3, IAM</li>
                    <li>Azure Cloud: Servidor + Banco de Dados (Alura, Nov/2024) - Deploy de aplicações escaláveis</li>
                    <li>Formação Linux Fundamentals (DIO, Jan/2024)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-3 bg-black text-white inline-block px-3 py-1 rounded-full text-sm">
                    Frontend & CSS
                  </h3>
                  <ul className="list-disc pl-5 text-sm space-y-2">
                    <li>SASS com Vite (Alura, Nov/2024) - Otimização de fluxo CSS</li>
                    <li>React: Primeira Página Web (Alura, Dez/2022)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-3 bg-black text-white inline-block px-3 py-1 rounded-full text-sm">
                    Backend & Banco de Dados
                  </h3>
                  <ul className="list-disc pl-5 text-sm space-y-2">
                    <li>Spring Boot 3: API Rest Java (Alura, Nov/2022)</li>
                    <li>SQL Fundamentals (LinkedIn, Abr/2022)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-3 bg-black text-white inline-block px-3 py-1 rounded-full text-sm">
                    UX/UI Design
                  </h3>
                  <ul className="list-disc pl-5 text-sm space-y-2">
                    <li>UI Design Avançado (Origamid, Nov/2023) - Figma + Testes A/B</li>
                    <li>Formação UX Design (Alura, Abr/2022) - Jornada do usuário + pesquisa</li>
                    <li>Design System (Alura, Out/2022) - Componentes reutilizáveis</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-3 bg-black text-white inline-block px-3 py-1 rounded-full text-sm">
                    QA & Métodos Ágeis
                  </h3>
                  <ul className="list-disc pl-5 text-sm space-y-2">
                    <li>Quality Assurance: Gestão de Bugs (Alura)</li>
                    <li>Decola Tech Avanade 2024 (DIO, Dez/2023) - .NET + boas práticas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
