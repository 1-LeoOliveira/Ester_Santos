import Logo from './Logo';
import { navLinks, site, whatsappUrl } from '../data/site';
import { IconWhatsapp } from './Icons';

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="rodape">
      <div className="shell rodape__topo">
        <div className="rodape__marca">
          <Logo variante="vertical" />
          <p className="rodape__tagline">{site.tagline}</p>
        </div>

        <nav className="rodape__nav" aria-label="Navegação do rodapé">
          <span className="rodape__titulo">Navegar</span>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="rodape__contato">
          <span className="rodape__titulo">Contato</span>
          <a
            className="rodape__zap"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            <IconWhatsapp />
            {site.telefone.exibicao}
          </a>
          <p>
            {site.atendimento.formato}
            <br />
            {site.atendimento.publico} · {site.atendimento.pagamento}
          </p>
          <p className="rodape__crp">
            {site.crp}
            <br />
            {site.formacao}
          </p>
        </div>
      </div>

      <div className="shell rodape__base">
        <p>
          © {ano} {site.nome} · {site.profissao}
        </p>
        <p className="rodape__aviso">
          Este site tem caráter informativo e não substitui atendimento
          psicológico ou de emergência. Em caso de crise, ligue 188 (CVV) ou
          procure o serviço de saúde mais próximo.
        </p>
      </div>
    </footer>
  );
}
