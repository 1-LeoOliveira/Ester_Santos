# ARQUÉTIPO v1.0

**Template de landing page premium para profissional liberal / consultório / escritório.**

Nome do template: **ARQUÉTIPO**
Origem: o site de Ester Santos (psicóloga clínica) foi a primeira aplicação.
Uso: trocar o briefing e rodar o prompt mestre em outro cliente — mesma estrutura, mesma qualidade, identidade visual e copy totalmente diferentes.

Perfil de cliente que esse template atende bem: psicólogo, nutricionista, advogado, dentista, fisioterapeuta, coach, arquiteto, personal, veterinário, contador — qualquer profissional que vende **confiança + atendimento 1:1** e converte por **WhatsApp**, não por e-commerce.

---

## 1. Como usar em 3 passos

1. Preencha o **Briefing** (seção 2). Tudo que estiver entre `{{ }}` vira texto real.
2. Copie o **Prompt Mestre** (seção 3) **já com o briefing colado dentro dele** e mande para o Claude Code, numa pasta vazia do cliente.
3. Rode os **prompts de ajuste** (seção 4) conforme o cliente for pedindo mudanças.

Material a pedir ao cliente **antes** de rodar o prompt:

- 1 a 3 fotos em alta (retrato vertical é o ideal para o hero);
- logo e/ou paleta de cores (print do Canva já serve);
- número de WhatsApp com DDD;
- registro profissional (CRP / OAB / CRN / CRO / CREFITO / CAU…);
- em 5 linhas: para quem ele atende e o que o cliente dele sente antes de procurá-lo.

---

## 2. Briefing (preencher antes de rodar)

```
NOME:                {{Ester Santos}}
PROFISSÃO:           {{Psicóloga Clínica}}
ESPECIALIDADE:       {{Abordagem Junguiana}}
REGISTRO:            {{CRP 10/13142}}
FORMAÇÃO:            {{Pós-graduação em Psicologia Clínica}}
PÚBLICO-ALVO:        {{Mulheres adultas em transição de identidade}}
FORMATO:             {{Atendimento 100% online}}
PAGAMENTO:           {{Particular}}
WHATSAPP (E.164):    {{5591991175199}}
WHATSAPP (exibição): {{(91) 99117-5199}}
INSTAGRAM:           {{@... ou "não tem"}}
E-MAIL:              {{... ou "não tem"}}
CIDADE/ENDEREÇO:     {{... ou "só online"}}

MANIFESTO (título do hero, 3 a 5 palavras):
{{O caminho de volta ao centro}}

TAGLINE (assinatura da marca, 1 linha):
{{Acolher o que transforma. Guiar o que permanece.}}

PALETA (hex + nome):
{{#A43A34 vermelho terra · #C56A4B terracota · #C9952D ouro queimado ·
  #F2E8DC areia · #5A433A marrom profundo}}

TIPOGRAFIA:
{{Cormorant Garamond (títulos) + Jost (texto)}}

SÍMBOLO DA MARCA (descrever em palavras, vira SVG):
{{anéis concêntricos que convergem para um centro dourado}}

AS 6 DORES DO PÚBLICO (frases que o cliente reconhece em si):
{{1... 2... 3... 4... 5... 6...}}

OS 4 PILARES DO MÉTODO:
{{1... 2... 3... 4...}}

AS 3 ETAPAS DO ATENDIMENTO:
{{1... 2... 3...}}

FOTOS DISPONÍVEIS: {{Foto 1.jpg — retrato vertical}}
CONSELHO / REGRA ÉTICA APLICÁVEL: {{CFP — proibido prometer resultado}}
```

---

## 3. PROMPT MESTRE — copie daqui

``````text
Construa uma landing page premium de página única para um profissional liberal,
seguindo EXATAMENTE a especificação abaixo. Trabalhe na pasta atual.

═══════════════════════════════════════════
BRIEFING DO CLIENTE
═══════════════════════════════════════════

[COLE AQUI O BLOCO DE BRIEFING PREENCHIDO]

═══════════════════════════════════════════
1. STACK — obrigatória, sem substituições
═══════════════════════════════════════════

