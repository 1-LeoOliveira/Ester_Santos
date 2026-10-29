import Reveal from './Reveal';
import { Simbolo } from './Logo';
import { site, whatsappUrl, telUrl, instagramUrl } from '../data/site';
import {
  IconWhatsapp,
  IconInstagram,
  IconArrowRight,
  IconMonitor,
  IconSpark,
} from './Icons';

export default function Contact() {
  return (
    <section className="section section--escura contato" id="contato">
      <div className="contato__fundo" aria-hidden="true">
        <Simbolo className="contato__marca" strokeWidth={0.8} />
      </div>

      <div className="shell contato__shell">
        <Reveal as="p" className="eyebrow eyebrow--claro">
          <span className="eyebrow__dot" />
          Primeiro passo
        </Reveal>

        <Reveal as="h2" className="h2 h2--claro contato__titulo" delay={0.05}>
          Você não precisa ter todas as <em>respostas</em> para começar a olhar
          para si
        </Reveal>

        <Reveal as="p" className="contato__lead" delay={0.1}>
          Há momentos em que a vida muda, os papéis se transformam e aquilo que
          antes fazia sentido passa a ser questionado. Me mande uma mensagem e
          conversamos sobre o que te trouxe até aqui.
        </Reveal>

        <Reveal className="contato__acoes" delay={0.16}>
          <a
            className="btn btn--ouro"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            <IconWhatsapp />
            Falar no WhatsApp
          </a>
          <a className="btn btn--ghost btn--claro" href={telUrl}>
            {site.telefone.exibicao}
            <IconArrowRight />
          </a>
          <a
            className="btn btn--ghost btn--claro"
            href={instagramUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            <IconInstagram />
            @{site.instagram}
          </a>
        </Reveal>

        <Reveal className="contato__cartoes" delay={0.22}>
          <div className="cartao">
            <IconMonitor />
            <strong>Atendimento online</strong>
            <span>
              Por videochamada, de onde você estiver. Um espaço com privacidade,
              acolhimento e respeito à singularidade de cada pessoa.
            </span>
          </div>
          <div className="cartao">
            <IconSpark />
            <strong>Mulheres adultas</strong>
            <span>
              Para quem atravessa transições de vida e vivencia questionamentos
              sobre identidade, maternidade, carreira, relacionamentos e
              pertencimento.
            </span>
          </div>
          <div className="cartao">
            <IconWhatsapp />
            <strong>Resposta pessoal</strong>
            <span>
              Quem responde a sua mensagem sou eu. Sem atendente, sem formulário
              automático e sem compromisso.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
