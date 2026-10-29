/* ============================================================
   CONFIGURAÇÃO CENTRAL DO SITE
   Altere aqui e o site inteiro acompanha.

   Os textos seguem o briefing da Ester. O registro é
   deliberadamente cuidadoso — "pode", "busca", "o objetivo não é
   oferecer respostas prontas" — do jeito que ela escreveu. Não
   transforme isso em promessa de resultado.
   ============================================================ */

export const site = {
  nome: 'Ester Santos',
  profissao: 'Psicóloga Clínica',
  abordagem: 'Psicologia Analítica',
  crp: 'CRP 10/13142',
  formacao: 'Pós-graduação em Psicologia Clínica',
  tagline: 'Transições que transformam. Identidades que se reconstroem.',
  manifesto: 'O caminho de volta ao centro',

  telefone: {
    e164: '5591993965199',
    exibicao: '(91) 99396-5199',
  },

  /* Só o usuário. O link é montado abaixo, sem os parâmetros de
     rastreio que vêm colados quando se copia do aplicativo: eles
     pertencem à sessão de quem copiou, não ao perfil. */
  instagram: 'psi_estersantos',

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

export const instagramUrl = `https://www.instagram.com/${site.instagram}`;

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
  'Identidade',
  'Transição',
  'Autoconhecimento',
  'Pertencimento',
  'Autonomia',
  'Sentidos',
  'Reconstrução',
];

/* ---------- Dores / para quem é ----------
   São as oito situações que a Ester lista no briefing, reunidas em
   seis cartões. Se ela quiser as oito separadas, basta acrescentar
   os dois itens: a grade acompanha sozinha.
   ------------------------------------------------------------- */

export const dores = [
  {
    num: '01',
    titulo: 'Você não se reconhece mais',
    texto:
      'A sensação de ter perdido a conexão consigo mesma. Algo mudou por dentro, e nem sempre é possível nomear o quê.',
  },
  {
    num: '02',
    titulo: 'Seus desejos ficaram em último lugar',
    texto:
      'Identificar o que você quer, do que precisa e o que vem primeiro ficou difícil. As prioridades de todo mundo são mais claras do que as suas.',
  },
  {
    num: '03',
    titulo: 'A sobrecarga não dá trégua',
    texto:
      'As responsabilidades familiares, profissionais e pessoais se acumulam, e sustentar todas elas tem um custo emocional que raramente aparece.',
  },
  {
    num: '04',
    titulo: 'Entre quem você deveria ser e quem você é',
    texto:
      'Existe um conflito entre a mulher que você acredita que deveria ser e aquela que realmente é. Corresponder ao que esperam, e esperar a validação disso, cansa.',
  },
  {
    num: '05',
    titulo: 'Limites vêm acompanhados de culpa',
    texto:
      'Dizer não, ocupar espaço e colocar as próprias necessidades no mapa costumam vir junto com um sentimento de culpa.',
  },
  {
    num: '06',
    titulo: 'Escolhas, propósito e pertencimento',
    texto:
      'As mudanças na carreira, na maternidade, nos relacionamentos ou nos projetos de vida trazem insegurança e reabrem perguntas sobre decisões passadas e direção.',
  },
];

/* ---------- Pilares da abordagem ---------- */

export const pilares = [
  {
    titulo: 'A singularidade da sua história',
    texto:
      'A Psicologia Analítica considera a história de cada pessoa como única e busca compreender os significados que ela atribui às próprias experiências.',
  },
  {
    titulo: 'Sem perder a vida concreta de vista',
    texto:
      'Profundidade não é abstração. Maternidade, carreira, relacionamentos, autonomia e pertencimento entram na sala exatamente como são.',
  },
  {
    titulo: 'O que nem sempre está claro',
    texto:
      'O trabalho considera a relação entre a experiência consciente, os conteúdos que ainda não estão claros para a própria pessoa e os padrões que se repetem nos vínculos.',
  },
  {
    titulo: 'No seu ritmo',
    texto:
      'O processo é construído de forma individualizada, respeitando o momento, as necessidades e o ritmo de cada paciente.',
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
    titulo: 'A primeira sessão',
    texto:
      'Um momento de acolhimento e de compreensão inicial do que trouxe você à terapia. Conversamos sobre o que você está vivendo, conheço aspectos relevantes da sua história e esclarecemos as dúvidas sobre o processo.',
  },
  {
    num: '03',
    titulo: 'O processo começa',
    texto:
      'A partir daí, encontros regulares online. Um espaço de escuta, reflexão e elaboração, construído de forma individualizada e no seu ritmo.',
  },
];

/* ---------- FAQ ---------- */

export const faq = [
  {
    pergunta: 'O atendimento é online ou presencial?',
    resposta:
      'Os atendimentos são realizados na modalidade online, por videochamada. A proposta é oferecer um espaço de escuta e acompanhamento psicológico com privacidade, acolhimento e respeito à singularidade de cada pessoa — de onde você estiver.',
  },
  {
    pergunta: 'Quem você atende?',
    resposta:
      'Mulheres adultas, especialmente aquelas que atravessam transições de vida e vivenciam questionamentos relacionados à identidade, à maternidade, à carreira, aos relacionamentos e ao pertencimento.',
  },
  {
    pergunta: 'O que é a Psicologia Analítica?',
    resposta:
      'É a abordagem desenvolvida por Carl Gustav Jung. Ela considera a singularidade da história de cada pessoa e busca compreender os significados de suas experiências, os conflitos internos, os padrões relacionais e os processos de transformação da personalidade — incluindo a maneira como a sua história influencia a vivência do presente.',
  },
  {
    pergunta: 'Como funciona a primeira sessão?',
    resposta:
      'É um momento de acolhimento e de compreensão inicial da demanda que te trouxe à terapia. Conversamos sobre o que você está vivendo, sobre aspectos relevantes da sua história e sobre as suas expectativas em relação ao acompanhamento. Não é necessário chegar com tudo organizado nem saber explicar exatamente o que está acontecendo: podemos começar pelo que está sendo mais difícil agora.',
  },
  {
    pergunta: 'Você atende por convênio?',
    resposta:
      'O atendimento é exclusivamente particular. Isso permite um acompanhamento sem limite de sessões imposto por terceiros e com sigilo integral sobre o seu processo.',
  },
  {
    pergunta: 'Preciso estar em crise para começar?',
    resposta:
      'Não. A terapia pode ser procurada não apenas em momentos de crise, mas também quando existe o desejo de compreender melhor a própria experiência e construir novas possibilidades.',
  },
];
