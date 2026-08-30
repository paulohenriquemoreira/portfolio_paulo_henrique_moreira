import {
  FaCode,
  FaCubes,
  FaDesktop,
  FaExchangeAlt,
  FaRocket,
  FaSyncAlt,
  FaTools,
} from "react-icons/fa";

// Importa os ícones das tecnologias já utilizadas.
import html5Icon from "../assets/icons/html5.svg";
import cssIcon from "../assets/icons/css.svg";
import sassIcon from "../assets/icons/sass.svg";
import javascriptIcon from "../assets/icons/javascript.svg";
import reactIcon from "../assets/icons/react.svg";
import nodejsIcon from "../assets/icons/nodejs.svg";
import outsystemsIcon from "../assets/icons/outsystems.svg";
import apiIcon from "../assets/icons/api.svg";
import postmanIcon from "../assets/icons/postman.svg";
import sqliteIcon from "../assets/icons/sqlite.svg";
import gitIcon from "../assets/icons/git.svg";
import githubIcon from "../assets/icons/github.svg";
import photoshopIcon from "../assets/icons/photoshop.svg";
import illustratorIcon from "../assets/icons/illustrator.svg";
import wordpressIcon from "../assets/icons/wordpress.svg";

// Importa os ícones das tecnologias que estão em processo de aprofundamento.
import mysqlIcon from "../assets/icons/mysql.svg";
import postgresqlIcon from "../assets/icons/postgresql.svg";
import typescriptIcon from "../assets/icons/typescript.svg";
import iaIcon from "../assets/icons/ia.svg";
import figmaIcon from "../assets/icons/figma.svg";
import tailwindIcon from "../assets/icons/tailwindcss.svg";
import bootstrapIcon from "../assets/icons/bootstrap.svg";

// Importa as imagens WebP utilizadas no carrossel de projetos.
import ongApoioPlenoImage from "../assets/projetos/ongapoiopleno.webp";
import apiOngApoioPlenoImage from "../assets/projetos/apiongapoiopleno.webp";
import sistemaGestaoAbrigosImage from "../assets/projetos/sistemagestaoabrigos.webp";
import apiSistemaGestaoAbrigosImage from "../assets/projetos/apisistemagestaoabrigos.webp";
import portfolioRodrigoImage from "../assets/projetos/portfoliorodrigo.webp";
import aplicacaoNikelImage from "../assets/projetos/aplicacaonikel.webp";
import genesisAirImage from "../assets/projetos/genesisair.webp";

// Centraliza a navegação para manter a mesma ordem no cabeçalho e no rodapé.
export const navigation = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#about" },
  { label: "Serviços", href: "#services" },
  { label: "Projetos", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contato", href: "#contact" },
];

// Centraliza os diferenciais apresentados na seção Sobre.
export const aboutFeatures = [
  {
    title: "Front-End Development",
    description:
      "Interfaces responsivas, modernas e orientadas à experiência do usuário.",
    icon: FaCode,
  },
  {
    title: "OutSystems Development",
    description:
      "Desenvolvimento e modernização de aplicações corporativas em OutSystems.",
    icon: FaCubes,
  },
  {
    title: "Full Stack Integration",
    description:
      "Integração entre front-end, APIs REST, Node.js, Express e bancos de dados.",
    icon: FaExchangeAlt,
  },
  {
    title: "UX, Quality & Performance",
    description:
      "Usabilidade, acessibilidade, performance, testes e melhoria contínua.",
    icon: FaRocket,
  },
];

// Centraliza os serviços para separar conteúdo da camada de apresentação.
export const services = [
  {
    title: "Interfaces Responsivas",
    description:
      "Desenvolvimento de telas modernas para desktop, tablet e mobile, com foco em clareza, usabilidade e consistência visual.",
    icon: FaDesktop,
  },
  {
    title: "Modernização de Sistemas",
    description:
      "Evolução de aplicações existentes, melhoria de navegação, padronização visual e ajustes de experiência do usuário.",
    icon: FaSyncAlt,
  },
  {
    title: "Integração com APIs",
    description:
      "Conexão entre interfaces e serviços REST para consumo, envio e tratamento de dados entre sistemas.",
    icon: FaExchangeAlt,
  },
  {
    title: "Manutenção & Evolução",
    description:
      "Correção de bugs, melhorias contínuas, revisão de código e evolução de funcionalidades já existentes.",
    icon: FaTools,
  },
];

