# Ester Santos — Psicóloga Clínica

Landing page premium para **Ester Santos**, psicóloga clínica com abordagem
Junguiana (CRP 10/13142). Atendimento online para mulheres adultas em processos
de transição e reconstrução da identidade.

## Rodar o projeto

```bash
npm install     # só na primeira vez
npm run dev     # ambiente de desenvolvimento (http://localhost:5174)
npm run build   # gera a versão de produção em dist/
npm run preview # visualiza a versão de produção
```

Para publicar, suba o conteúdo da pasta `dist/` (Vercel, Netlify, Hostinger,
qualquer hospedagem estática). O projeto usa caminhos relativos (`base: './'`),
então funciona também em subpastas.

## Onde mexer

Quase tudo o que muda com o tempo está em **um arquivo só**:

| O que                                    | Onde                      |
| ---------------------------------------- | ------------------------- |
| Nome, CRP, telefone, mensagem do WhatsApp | `src/data/site.js`        |
| Textos das seções (dores, pilares, FAQ)   | `src/data/site.js`        |
| Itens do menu                             | `src/data/site.js`        |
| Cores e tipografia                        | `src/styles/base.css`     |
| Símbolo da marca (traço)                  | `src/data/marca.js`       |
| Foto                                      | `public/img/`             |

## Identidade visual

Paleta oficial da marca, aplicada como variáveis CSS em `src/styles/base.css`:

| Cor             | Hex       | Variável         |
| --------------- | --------- | ---------------- |
| Vermelho terra  | `#A43A34` | `--terra`        |
| Terracota       | `#C56A4B` | `--terracota`    |
| Ouro queimado   | `#C9952D` | `--ouro`         |
| Areia           | `#F2E8DC` | `--areia`        |
| Marrom profundo | `#5A433A` | `--marrom`       |

Tipografia: **Cormorant Garamond** (títulos) + **Jost** (texto corrido,
substituta do Avenir Next, que não tem licença web gratuita).

O símbolo é o desenho da própria Ester. A arte que ela mandou é contorno
preenchido (vetorização automática), e contorno preenchido não serve aqui por
dois motivos: não dá para "desenhar" na animação da abertura, e o peso da linha
fica congelado, impossível de engrossar nos tamanhos pequenos.

Então a **linha de centro** foi extraída do contorno dela — rasterizar, fechar
as falhas do tracejado, afinar (Zhang-Suen), seguir o traço atravessando os
cruzamentos, suavizar em curvas. O desenho é dela ponto a ponto; só mudou a
forma de guardar. O resultado está em `src/data/marca.js` e **não deve ser
editado à mão** — se ela mandar uma arte nova, ele é regerado a partir dela.

Abaixo de uns 40px o desenho cheio vira borrão: são seis voltas que se cruzam, e
nesse tamanho não sobra pixel. Para o cabeçalho e os ícones existe uma
**redução** — uma espiral de quatro voltas gerada por fórmula em
`src/components/Logo.jsx`, ancorada nas mesmas proporções da arte dela (mesmo
centro dourado, mesmos pontos, mesmo bico). É o que uma marca faz quando o
desenho completo não cabe. Quanto menor o símbolo, mais pesado o `strokeWidth`.

A pasta `marca/` tem o símbolo exportado em `.svg` solto, para uso fora do
site (Instagram, documentos, impressão).

## Estrutura da página

1. **Tela de abertura** — a espiral é desenhada de ponta a ponta, o nome "Ester
   Santos" é escrito letra a letra com cursor, e a cortina sobe.
2. **Hero** — "O caminho de volta ao centro" + foto + CTA de WhatsApp.
3. **Faixa** — palavras-chave da marca em movimento contínuo.
4. **Sobre** — apresentação, credenciais e o diferencial da escuta.
5. **Para quem é** — seis dores reconhecíveis do público.
6. **Abordagem** — os quatro pilares da Psicologia Analítica Junguiana.
7. **Como funciona** — do primeiro contato à anamnese e ao processo.
8. **Dúvidas** — FAQ em acordeão.
9. **Contato** — CTA final com WhatsApp e telefone.
10. **Rodapé** — navegação, dados profissionais e aviso de emergência (CVV 188).

## Pontos que dependem de confirmação da Ester

- **Telefone.** O número informado foi `91 9117-5199`, que tem 8 dígitos após o
  DDD. Celulares do Pará têm 9. Foi assumido **(91) 99117-5199**
  (`5591991175199`). Se estiver errado, corrija em `src/data/site.js` — o site
  inteiro acompanha.
- **Foto.** A imagem enviada tem uma placa de mesa escrita "Dra. Silva" no canto
  inferior. O enquadramento das duas aparições corta essa área, mas vale trocar
  por uma foto definitiva quando houver.
- **Instagram / e-mail.** Não foram informados, então não há links para eles.
  Quando houver, dá para adicionar em `src/data/site.js` e no rodapé.

## Stack

React 18 · Vite 5 · Framer Motion 11 (animações) · Lenis (scroll suave).
Sem framework de CSS: três folhas de estilo próprias, organizadas por
responsabilidade (tokens, componentes, seções).

Acessibilidade: navegação por teclado, foco visível, `prefers-reduced-motion`
respeitado em todo o site e contraste conferido na paleta da marca.
