 🏦 Banco Amigo: Inclusão Digital para a Terceira Idade

  O Banco Amigo é um protótipo funcional de aplicativo bancário desenvolvido especificamente para idosos. O
  objetivo central é reduzir a ansiedade tecnológica e proporcionar autonomia financeira para pessoas com
  pouca familiaridade com interfaces digitais complexas.

  👵 A Persona: Dona Maria (68 anos)
  Dona Maria representa milhões de brasileiros que:
   - Têm medo de "clicar errado" e perder dinheiro.
   - Sentem vergonha de pedir ajuda constante aos filhos/netos.
   - Preferem interfaces que lembrem o mundo físico (comprovantes, botões grandes).
   - Utilizam o WhatsApp como principal ferramenta de comunicação.

  🚀 Funcionalidades e Soluções de UX

  🔐 Login Simplificado
   - Campo de CPF com Máscara: Facilita a digitação sem erros.
   - Dicas de Segurança: Alertas constantes contra golpes para aumentar a confiança.

  🏠 Home Acessível
   - Saudação Humanizada: "Boa tarde, Dona Maria 👋".
   - Controle de Privacidade: Opção de ocultar o saldo com ícones lúdicos (👁️/🙈).
   - Grade de Ações Gigante: Botões com ícones e textos claros, evitando toques acidentais.

  📊 Extrato Organizado
   - Linguagem Natural: Em vez de siglas bancárias, usamos "Recebido às..." ou "Pago às...".
   - Identificação por Ícones: Uso de emojis (🛒, 💊, 💡) para reconhecimento rápido do gasto.

  📄 Fluxo de Pagamento Guiado (3 Passos)
   - Passo 1 (Identificação): Prioridade para o uso da câmera (mais fácil que digitar 47 números).
   - Passo 2 (Confirmação): Destaque visual no valor e no nome de quem recebe. Exibição do "Saldo após pagar".
   - Passo 3 (Sucesso): Validação emocional ("Ótimo trabalho!") e opção de enviar comprovante via WhatsApp.

  🛠️ Tecnologias Utilizadas
   - React 18 (Com Hooks para gerenciamento de estados)
   - TypeScript (Garantia de tipagem e menos erros no código)
   - Styled Components (CSS-in-JS para um Design System consistente)
   - React Router Dom (Navegação fluida entre telas)
   - Google Fonts (Nunito): Fonte arredondada de alta legibilidade.

  🎨 Design System (Acessibilidade)
   - Tipografia: Tamanho base de 18px (acima do padrão de 16px) para leitura facilitada.
   - Affordance: Botões com bordas arredondadas e feedbacks visuais de clique (scale down).
   - Cores: Paleta focada em Azul (Confiança), Verde (Segurança) e Amarelo (Atenção/Ajuda).

  📦 Como rodar o projeto
   1. Clone este repositório: git clone https://github.com/chagasbarros/bancoAmigo.git
   2. Instale as dependências: npm install
   3. Inicie o servidor: npm run dev

  ---

  💡 Próximos Passos (Roadmap)
   - [ ] Implementação de comandos de voz para navegação.
   - [ ] Integração com API real para pagamentos.
   - [ ] Modo "Ajudante Remoto" para filhos visualizarem extratos.

  ---