// Mantém as tecnologias já utilizadas com a cor associada à identidade de cada ferramenta.
export const technologies = [
  { name: "HTML5", icon: html5Icon, color: "#E34F26" },
  { name: "CSS3", icon: cssIcon, color: "#1572B6" },
  { name: "Sass", icon: sassIcon, color: "#CC6699" },
  { name: "JavaScript", icon: javascriptIcon, color: "#F7DF1E" },
  { name: "React", icon: reactIcon, color: "#61DAFB" },
  { name: "Node.js", icon: nodejsIcon, color: "#339933" },
  { name: "OutSystems", icon: outsystemsIcon, color: "#FF0303" },
  {
    name: "API REST",
    icon: apiIcon,
    // Utiliza verde como identidade visual porque API REST não possui uma marca única oficial.
    color: "#22C55E",
  },
  { name: "Postman", icon: postmanIcon, color: "#FF6C37" },
  { name: "SQLite", icon: sqliteIcon, color: "#003B57" },
  { name: "Git", icon: gitIcon, color: "#F05032" },
  {
    name: "GitHub",
    icon: githubIcon,
    // Utiliza branco para manter contraste adequado sobre o fundo escuro.
    color: "#FFFFFF",
  },
  { name: "Photoshop", icon: photoshopIcon, color: "#31A8FF" },
  { name: "Illustrator", icon: illustratorIcon, color: "#FF9A00" },
];

// Mantém em um grupo separado as tecnologias que estão em processo de aprofundamento.
export const learningTechnologies = [
  { name: "MySQL", icon: mysqlIcon, color: "#4479A1" },
  { name: "PostgreSQL", icon: postgresqlIcon, color: "#4169E1" },
  { name: "TypeScript", icon: typescriptIcon, color: "#3178C6" },
  {
    name: "IA",
    icon: iaIcon,
    // Utiliza roxo como identidade visual porque Inteligência Artificial não possui uma cor oficial única.
    color: "#A855F7",
  },
  { name: "Figma", icon: figmaIcon, color: "#F24E1E" },
  { name: "Tailwind CSS", icon: tailwindIcon, color: "#06B6D4" },
  { name: "Bootstrap", icon: bootstrapIcon, color: "#7952B3" },
  { name: "Wordpress", icon: wordpressIcon, color: "#2496ED" },
];

