import React, { useEffect, useRef, useState } from 'react';
import { Navigation } from './components/Navigation';
import { Article } from './components/Article';
import { ThreeModelShowcase } from './components/ThreeModelShowcase';
import { Footer } from './components/Footer';
import { ArtifactModal } from './components/ArtifactModal';
import { MUSEUM_ARTIFACTS } from './data/artifacts';
import { POSTS } from './data/posts';
import { MuseumArtifact } from './types';
import { NAV_PAGES, PAGES, PageId, pageFromHash, resolvePage } from './pages';

const PAGE_ORDER: PageId[] = [
  'home',
  'education',
  'travels',
  'higher-education',
  'propaganda',
  'timeline',
  'closing',
  'relics',
];

export default function App() {
  const [page, setPage] = useState<PageId>(() => pageFromHash());
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [selectedArtifact, setSelectedArtifact] = useState<MuseumArtifact | null>(null);
  const [turn, setTurn] = useState<'idle' | 'out-forward' | 'in-forward' | 'out-back' | 'in-back'>('idle');
  const turning = useRef(false);

  useEffect(() => {
    const sync = () => setPage(pageFromHash());
    window.addEventListener('hashchange', sync);
    if (!window.location.hash || window.location.hash === '#/') {
      window.history.replaceState(null, '', '#/home');
      setPage('home');
    }
    return () => window.removeEventListener('hashchange', sync);
  }, []);

  useEffect(() => {
    const current = PAGES.find((item) => item.id === page);
    document.title = current
      ? `${current.title} · Jose Rizal`
      : 'Jose Rizal: Education, Travels, and the Propaganda Movement';
    if (turn === 'idle') {
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    }
  }, [page, reduceMotion, turn]);

  const handleNavigate = (id: string) => {
    const next = resolvePage(id);
    if (next === page || turning.current) return;

    const go = () => {
      const hash = `#/${next}`;
      if (window.location.hash === hash) {
        setPage(next);
        window.scrollTo({ top: 0, behavior: 'auto' });
        return;
      }
      window.location.hash = `/${next}`;
    };

    if (reduceMotion) {
      go();
      return;
    }

    const forward = PAGE_ORDER.indexOf(next) >= PAGE_ORDER.indexOf(page);
    turning.current = true;
    setTurn(forward ? 'out-forward' : 'out-back');
    window.setTimeout(() => {
      go();
      setTurn(forward ? 'in-forward' : 'in-back');
      window.setTimeout(() => {
        setTurn('idle');
        turning.current = false;
        window.scrollTo({ top: 0, behavior: 'auto' });
      }, 600);
    }, 520);
  };

  const current = PAGES.find((item) => item.id === page) ?? PAGES[0];
  const blocks = POSTS[page];
  const index = NAV_PAGES.findIndex((item) => item.id === page);
  const next =
    page === 'timeline'
      ? { id: 'closing' as PageId, label: 'Close the book' }
      : index >= 0 && index < NAV_PAGES.length - 1
        ? NAV_PAGES[index + 1]
        : null;

  return (
    <div className="min-h-screen bg-[#f6f3ee] text-[#1f1a14] font-sans antialiased">
      <Navigation
        currentSection={page}
        onNavigate={handleNavigate}
        audioEnabled={audioEnabled}
        onToggleAudio={() => setAudioEnabled((prev) => !prev)}
        reduceMotion={reduceMotion}
        onToggleReduceMotion={() => setReduceMotion((prev) => !prev)}
        onOpenArtifacts={() => handleNavigate('relics')}
      />

      <main className="book-stage max-w-5xl mx-auto px-3 sm:px-6 py-6 sm:py-8">
        <div
          className={`book-leaf ${page === 'home' || page === 'closing' ? 'is-cover' : ''} ${
            turn === 'out-forward'
              ? 'turn-out-forward'
              : turn === 'in-forward'
                ? 'turn-in-forward'
                : turn === 'out-back'
                  ? 'turn-out-back'
                  : turn === 'in-back'
                    ? 'turn-in-back'
                    : ''
          }`}
        >
        {page === 'home' && (
          <div className="book-cover">
            <div className="book-cover-frame">
              <p className="font-cinzel text-[0.72rem] tracking-[0.42em] uppercase text-[#e6c878]">
                A short history
              </p>
              <img
                src={`${import.meta.env.BASE_URL}images/jose-rizal.jpg`}
                alt="Historical portrait of Jose Rizal"
                className="book-cover-portrait"
              />
              <h1 className="font-cinzel text-4xl sm:text-6xl font-semibold tracking-[0.14em] text-[#f6e7b8]">
                Jose Rizal
              </h1>
              <div className="book-cover-rule" />
              <p className="max-w-md font-serif text-xl sm:text-2xl leading-snug text-[#f3e6c4]">
                Education, Travels, and the Propaganda Movement
              </p>
              <p className="mt-4 text-sm tracking-[0.22em] uppercase text-[#d7b56a]">
                Calamba, 1861 — Manila, 1896
              </p>
              <button
                onClick={() => handleNavigate('education')}
                className="book-cover-open"
              >
                Open the book
              </button>
            </div>
          </div>
        )}

        {page === 'closing' && (
          <div className="book-cover">
            <div className="book-cover-frame">
              <p className="font-cinzel text-[0.72rem] tracking-[0.42em] uppercase text-[#e6c878]">
                The end
              </p>
              <h1 className="mt-6 font-cinzel text-4xl sm:text-6xl font-semibold tracking-[0.18em] text-[#f6e7b8]">
                Close the book
              </h1>
              <div className="book-cover-rule" />
              <p className="max-w-md font-serif text-xl sm:text-2xl leading-snug text-[#f3e6c4]">
                Education, travels, and the Propaganda Movement
              </p>
              <p className="mt-4 text-sm tracking-[0.22em] uppercase text-[#d7b56a]">
                Calamba, 1861 — Manila, 1896
              </p>
              <button
                onClick={() => handleNavigate('relics')}
                className="book-cover-open"
              >
                3D Relics
              </button>
            </div>
          </div>
        )}

        {page !== 'relics' && page !== 'home' && page !== 'closing' && (
          <article className="book-chapter max-w-3xl mx-auto px-6 sm:px-12 pt-14 pb-16">
            <p className="text-center font-cinzel text-[0.72rem] tracking-[0.34em] uppercase text-[#8a6840]">
              {current.kicker}
            </p>
            <h1 className="book-chapter-title mt-4 text-center font-serif text-4xl sm:text-5xl font-semibold leading-[1.15] text-[#2a1c10]">
              {current.title}
            </h1>
            <div className="book-chapter-rule" />
            <div className="mt-8">
              {blocks && <Article blocks={blocks} />}
            </div>
            {next && (
              <button
                onClick={() => handleNavigate(next.id)}
                className="mt-14 w-full text-left border-t border-[#e4ddd2] pt-6 group"
              >
                <span className="text-xs font-semibold tracking-[0.16em] uppercase text-[#8a7358]">
                  Continue
                </span>
                <span className="mt-1 block font-serif text-2xl text-[#1c140c] group-hover:text-[#6b542f]">
                  {next.label}
                </span>
              </button>
            )}
          </article>
        )}

        {page === 'relics' && (
          <div className="museum-band">
            <ThreeModelShowcase
              onOpenArtifactModal={(id) => {
                const found = MUSEUM_ARTIFACTS.find((item) => item.id === id);
                if (found) setSelectedArtifact(found);
              }}
              audioEnabled={audioEnabled}
            />
          </div>
        )}
        </div>
      </main>

      <Footer onNavigate={handleNavigate} />

      <ArtifactModal
        artifact={selectedArtifact}
        onClose={() => setSelectedArtifact(null)}
        audioEnabled={audioEnabled}
      />
    </div>
  );
}