React 18 + Vite 5 + Framer Motion 11 + Lenis (scroll suave).
CSS puro, escrito à mão, em três folhas separadas por responsabilidade.
NÃO use Tailwind, Bootstrap, styled-components, shadcn, MUI ou qualquer
biblioteca de UI pronta. NÃO use TypeScript. NÃO use Next.js.
vite.config.js com base: './' para funcionar em subpasta de qualquer host.

Estrutura de arquivos exata:

  index.html
  vite.config.js
  package.json
  README.md
  public/img/<cliente>-retrato.jpg
  src/main.jsx
  src/App.jsx
  src/animations.js
  src/data/site.js
  src/hooks/useSmoothScroll.js
  src/styles/base.css          (tokens, reset, tipografia, botões)
  src/styles/components.css    (loader, header, menu, marquee, flutuante, rodapé)
  src/styles/sections.css      (hero e cada seção)
  src/components/
    Logo.jsx  Icons.jsx  Loader.jsx  ScrollProgress.jsx  Header.jsx
    Hero.jsx  Marquee.jsx  About.jsx  Dores.jsx  Abordagem.jsx
    Processo.jsx  Faq.jsx  Contact.jsx  Footer.jsx  FloatingCTA.jsx
    Reveal.jsx

Ícones: um único Icons.jsx com SVGs inline (WhatsApp, seta, menu, fechar, mais,
aspas, monitor, calendário, escudo, brilho). Nenhuma biblioteca de ícones.

Código e nomes de variáveis em português (ex.: pronto, visivel, etapas, aberto).
Comentários curtos, só onde a intenção não é óbvia.

═══════════════════════════════════════════
2. FONTE ÚNICA DA VERDADE — src/data/site.js
═══════════════════════════════════════════

TODO conteúdo que muda com o tempo mora nesse arquivo e em nenhum outro:
nome, profissão, especialidade, registro, formação, tagline, manifesto,
telefone ({ e164, exibicao }), atendimento ({ formato, publico, pagamento }),
mensagem pré-escrita do WhatsApp, navLinks, palavras do marquee, dores,
pilares, etapas e FAQ.

Exporte também os links derivados:

  export const whatsappUrl = `https://wa.me/${site.telefone.e164}?text=${encodeURIComponent(site.mensagemWhatsapp)}`;
  export const telUrl = `tel:+${site.telefone.e164}`;

Nenhum componente pode ter telefone, nome ou texto de seção escrito direto no JSX
quando esse dado existe em site.js. Trocar de cliente tem que ser quase só trocar
esse arquivo, a paleta e a foto.

═══════════════════════════════════════════
3. TOKENS DE DESIGN — src/styles/base.css
═══════════════════════════════════════════

Declare em :root, a partir da paleta do briefing:
- a cor principal + duas variantes mais escuras (--x-escuro, --x-profundo);
- a cor de destaque + --destaque-claro e --destaque-profundo;
- o neutro claro de fundo e variações (--areia, --areia-2, --creme);
- derivadas de tinta: --tinta, --tinta-80, --tinta-60, --tinta-12, --linha;
- tipografia: --font-display (serifada elegante) e --font-sans (geométrica);
- ritmo: --shell: 1200px, --gutter (20px → 40px em ≥768px), --radius: 18px,
  --radius-lg: 30px, --header-h (76px → 90px);
- movimento: --ease: cubic-bezier(0.22, 1, 0.36, 1).

Classes utilitárias globais obrigatórias:
.shell (largura máxima + gutter), .section (padding vertical fluido com clamp),
.section--escura, .section--areia, .section__head, .section__lead,
.h2 (com .h2 em em itálico na cor de destaque e variante .h2--claro),
.eyebrow + .eyebrow__dot, .btn nas variantes --terra (principal, gradiente 135°),
--ouro (destaque), --ghost, --claro, --sm, .ico, .sr-only.

Tipografia fluida sempre com clamp(), nunca breakpoints manuais para tamanho de
fonte. Exemplo do h2: clamp(2.1rem, 1.3rem + 3.2vw, 3.6rem).

Fontes: carregue pelo Google Fonts com preconnect nos dois domínios e
display=swap. Se a fonte da identidade do cliente não tiver licença web gratuita,
escolha a substituta mais próxima e registre a troca no README.