// Centraliza os dados utilizados pelo carrossel de projetos.
export const projects = [
  {
    title: "ONG Apoio Pleno",
    description:
      "Aplicação Full Stack com interface responsiva integrada a uma API REST, desenvolvida para apoiar a gestão de beneficiários, equipamentos, empréstimos, manutenções, doações e entregas da ONG Apoio Pleno.",
    image: ongApoioPlenoImage,
    alt:
      "Dashboard do sistema ONG Apoio Pleno com menu para gestão de beneficiários, equipamentos, empréstimos, manutenções, doações e entregas.",
    technologies: [
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "API REST",
      "Vercel",
    ],
    link:
      "https://github.com/paulohenriquemoreira/ONG_Apoio_Pleno_Front",
    linkType: "github",
    linkLabel: "Ver no GitHub",
  },
  {
    title: "API — ONG Apoio Pleno",
    description:
      "API RESTful desenvolvida para digitalizar e centralizar os processos operacionais da instituição, estruturando o controle de beneficiários, equipamentos, empréstimos, manutenções, doações, entregas e estoque.",
    image: apiOngApoioPlenoImage,
    alt:
      "Documentação da API REST da ONG Apoio Pleno exibindo endpoints de beneficiários, empréstimos, equipamentos, manutenções, doações, entregas e autenticação.",
    technologies: [
      "Node.js",
      "Express.js",
      "Postman",
      "SQLite",
      "Render",
    ],
    link:
      "https://github.com/paulohenriquemoreira/ONG_Apoio_Pleno_API",
    linkType: "github",
    linkLabel: "Ver no GitHub",
  },
  {
    title: "Sistema de Gestão de Abrigos",
    description:
      "Aplicação Full Stack responsiva integrada a uma API REST para gestão de vagas em abrigos, consulta de unidades e registro e localização de pessoas desaparecidas em cenários de emergência.",
    image: sistemaGestaoAbrigosImage,
    alt:
      "Tela inicial do Sistema de Gestão de Abrigos apresentando opções para consultar abrigos e registrar pessoas desaparecidas.",
    technologies: [
      "JavaScript",
      "React.js",
      "Sass",
      "API REST",
      "Netlify",
    ],
    link:
      "https://github.com/paulohenriquemoreira/projeto_fullstack_do_sistema_de_gestao_de_abrigos",
    linkType: "github",
    linkLabel: "Ver no GitHub",
  },
  {
    title: "API — Sistema de Gestão de Abrigos",
    description:
      "API REST desenvolvida para estruturar e disponibilizar dados de abrigos e pessoas, apoiando a gestão de vagas e agilizando a localização de pessoas desaparecidas em situações de emergência.",
    image: apiSistemaGestaoAbrigosImage,
    alt:
      "Documentação da API do Sistema de Gestão de Abrigos exibindo endpoints para cadastro, consulta, atualização e exclusão de abrigos e pessoas.",
    technologies: [
      "Node.js",
      "Express.js",
      "Postman",
      "SQLite",
      "Render",
    ],
    link:
      "https://github.com/paulohenriquemoreira/projeto_api_sistema_de_gestao_de_abrigos",
    linkType: "github",
    linkLabel: "Ver no GitHub",
  },
  {
    title: "Portfólio Rodrigo Nascimento",
    description:
      "Projeto real desenvolvido para apresentar profissionalmente Rodrigo Nascimento, Analista de Business Intelligence (BI), reunindo perfil, competências, projetos e canais de contato em uma experiência moderna e responsiva.",
    image: portfolioRodrigoImage,
    alt:
      "Página inicial do portfólio profissional de Rodrigo Nascimento, Analista de Business Intelligence, com apresentação pessoal e botão de contato.",
    technologies: [
      "JavaScript",
      "React.js",
      "Sass",
      "Vercel",
    ],
    link:
      "https://github.com/Rodriggo1987/Portfolio-Rodrigo-cerqueira",
    linkType: "github",
    linkLabel: "Ver no GitHub",
  },
  {
    title: "Aplicação Nikel",
    description:
      "Aplicação web desenvolvida para auxiliar na organização de finanças pessoais, permitindo ao usuário acompanhar movimentações financeiras e administrar seu dinheiro de forma simples e intuitiva.",
    image: aplicacaoNikelImage,
    alt:
      "Tela de login da aplicação financeira Nikel com formulário de acesso e identidade visual da plataforma.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Vercel",
    ],
    link:
      "https://github.com/paulohenriquemoreira/aplicacao-nikel",
    linkType: "github",
    linkLabel: "Ver no GitHub",
  },
  {
    title: "Site Gênesis Air",
    description:
      "Projeto real de site institucional desenvolvido em WordPress com Elementor para a Gênesis Air, apresentando os serviços da empresa e facilitando o acesso aos canais de contato e solicitação de orçamento.",
    image: genesisAirImage,
    alt:
      "Página inicial do site institucional da Gênesis Air com apresentação da empresa, menu de navegação, serviços e botão para solicitação de orçamento.",
    technologies: [
      "WordPress",
      "Elementor",
    ],
    link: "https://genesisair.com.br/",
    linkType: "demo",
    linkLabel: "Visitar site",
  },
];