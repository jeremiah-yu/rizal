import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { TimelineSection } from './components/TimelineSection';
import { EducationManila } from './components/EducationManila';
import { TravelMap } from './components/TravelMap';
import { TravelStory } from './components/TravelStory';
import { SpainSection } from './components/SpainSection';
import { FranceGermany } from './components/FranceGermany';
import { HigherEducation } from './components/HigherEducation';
import { PropagandaMovement } from './components/PropagandaMovement';
import { FiguresGallery } from './components/FiguresGallery';
import { LaSolidaridad } from './components/LaSolidaridad';
import { DeclineSection } from './components/DeclineSection';
import { ArtifactGallery } from './components/ArtifactGallery';
import { SummaryTimeline } from './components/SummaryTimeline';
import { ThreeModelShowcase } from './components/ThreeModelShowcase';
import { Footer } from './components/Footer';
import { ArtifactModal } from './components/ArtifactModal';
import { MUSEUM_ARTIFACTS } from './data/artifacts';
import { MuseumArtifact } from './types';
import { playPaperRustle } from './utils/audio';

export default function App() {
  const [currentSection, setCurrentSection] = useState<string>('hero');
  const [audioEnabled, setAudioEnabled] = useState<boolean>(true);
  const [reduceMotion, setReduceMotion] = useState<boolean>(false);
  const [selectedArtifact, setSelectedArtifact] = useState<MuseumArtifact | null>(null);

  // Monitor scroll position to update current active section in nav
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = [
        'hero',
        'timeline',
        'manila-education',
        'travel-map',
        'travel-story',
        'spain-germany',
        'france-germany',
        'higher-education',
        'interactive-3d',
        'propaganda',
        'figures-gallery',
        'solidaridad',
        'decline',
        'artifacts',
        'summary-timeline'
      ];

      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setCurrentSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setCurrentSection(sectionId);
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
    }
  };

  const handleOpenArtifact = (id: string) => {
    const found = MUSEUM_ARTIFACTS.find(a => a.id === id);
    if (found) {
      setSelectedArtifact(found);
    }
  };

  const handleCloseArtifact = () => {
    setSelectedArtifact(null);
  };

  return (
    <div className="min-h-screen bg-[#f7f3e8] text-[#3d2b1f] selection:bg-[#c59b27]/30 selection:text-[#2a170a] font-sans antialiased">
      {/* Museum Header & Navigation */}
      <Navigation
        currentSection={currentSection}
        onNavigate={handleNavigate}
        audioEnabled={audioEnabled}
        onToggleAudio={() => setAudioEnabled(prev => !prev)}
        reduceMotion={reduceMotion}
        onToggleReduceMotion={() => setReduceMotion(prev => !prev)}
        onOpenArtifacts={() => handleNavigate('artifacts')}
      />

      <main className="relative">
        {/* 1. Hero Entryway */}
        <Hero
          onBeginJourney={() => handleNavigate('manila-education')}
          audioEnabled={audioEnabled}
          reduceMotion={reduceMotion}
          onOpenArtifact={handleOpenArtifact}
          onNavigateSection={handleNavigate}
        />

        {/* Dark museum band — readable light text on deep parchment */}
        <div className="museum-band">
        {/* 2. Chronological Master Timeline */}
        <TimelineSection
          onOpenArtifact={handleOpenArtifact}
          audioEnabled={audioEnabled}
          reduceMotion={reduceMotion}
          onNavigateSection={handleNavigate}
        />

        {/* 3. Education in Manila (Ateneo & UST) */}
        <EducationManila
          onOpenArtifact={handleOpenArtifact}
          audioEnabled={audioEnabled}
        />

        {/* 4. Interactive Travel Map (Route & Waypoints) */}
        <TravelMap
          onOpenArtifact={handleOpenArtifact}
          audioEnabled={audioEnabled}
          reduceMotion={reduceMotion}
        />

        {/* 5. Scroll-Based Travel Storytelling */}
        <TravelStory
          onOpenArtifact={handleOpenArtifact}
        />

        {/* 6. Spain Section (Barcelona & Madrid) */}
        <SpainSection
          onOpenArtifact={handleOpenArtifact}
          audioEnabled={audioEnabled}
        />

        {/* 7. France & Germany (Paris, Heidelberg, Berlin Printing Press) */}
        <FranceGermany
          onOpenArtifact={handleOpenArtifact}
          audioEnabled={audioEnabled}
          reduceMotion={reduceMotion}
        />

        {/* 8. Higher Education Knowledge Archive */}
        <HigherEducation
          onOpenArtifact={handleOpenArtifact}
          audioEnabled={audioEnabled}
        />

        {/* 9. Interactive 3D Artifact Rotunda (light cream island) */}
        <ThreeModelShowcase
          onOpenArtifactModal={handleOpenArtifact}
          audioEnabled={audioEnabled}
        />

        {/* 10. The Propaganda Movement & Five Reform Demands */}
        <PropagandaMovement
          onOpenArtifact={handleOpenArtifact}
          audioEnabled={audioEnabled}
          reduceMotion={reduceMotion}
        />

        {/* 10. Key Figures Gallery */}
        <FiguresGallery
          onOpenArtifact={handleOpenArtifact}
          audioEnabled={audioEnabled}
        />

        {/* 11. La Solidaridad: 3D Interactive Gazette */}
        <LaSolidaridad
          onOpenArtifact={handleOpenArtifact}
          audioEnabled={audioEnabled}
        />

        {/* 12. Decline of the Propaganda Movement */}
        <DeclineSection />

        {/* 13. Curated Historical Objects & Reliquary */}
        <ArtifactGallery
          onOpenArtifact={handleOpenArtifact}
          audioEnabled={audioEnabled}
        />

        {/* 14. Final Interactive Timeline Recap */}
        <SummaryTimeline
          onOpenArtifact={handleOpenArtifact}
          audioEnabled={audioEnabled}
        />
        </div>
      </main>

      {/* Museum Footer */}
      <Footer audioEnabled={audioEnabled} />

      {/* 3D Artifact Inspection Modal */}
      <ArtifactModal
        artifact={selectedArtifact}
        onClose={handleCloseArtifact}
        audioEnabled={audioEnabled}
      />
    </div>
  );
}