═══════════════════════════════════════════
4. MARCA EM SVG — src/components/Logo.jsx
═══════════════════════════════════════════

O símbolo da marca é desenhado em SVG puro no código, NUNCA como imagem PNG/JPG.
Gere a geometria a partir da descrição do briefing, de preferência com um pequeno
cálculo paramétrico (um array de parâmetros → função que devolve o d do path),
para que o símbolo seja ajustável e animável traço a traço.

Exporte:
- Simbolo({ animado, className, strokeWidth }) — quando animado, os paths entram
  com pathLength: 0 → 1 escalonados, e o centro entra com scale e easing
  elástico. Usa stroke="currentColor" para herdar a cor do contexto.
- Logo({ variante }) com 'horizontal' | 'vertical' | 'compacta' — símbolo + nome
  em display + cargo entre dois pontinhos.

O mesmo símbolo é reaproveitado como marca d'água de fundo no hero e nas seções
escuras (strokeWidth ~1), como selo no Sobre e dentro dos cards de pilar.
O favicon é esse símbolo simplificado, inline como data:image/svg+xml no index.html.

═══════════════════════════════════════════
5. ANIMAÇÃO — src/animations.js + Reveal.jsx
═══════════════════════════════════════════

animations.js exporta: EASE = [0.22, 1, 0.36, 1], variantes fadeUp, fadeIn,
scaleIn, helper stagger(escalonamento, atraso) e
viewportPadrao = { once: true, margin: '-12% 0px -10% 0px' }.

Reveal.jsx é o componente usado por TODAS as seções:
<Reveal as="h2" className="h2" delay={0.05}> — initial/whileInView com opacity + y,
viewport padrão, tag dinâmica via motion[as], resto das props repassado.
Dentro de listas, o atraso é delay={0.06 * i} para escalonar.

Regra de ouro do movimento: tudo entra uma vez só (once: true), nada pisca, nada
sai da tela enquanto está sendo lido, nada depende de JS para ser legível.

═══════════════════════════════════════════
6. OS 5 ELEMENTOS QUE DÃO O "PREMIUM"
═══════════════════════════════════════════

(a) LOADER CINEMATOGRÁFICO — components/Loader.jsx
    Tela cheia na cor escura da marca. Sequência:
    1) o símbolo é desenhado traço a traço;
    2) o nome do cliente é escrito LETRA A LETRA (site.nome.split(''), cada letra
       entra com opacity + y + blur, passo de 0.075s) com um cursor piscando ao lado;
    3) profissão e especialidade entram em seguida;
    4) uma barra de progresso real sobe até 88% por tempo e só fecha em 100%
       quando window.load disparou E o tempo mínimo (~2600ms) passou —
       interpolação suave a cada frame, nunca salto;
    5) a cortina sobe com clipPath: inset(0% 0% 100% 0%) em ~1.15s.
    onExitComplete avisa o App, que só então libera o hero e o scroll.
    No App, um setTimeout de 7s é rede de segurança: se algo travar o loader,
    o site aparece do mesmo jeito.

(b) PARALLAX DE PROFUNDIDADE — Hero.jsx e About.jsx
    useScroll({ target: ref, offset: [...] }) + useTransform movendo foto e texto
    em velocidades diferentes (ex.: foto 10%, texto 16%). Só profundidade:
    NUNCA faça o conteúdo sumir ou desfocar enquanto ainda está na tela.

(c) TÍTULO EM MÁSCARA — Hero.jsx
    O h1 é quebrado em linhas; cada linha é um <span> com overflow hidden e um
    span interno que sobe de y: '110%' para '0%', escalonado em 0.11s. Uma
    palavra-chave da última linha vai em <em> (itálico, cor de destaque).

(d) FAIXA INFINITA — Marquee.jsx
    Palavras-chave da marca repetidas em dois grupos idênticos rolando em loop
    por transform: translateX em CSS (animation linear infinita), separadas por
    um pontinho. aria-hidden="true", pausa em prefers-reduced-motion.

