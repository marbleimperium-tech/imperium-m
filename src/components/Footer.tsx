import React from 'react';
import { COMPANY_INFO } from '../data/stones';
import { useI18n } from '../context/I18nContext';
import { ShieldCheck, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const { tr } = useI18n();

  const links = [
    { href: '#catalogo', label: tr({ pt: 'Catálogo de Chapas', en: 'Slab Catalog', es: 'Catálogo de Placas', it: 'Catalogo Lastre' }) },
    { href: '#bookmatch-studio', label: tr({ pt: 'Bookmatch Studio & Paginação', en: 'Bookmatch Studio & Layout', es: 'Bookmatch Studio y Paginación', it: 'Bookmatch Studio & Impaginazione' }) },
    { href: '#calculadora-b2b', label: tr({ pt: 'Calculadora de Carga B2B', en: 'B2B Load Calculator', es: 'Calculadora de Carga B2B', it: 'Calcolatore di Carico B2B' }) },
    { href: '#exportacao', label: tr({ pt: 'Logística Portuária & Exportação', en: 'Port Logistics & Export', es: 'Logística Portuaria y Exportación', it: 'Logistica Portuale & Export' }) },
    { href: '#sobre', label: tr({ pt: 'Sobre a Empresa', en: 'About the Company', es: 'Sobre la Empresa', it: "Chi Siamo" }) },
    { href: '#contato', label: tr({ pt: 'Canais de Atendimento', en: 'Contact Channels', es: 'Canales de Atención', it: 'Canali di Contatto' }) },
  ];

  return (
    <footer className="bg-stone-950 text-stone-400 border-t border-stone-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Corporate Data (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="#"
              className="flex items-center gap-3 text-2xl font-serif font-bold tracking-wider text-stone-100 hover:text-amber-400 transition-colors"
            >
              <img
                src="/favicon.svg"
                alt="Império Marble IM"
                className="w-10 h-10 rounded-full shrink-0 shadow"
              />
              <span>IMPÉRIO MARBLE</span>
            </a>
            <p className="text-stone-300 max-w-sm leading-relaxed">
              <strong>{COMPANY_INFO.name}</strong>
              <br />
              {tr({
                pt: 'Comércio atacadista e exportação de mármores nobres, quartzitos exóticos e granitos superiores em chapas e blocos.',
                en: 'Wholesale trade and export of noble marbles, exotic quartzites and premium granites in slabs and blocks.',
                es: 'Comercio mayorista y exportación de mármoles nobles, cuarcitas exóticas y granitos superiores en placas y bloques.',
                it: "Commercio all'ingrosso ed esportazione di marmi pregiati, quarziti esotiche e graniti superiori in lastre e blocchi.",
              })}
            </p>
            <div className="text-stone-500 font-mono text-[11px]">
              CNPJ: {COMPANY_INFO.cnpj}
            </div>
            <div className="flex items-center gap-2 text-stone-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>
                {tr({
                  pt: 'Conformidade com Normas Internacionais ASTM e ISPM 15',
                  en: 'Compliant with International ASTM and ISPM 15 Standards',
                  es: 'Conformidad con Normas Internacionales ASTM e ISPM 15',
                  it: 'Conformità agli Standard Internazionali ASTM e ISPM 15',
                })}
              </span>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-200">
              {tr({ pt: 'Navegação', en: 'Navigation', es: 'Navegación', it: 'Navigazione' })}
            </div>
            <ul className="space-y-2 text-stone-400">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-amber-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Contacts (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-200">
              {tr({ pt: 'Sede Operacional', en: 'Operational Headquarters', es: 'Sede Operativa', it: 'Sede Operativa' })}
            </div>
            <div className="space-y-2 text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.address.street}, {COMPANY_INFO.address.number}, {COMPANY_INFO.address.complement}
                  <br />
                  {tr({ pt: 'Bairro', en: 'District', es: 'Barrio', it: 'Quartiere' })} {COMPANY_INFO.address.neighborhood} · {COMPANY_INFO.address.city} - {COMPANY_INFO.address.state}
                  <br />
                  {tr({ pt: 'CEP', en: 'ZIP', es: 'CP', it: 'CAP' })} {COMPANY_INFO.address.zipCode} · {tr({ pt: 'Brasil', en: 'Brazil', es: 'Brasil', it: 'Brasile' })}
                </span>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`tel:${COMPANY_INFO.contact.phoneClean}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            © {new Date().getFullYear()} Império Marble Importação e Exportação Ltda.{' '}
            {tr({ pt: 'Todos os direitos reservados.', en: 'All rights reserved.', es: 'Todos los derechos reservados.', it: 'Tutti i diritti riservati.' })}
          </div>
          <div className="flex items-center gap-4">
            <span>Guarapari · Espírito Santo · {tr({ pt: 'Brasil', en: 'Brazil', es: 'Brasil', it: 'Brasile' })}</span>
            <span aria-hidden="true">·</span>
            <span>{tr({ pt: 'Polo Mundial de Rochas Naturais', en: 'World Hub of Natural Stone', es: 'Polo Mundial de Rocas Naturales', it: 'Polo Mondiale della Pietra Naturale' })}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
