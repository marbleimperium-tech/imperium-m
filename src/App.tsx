import React, { useState } from 'react';
import { StoneItem } from './types/stone';
import { COMPANY_INFO } from './data/stones';
import { I18nProvider } from './context/I18nContext';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { StoneCatalog } from './components/StoneCatalog';
import { ProjectShowcaseSection } from './components/ProjectShowcaseSection';
import { BookmatchStudio } from './components/BookmatchStudio';
import { EnvironmentSimulator } from './components/EnvironmentSimulator';
import { QuarriesAndESG } from './components/QuarriesAndESG';
import { B2BSegments } from './components/B2BSegments';
import { B2BCalculator } from './components/B2BCalculator';
import { ExportAndLogistics } from './components/ExportAndLogistics';
import { CompanyAbout } from './components/CompanyAbout';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SlabDetailModal } from './components/SlabDetailModal';
import { QuoteModal } from './components/QuoteModal';
import { MessageSquare } from 'lucide-react';

function AppContent() {
  const [selectedStoneForModal, setSelectedStoneForModal] = useState<StoneItem | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteSelectedStone, setQuoteSelectedStone] = useState<StoneItem | null>(null);
  const [quoteInitialNote, setQuoteInitialNote] = useState('');

  const handleOpenSlabDetail = (stone: StoneItem) => {
    setSelectedStoneForModal(stone);
  };

  const handleCloseSlabDetail = () => {
    setSelectedStoneForModal(null);
  };

  const handleRequestQuote = (stone?: StoneItem) => {
    setQuoteSelectedStone(stone || null);
    setQuoteInitialNote('');
    setQuoteModalOpen(true);
  };

  const handleApplyEstimateToQuote = (estimateText: string) => {
    setQuoteInitialNote(estimateText);
    setQuoteSelectedStone(null);
    setQuoteModalOpen(true);
  };

  const handleSimulateInEnvironment = (_stone: StoneItem) => {
    const el = document.getElementById('simulador');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans selection:bg-amber-600/30 selection:text-amber-200">
      {/* Top Bar with Guidoni-style aesthetic */}
      <Navbar onOpenQuote={() => handleRequestQuote()} />

      <main className="flex-1">
        {/* Full-bleed Editorial Hero Slider (Guidoni.com signature) */}
        <HeroSlider
          onOpenCatalog={() => {
            const el = document.getElementById('catalogo');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenQuote={() => handleRequestQuote()}
        />

        {/* Stone Catalog */}
        <StoneCatalog
          onOpenSlabDetail={handleOpenSlabDetail}
          onRequestQuote={handleRequestQuote}
          onSimulateInEnvironment={handleSimulateInEnvironment}
        />

        {/* Architectural Reference Projects Showcase (Guidoni signature) */}
        <ProjectShowcaseSection
          onOpenSlabDetail={handleOpenSlabDetail}
          onRequestQuoteForProject={(stone) => handleRequestQuote(stone)}
        />

        {/* Interactive Digital Bookmatch Studio */}
        <BookmatchStudio
          onRequestQuote={(stone) => handleRequestQuote(stone)}
        />

        {/* Architectural Environment Simulator */}
        <EnvironmentSimulator
          onSelectStoneForQuote={(stone) => handleRequestQuote(stone)}
        />

        {/* Quarries, Technology & ESG Sustainability */}
        <QuarriesAndESG />

        {/* Dedicated Solutions for Marmorarias, Construtoras & Traders */}
        <B2BSegments
          onOpenQuote={() => handleRequestQuote()}
        />

        {/* B2B Wholesale & Container Load Calculator */}
        <B2BCalculator
          onApplyEstimateToQuote={handleApplyEstimateToQuote}
        />

        {/* Global Export & Logistics Hub in Guarapari/ES */}
        <ExportAndLogistics />

        {/* Company History & Values */}
        <CompanyAbout />

        {/* Contact, Official Registration & Geographic Map */}
        <ContactSection
          onOpenQuoteModal={() => handleRequestQuote()}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slab Inspection Modal with Real Photos & ASTM Specs */}
      <SlabDetailModal
        stone={selectedStoneForModal}
        onClose={handleCloseSlabDetail}
        onRequestQuote={(stone) => {
          handleCloseSlabDetail();
          handleRequestQuote(stone);
        }}
      />

      {/* B2B Quote / RFQ Request Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialStone={quoteSelectedStone}
        initialNote={quoteInitialNote}
      />

      {/* Floating Direct WhatsApp Action */}
      <a
        href={COMPANY_INFO.contact.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 py-3 px-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-2xl transition-all hover:scale-105"
        aria-label="WhatsApp Comercial"
      >
        <MessageSquare className="w-4 h-4" />
        <span className="hidden sm:inline">WhatsApp Comercial</span>
      </a>
    </div>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <AppContent />
    </I18nProvider>
  );
}