(e) FIO DE PROGRESSO + CTA FLUTUANTE
    ScrollProgress.jsx: useScroll + useSpring controlando scaleX de uma barra de
    2px fixa no topo, na cor de destaque.
    FloatingCTA.jsx: botão de WhatsApp que entra com AnimatePresence depois de
    80% da altura da primeira tela e sobe 3px no hover.

═══════════════════════════════════════════
7. ESTRUTURA DA PÁGINA — nesta ordem
═══════════════════════════════════════════

 0. Loader + ScrollProgress + Header (fora do <main>)
 1. HERO          #topo      — eyebrow (profissão · registro), h1 manifesto,
                               lead, 2 CTAs (WhatsApp sólido + âncora ghost),
                               2 selos com ícone, foto em moldura com véu,
                               assinatura sobreposta, indicador "Role".
 2. MARQUEE                  — palavras-chave da marca.
 3. SOBRE         #sobre     — foto com parallax + selo com tagline | texto em
                               3 parágrafos, grade de 4 credenciais, CTA.
 4. PARA QUEM É   #para-quem — 6 cards numerados (01–06) com as dores do público
                               + bloco de fecho com CTA. Fundo areia.
 5. ABORDAGEM     #abordagem — SEÇÃO ESCURA. Marca d'água de fundo, 4 cards de
                               pilar com o símbolo, citação em blockquote.
 6. COMO FUNCIONA #processo  — <ol> com 3 etapas numeradas, 3 condições com ícone
                               (formato, frequência, pagamento), CTA.
 7. DÚVIDAS       #duvidas   — FAQ em acordeão, 6 perguntas, primeira aberta.
                               Grade 2 colunas: intro fixa | lista. Fundo areia.
 8. CONTATO       #contato   — SEÇÃO ESCURA. Título, lead, CTA de destaque +
                               telefone, 3 cartões de reforço.
 9. RODAPÉ                   — logo vertical + tagline | navegação | contato,
                               registro e formação; base com © e aviso legal.
10. FloatingCTA

O ritmo de fundo alterna: creme → areia → ESCURO → creme → areia → ESCURO.
Isso é o que cria a sensação de capítulos. Não quebre a alternância.

Cada seção abre com o mesmo trio: .eyebrow (rótulo em caixa alta espaçada com
pontinho) → .h2 (com uma palavra em <em>) → .section__lead.

Há um CTA de WhatsApp ao fim de cada bloco de argumentação (Sobre, Para quem é,
Como funciona, Contato), sempre com texto diferente, nunca repetido.

═══════════════════════════════════════════
8. CABEÇALHO E MENU — Header.jsx
═══════════════════════════════════════════

Header fixo que ganha a classe is-compact depois de 40px de scroll (fundo com
blur, altura menor, sombra sutil). No desktop: logo | links | CTA pequeno.
No mobile: logo | CTA | botão hambúrguer.

Menu mobile em tela cheia abrindo com clipPath: inset(0 0 100% 0), links
numerados (01, 02…) entrando escalonados, CTA no fim, fecha no clique, no Escape
e trava o scroll do body enquanto aberto (body.menu-open).

═══════════════════════════════════════════
9. SCROLL SUAVE — hooks/useSmoothScroll.js
═══════════════════════════════════════════

Lenis com duration: 1.15 e easing exponencial. O hook:
- não inicializa nada se prefers-reduced-motion: reduce;
- intercepta cliques em a[href^="#"] no documento e usa lenis.scrollTo com offset
  de -84px (altura do header);
- recebe enabled e trava o scroll (html.is-locked) enquanto o loader está na tela;
- limpa listener, rAF e instância no unmount.

═══════════════════════════════════════════
10. ACESSIBILIDADE — não negociável
═══════════════════════════════════════════

- prefers-reduced-motion: reduce zera animações e transições no CSS global E
  desliga o Lenis no JS.
- :focus-visible com outline de 2px na cor de destaque e offset de 3px.
- Todo botão de ícone tem aria-label; o acordeão usa aria-expanded; cada <nav>
  tem aria-label; decoração é aria-hidden="true".
- Toda imagem tem alt descritivo real e width/height explícitos.
- Contraste conferido: texto claro só sobre os tons escuros da paleta; se a cor
  principal não passar em AA sobre o fundo claro, use a variante escura no texto.
