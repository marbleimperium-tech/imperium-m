# 🏛️ Império Marble — Importação e Exportação de Mármores & Granitos

> Catálogo B2B Internacional de Rochas Ornamentais de Alto Padrão (Quartzitos, Mármores, Granitos e Dolomíticos).

Plataforma digital corporativa e catálogo técnico desenvolvido para marmorarias, construtoras, escritórios de arquitetura e importadores globais. Apresenta o inventário de chapas e lotes exclusivos, especificações técnicas detalhadas, simulador de cotação B2B (RFQ) e atendimento comercial integrado via WhatsApp e E-mail.

---

## 📞 Contato & Informações Institucionais

| Dado | Detalhe |
| :--- | :--- |
| **Razão Social** | Império Marble Importação e Exportação Ltda |
| **Nome Fantasia** | Império Marble Wholesale & Export |
| **CNPJ** | `69.081.787/0001-60` |
| **Telefone** | [**+55 (27) 99762-5108**](tel:+5527997625108) |
| **WhatsApp Oficial** | [**+55 (27) 99762-5108** (Abrir conversa)](https://wa.me/5527997625108) |
| **E-mail Comercial** | [sales@marbleimperium.com](mailto:sales@marbleimperium.com) |
| **Endereço** | Av. Padre José de Anchieta, 2165, Sala 12 - Aeroporto, Guarapari - ES, CEP 29216-015, Brasil |
| **Horário de Atendimento** | Segunda a Sexta: 08:00 às 18:00 \| Sábado: 08:00 às 12:00 (BRT) |

---

## ✨ Funcionalidades da Plataforma

- **💎 Catálogo Técnico de Rochas**:
  - Filtros avançados por categoria (Quartzitos Exóticos, Mármores Nobres, Granitos Nobres, Rochas Dolomíticas), tonalidades e acabamentos (*Polido, Levigado, Escovado*).
  - Modal com ficha técnica detalhada por chapa/lote: espessura (2cm, 3cm), dimensões médias, dureza Mohs, taxa de absorção de água, densidade e indicações de aplicação.

- **📑 Sistema de Cotação B2B (RFQ)**:
  - Formulário completo para solicitação de orçamento por metro quadrado ($/m² ou R$/m²) ou por container/lote fechado.
  - Exportação e envio instantâneo com um clique para o **WhatsApp Comercial (+55 27 99762-5108)** com os dados pré-preenchidos.

- **🌍 Internacionalização Completa (i18n)**:
  - Suporte nativo em 4 idiomas: **Português (PT)**, **Inglês (EN)**, **Espanhol (ES)** e **Italiano (IT)**.

- **🤖 Assistente Especialista com Inteligência Artificial**:
  - Integração com Google Gemini para tirar dúvidas de especificadores e arquitetos sobre resistência mecânica, paginação de veios, cuidados com manutenção e viabilidade de projetos.

- **📱 Design Ultra-Premium & Responsivo**:
  - Identidade visual sofisticada com temática dark mode e detalhes dourados/âmbar, otimizado para dispositivos móveis, tablets e telas widescreen.

---

## 🛠️ Tecnologias Utilizadas

- **Frontend**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6+](https://vitejs.dev/)
- **Estilização**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Ícones**: [Lucide React](https://lucide.dev/)
- **Animações**: [Motion](https://motion.dev/)
- **Inteligência Artificial**: [@google/genai](https://www.npmjs.com/package/@google/genai) (Google Gemini API)

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) versão 18 ou superior
- Gerenciador de pacotes `npm`

### 1. Clonar e Instalar Dependências
```bash
git clone https://github.com/imperium-marble/imperio-marble.git
cd império-marble---importação-e-exportação-de-mármores-e-granitos
npm install
```

### 2. Configurar Variáveis de Ambiente
Crie ou edite o arquivo `.env.local` na raiz do projeto:
```env
GEMINI_API_KEY=sua_chave_gemini_aqui
```

### 3. Executar o Servidor de Desenvolvimento
```bash
npm run dev
```
Acesse `http://localhost:3000` no seu navegador.

### 4. Build de Produção e Verificação
```bash
# Validar tipagem TypeScript
npm run lint

# Gerar bundle otimizado de produção
npm run build

# Pré-visualizar o build localmente
npm run preview
```

---

## 📁 Estrutura de Diretórios

```
├── public/                 # Imagens e ativos estáticos
├── src/
│   ├── components/         # Componentes modulares (Navbar, Catalog, QuoteModal, etc.)
│   ├── data/               # Banco de dados de pedras e informações da empresa (COMPANY_INFO)
│   ├── i18n/               # Dicionários de tradução (PT, EN, ES, IT)
│   ├── services/           # Serviços de integração (Gemini AI API)
│   ├── App.tsx             # Componente raiz da aplicação
│   ├── main.tsx            # Ponto de entrada React
│   └── index.css           # Estilos globais e tokens Tailwind
├── index.html              # Template HTML com meta tags SEO
├── package.json            # Scripts e dependências
└── vite.config.ts          # Configuração do Vite e plugins
```

---

## ⚖️ Licença

Copyright © 2026 **Império Marble Importação e Exportação Ltda**. Todos os direitos reservados.
