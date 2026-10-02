import React from 'react';
import { TrendingDown, Coins, EyeOff, Users, Building } from 'lucide-react';
import { PROPAGANDA_MOVEMENT } from '../data/sourceNarrative';

export const DeclineSection: React.FC = () => {
  const DECLINE_FACTORS = [
    {
      id: 'financial',
      title: '1. Crippling Financial Exhaustion',
      icon: Coins,
      tagline: 'Dry funds & delayed Manila remittances',
      desc: 'Publishing La Solidaridad and sustaining lobbying in Madrid required constant funding. As Spanish authorities cracked down in Manila, wealthy Filipino benefactors were terrified into withholding donations. Editors Marcelo H. del Pilar and Graciano Lopez Jaena died in Spain in extreme destitution.'
    },
    {
      id: 'censorship',
      title: '2. Total Colonial Censorship in the Philippines',
      icon: EyeOff,
      tagline: 'Interception & confiscation by the Permanent Board of Censorship',
      desc: 'Copies of La Solidaridad, Noli Me Tangere, and El Filibusterismo were banned under penalty of deportation or death. While brave smugglers concealed copies in dry-goods barrels, the reach within the homeland remained constrained by friar vigilance.'
    },
    {
      id: 'internal-schism',
      title: '3. Internal Factionalism & Leadership Rivalry',
      icon: Users,
      tagline: 'Rizalistas vs. Pilaristas in Madrid (January 1891)',
      desc: 'Disagreements emerged between Jose Rizal and Marcelo H. del Pilar over the editorial control and supreme leadership (Responsable) of the Filipino colony in Madrid. Although Rizal won the election, he stepped aside and left Madrid to preserve fraternity, never writing for La Solidaridad again.'
    },
    {
      id: 'spanish-indifference',
      title: '4. Absolute Spanish Imperial Indifference',
      icon: Building,
      tagline: 'Unstable Madrid ministries & friar dominance',
      desc: 'Spain was consumed by its own turbulent parliamentary crises, cabinet changes, and political instability. Madrid politicians gave sympathetic lip-service to Ilustrado petitions but consistently bowed to the immense financial and electoral clout of the monastic religious orders.'
    }
  ];

  return (
    <section 
      id="decline" 
      className="relative py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#8b2626]/40"
    >
      {/* Visual Mood Shift: Somber, Twilight Antique Gold to Crimson/Charcoal */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2a1411] border border-[#8b2626]/50 text-xs text-[#f5c6a5] uppercase tracking-widest font-semibold mb-3">
          <TrendingDown className="w-3.5 h-3.5 text-[#e07a5f]" />
          Historical Twilight (1891–1895)
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#fff2d6] tracking-wide mb-3">
          Decline of the Propaganda Movement
        </h2>
        <p className="text-base text-[#ded2be] font-serif max-w-2xl mx-auto leading-relaxed">
          {PROPAGANDA_MOVEMENT.decline}
        </p>
      </div>

      {/* The 4 Decline Factors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {DECLINE_FACTORS.map(factor => {
          const Icon = factor.icon;

          return (
            <div 
              key={factor.id}
              className="p-6 rounded-2xl bg-gradient-to-b from-[#22130e] via-[#1a0f0b] to-[#120906] border border-[#8b2626]/40 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#381611] border border-[#8b2626]/50 flex items-center justify-center text-[#e07a5f]">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#fff0d1]">
                    {factor.title}
                  </h3>
                  <span className="text-[11px] text-[#e07a5f] font-mono block">
                    {factor.tagline}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#ded2be] font-serif leading-relaxed">
                {factor.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