- A página inteira é legível e navegável por teclado sem JS de animação.

═══════════════════════════════════════════
11. SEO, PERFORMANCE E METADADOS — index.html
═══════════════════════════════════════════

- <html lang="pt-BR">, title no formato Nome | Profissão · Especialidade,
  meta description de 150–160 caracteres com público + método + registro.
- Open Graph completo (type, locale, title, description, image) + twitter:card.
- theme-color na cor principal da marca.
- Favicon SVG inline em data: (o símbolo simplificado).
- Google Fonts com preconnect nos dois domínios + display=swap.
- JSON-LD schema.org com o @type correto da profissão, incluindo name,
  description, image, telephone, areaServed, availableLanguage e os campos
  específicos do tipo.
- Foto do hero: loading="eager" + fetchPriority="high"; todas as outras
  loading="lazy". Sempre com width/height para não causar layout shift.
- assetsInlineLimit: 4096 no build.

═══════════════════════════════════════════
12. REGRAS DE REDAÇÃO (COPY)
═══════════════════════════════════════════

O texto é metade do resultado. Siga estas regras:

- Fale com o cliente em segunda pessoa ("você"), nunca "nossos clientes".
- As 6 dores são FRASES DE RECONHECIMENTO, não serviços. O leitor tem que pensar
  "é exatamente isso". Cada uma: título curto na voz do leitor + 2 frases que
  descrevem a experiência por dentro, sem diagnosticar.
- Nada de superlativo vazio ("excelência", "soluções inovadoras", "o melhor").
  Nada de emoji no corpo do site.
- Frases curtas. Um travessão por parágrafo, no máximo.
- Todo CTA é um verbo na primeira pessoa do leitor ou um convite concreto:
  "Agendar primeira conversa", "Quero dar o primeiro passo",
  "Verificar horários disponíveis" — nunca "Clique aqui" ou "Saiba mais".
- A mensagem pré-escrita do WhatsApp já posiciona o lead:
  "Olá, {nome}! Vim pelo site e gostaria de saber mais sobre {serviço}."
- FAQ responde objeção, não curiosidade: formato do atendimento, para quem é,
  o que é o método, como é a primeira sessão, convênio/valores, pré-requisito.
- ÉTICA PROFISSIONAL: respeite o conselho de classe do briefing. Como regra
  geral nunca prometa resultado, cura, ganho de causa ou prazo; não use
  antes/depois; não use depoimento de paciente/cliente; mantenha o número de
  registro visível no hero e no rodapé.
- Rodapé de área da saúde leva aviso: o site é informativo, não substitui
  atendimento de emergência (no Brasil, CVV 188).

═══════════════════════════════════════════
13. ENTREGÁVEIS
═══════════════════════════════════════════

1. Projeto completo rodando com npm run dev e buildando sem warning.
2. README.md em português com: como rodar, tabela "onde mexer" (o que muda →
   qual arquivo), tabela da paleta com hex e variável, estrutura da página em
   lista numerada, seção "pontos que dependem de confirmação do cliente" com
   tudo que você assumiu, e a stack.
3. A foto do cliente tratada e renomeada em public/img/.
4. Ao final, liste em até 10 linhas o que foi assumido e precisa de confirmação
   (telefone, dados que faltaram, recorte da foto).

═══════════════════════════════════════════
14. COMO TRABALHAR
═══════════════════════════════════════════

Não peça confirmação a cada arquivo: entregue o site inteiro de uma vez,
funcionando, e só então levante as dúvidas em lista. Se faltar um dado do
briefing, assuma o mais provável, siga em frente e registre a suposição no README.
``````

— fim do prompt mestre —

---

## 4. Prompts de ajuste (depois da primeira entrega)

