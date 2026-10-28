/* ============================================================
   CONFIGURAÇÃO CENTRAL DO SITE
   Altere aqui e o site inteiro acompanha.
   ============================================================ */

export const site = {
  nome: 'Ester Santos',
  profissao: 'Psicóloga Clínica',
  abordagem: 'Abordagem Junguiana',
  crp: 'CRP 10/13142',
  formacao: 'Pós-graduação em Psicologia Clínica',
  tagline: 'Acolher o que transforma. Guiar o que permanece.',
  manifesto: 'O caminho de volta ao centro',

  // ⚠️ Confira este número: o original veio como "91 9117-5199" (8 dígitos).
  // Celulares do Pará têm 9 dígitos, então foi assumido o 9 inicial.
  telefone: {
    e164: '5591991175199',
    exibicao: '(91) 99117-5199',
  },

  atendimento: {
    formato: 'Atendimento 100% online',
    publico: 'Mulheres adultas',
    pagamento: 'Particular',
  },

  mensagemWhatsapp:
    'Olá, Ester! Vim pelo site e gostaria de saber mais sobre o acompanhamento psicológico.',
};

export const whatsappUrl = `https://wa.me/${site.telefone.e164}?text=${encodeURIComponent(
  site.mensagemWhatsapp,
)}`;

export const telUrl = `tel:+${site.telefone.e164}`;

/* ---------- Navegação ---------- */

export const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#para-quem', label: 'Para quem é' },
  { href: '#abordagem', label: 'Abordagem' },
  { href: '#processo', label: 'Como funciona' },
  { href: '#duvidas', label: 'Dúvidas' },
  { href: '#contato', label: 'Contato' },
];

/* ---------- Palavras do marquee ---------- */

export const palavras = [
  'Individuação',
  'Identidade',
  'Reconstrução',
  'Autoconhecimento',
  'Sentido',
  'Presença',
  'Caminho',
];

/* ---------- Dores / para quem é ---------- */

export const dores = [
  {
    num: '01',
    titulo: 'Você não se reconhece mais',
    texto:
      'Olha para a própria vida e sente que algo mudou por dentro — mas não consegue nomear o quê. A mulher que você era já não responde pela que você é hoje.',
  },
  {
    num: '02',
    titulo: 'A maternidade redesenhou tudo',
    texto:
      'Tornar-se mãe reorganizou o seu tempo, o seu corpo e os seus vínculos. No meio disso, a sua própria identidade ficou esperando a vez.',
  },
  {
    num: '03',
    titulo: 'A carreira já não diz quem você é',
    texto:
      'O que antes dava sentido virou rotina, ou exigência. Você se pergunta se continua por escolha, por hábito ou por medo de recomeçar.',
  },
  {
    num: '04',
    titulo: 'Papéis demais, você de menos',
    texto:
      'Filha, mãe, esposa, profissional, amiga. Você dá conta de todos — e é justamente entre eles que fica difícil encontrar a si mesma.',
  },
  {
    num: '05',
    titulo: 'As expectativas pesam',
    texto:
      'O que esperam de você e o que você deseja nem sempre coincidem. Viver essa contradição em silêncio cansa mais do que parece.',
  },
  {
    num: '06',
    titulo: 'Uma etapa terminou — e a próxima?',
    texto:
      'Você sente que um ciclo se fechou, mas ainda não sabe que sentido quer construir para o que vem agora. É exatamente aqui que começamos.',
  },
];

/* ---------- Pilares da abordagem ---------- */

export const pilares = [
  {
    titulo: 'Identidade em profundidade',
    texto:
      'A Psicologia Analítica trabalha com aquilo que está por baixo do visível: símbolos, sonhos, repetições e as imagens que organizam a sua história sem que você perceba.',
  },
  {
    titulo: 'Sem perder a vida real de vista',
    texto:
      'Profundidade não é abstração. As relações, a maternidade, a carreira, as escolhas e as contradições de ser mulher adulta entram na sala exatamente como são.',
  },
  {
    titulo: 'Individuação como caminho',
    texto:
      'O processo não busca te transformar em outra pessoa. Busca te aproximar de quem você já é — inclusive das partes que você ainda não reconheceu.',
  },
  {
    titulo: 'Recursos para o dia a dia',
    texto:
      'Compreender a própria experiência desenvolve recursos concretos para lidar com a vida de maneira mais consciente, e menos no automático.',
  },
];

/* ---------- Processo ---------- */

export const etapas = [
  {
    num: '01',
    titulo: 'Primeiro contato',
    texto:
      'Você envia uma mensagem pelo WhatsApp. Conversamos sobre o que te trouxe até aqui e verificamos os horários disponíveis na agenda.',
  },
  {
    num: '02',
    titulo: 'Sessão de anamnese',
    texto:
      'Nosso primeiro encontro começa pelos termos e pelo contrato terapêutico. Em seguida realizo a anamnese: uma entrevista estruturada para conhecer seu histórico clínico, seus sintomas e seus hábitos de vida.',
  },
  {
    num: '03',
    titulo: 'O processo começa',
    texto:
      'A partir daí, encontros regulares online. Um espaço constante para investigar quem você é, o que mudou e quais sentidos deseja construir para a próxima etapa.',
  },
];

/* ---------- FAQ ---------- */

export const faq = [
  {
    pergunta: 'O atendimento é online ou presencial?',
    resposta:
      'Todo o acompanhamento é realizado online, por videochamada. Isso permite que você seja atendida de onde estiver, com a mesma constância e o mesmo cuidado de um consultório — sem deslocamento e com mais flexibilidade de horário.',
  },
  {
    pergunta: 'Quem você atende?',
    resposta:
      'Mulheres adultas, especialmente em processos de transição e reconstrução da identidade — na maternidade, na carreira e nos contextos em que estão inseridas.',
  },
  {
    pergunta: 'O que é a abordagem Junguiana?',
    resposta:
      'A Psicologia Analítica, desenvolvida por Carl Gustav Jung, parte do princípio de que existe em cada pessoa um movimento natural rumo à própria inteireza — a individuação. Trabalhamos com símbolos, sonhos e imagens que revelam aquilo que ainda não ganhou palavra, sempre conectado à sua vida concreta.',
  },
  {
    pergunta: 'Como funciona a primeira sessão?',
    resposta:
      'Começo conversando sobre os termos e o contrato terapêutico, para que tudo fique claro desde o início. Depois realizo a anamnese, uma entrevista estruturada para coletar histórico clínico, sintomas e hábitos de vida. É o mapa de onde partimos.',
  },
  {
    pergunta: 'Você atende por convênio?',
    resposta:
      'O atendimento é exclusivamente particular. Isso garante um acompanhamento sem limite de sessões imposto por terceiros e com total sigilo sobre o seu processo.',
  },
  {
    pergunta: 'Preciso estar em crise para começar?',
    resposta:
      'Não. Muitas mulheres chegam justamente porque está tudo "funcionando" por fora enquanto algo por dentro pede revisão. Querer compreender a si mesma já é motivo suficiente.',
  },
];