| Pedido do cliente | Prompt |
| --- | --- |
| Trocar cor | `Troque a cor principal para {{hex}} e recalcule as variantes escuro/profundo e as derivadas em base.css. Confira o contraste AA de todo texto sobre os novos fundos.` |
| Trocar foto | `Substitua a foto por {{arquivo}}, reenquadre no hero e no Sobre, atualize width/height e o og:image.` |
| Mais uma seção | `Adicione a seção "{{nome}}" entre {{A}} e {{B}}. O conteúdo vem de um novo array em site.js, usa Reveal, mantém o trio eyebrow/h2/lead e respeita a alternância de fundos.` |
| Depoimentos | `Adicione uma seção de depoimentos em carrossel após {{X}}, com array em site.js. Antes de escrever, confirme se o conselho de classe do cliente permite depoimento.` |
| Formulário | `Adicione um formulário de contato (nome, WhatsApp, mensagem) na seção contato, com validação nativa, estados de erro acessíveis e envio para {{Formspree / WhatsApp pré-preenchido}}.` |
| Loader mais rápido | `Reduza o tempo mínimo do loader para {{1800}}ms e o passo por letra para 0.05s.` |
| Sem loader | `Remova o Loader e libere o hero imediatamente, mantendo a animação de entrada do título.` |
| Pixel / Analytics | `Adicione {{Google Analytics 4 / Meta Pixel}} no index.html e dispare um evento em cada clique de CTA de WhatsApp.` |
| Multi-idioma | `Extraia os textos de site.js para site.pt.js e site.en.js e adicione um seletor de idioma no header.` |

---

## 5. Variações por nicho

Troque três coisas: paleta, `@type` do JSON-LD e os rótulos das seções.

| Nicho | JSON-LD `@type` | Paleta sugerida | "Para quem é" vira | "Abordagem" vira |
| --- | --- | --- | --- | --- |
| Psicólogo | `Psychologist` | terrosos, areia, ouro | Para quem é | A abordagem |
| Nutricionista | `Nutritionist` | verde oliva, creme, cobre | Você se identifica? | O método |
| Advogado | `Attorney` / `LegalService` | azul petróleo, grafite, dourado | Quando me procurar | Como atuo |
| Dentista | `Dentist` | azul claro, branco, menta | Seu caso | Tratamentos |
| Fisioterapeuta | `Physiotherapy` | verde água, areia, carvão | Suas queixas | O tratamento |
| Arquiteto | `ProfessionalService` | preto, concreto, latão | Seu projeto | Processo criativo |
| Personal | `HealthClub` | grafite, laranja, off-white | Seu momento | O treino |
| Veterinário | `VeterinaryCare` | verde, bege, terracota | Seu pet | O cuidado |
| Contador | `AccountingService` | azul marinho, cinza, verde | Sua empresa | Como trabalho |

Ajustes éticos por conselho:

- **CFP (psicologia):** sem promessa de resultado, sem depoimento de paciente, CRP visível.
- **OAB (advocacia):** sem captação de clientela, sem valores, sem resultado de causa, tom sóbrio — o site informa, não vende.
- **CFM / CRO / CRN (saúde):** sem antes-e-depois, sem promessa de cura, registro e responsável técnico visíveis.

---

## 6. Checklist de entrega

- [ ] `npm run build` sem erro nem warning
- [ ] Testado em 360px, 768px, 1280px e 1920px
- [ ] Todos os CTAs abrem o WhatsApp com a mensagem certa (teste no celular)
- [ ] Número conferido com o cliente — dígito por dígito
- [ ] Registro profissional conferido
- [ ] Nenhum "lorem" nem dado do cliente anterior sobrou — rode um grep pelo nome antigo
- [ ] Foto sem elemento de terceiros no enquadramento
- [ ] Teclado: Tab percorre a página inteira com foco visível
- [ ] `prefers-reduced-motion` ativado → nada se mexe e tudo continua legível
- [ ] Lighthouse mobile ≥ 90 em Performance e 100 em Acessibilidade
- [ ] OG image aparece no preview do WhatsApp
- [ ] Favicon aparece na aba
- [ ] README com a lista do que precisa de confirmação

---

## 7. Deploy

`npm run build` gera `dist/`. Como o projeto usa `base: './'`, basta subir a pasta:

- **Vercel / Netlify:** arrastar `dist/`, ou conectar o repositório (build `npm run build`, output `dist`).
- **Hostinger / cPanel:** subir o conteúdo de `dist/` para `public_html/` — funciona inclusive em subpasta.
- Domínio próprio: apontar o DNS e **forçar HTTPS** antes de entregar o link ao cliente.
