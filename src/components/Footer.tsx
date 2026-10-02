import React from 'react';

interface FooterProps {
  onNavigate: (id: string) => void;
}

const FOOTER_LINKS = [
  { id: 'education', label: 'Education' },
  { id: 'travels', label: 'Travels' },
  { id: 'higher-education', label: 'Higher Education' },
  { id: 'propaganda', label: 'Propaganda' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'relics', label: '3D Relics' },
];

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-[#e4ddd2] bg-[#fbf9f6]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <div>
          <p className="font-serif text-lg text-[#1c140c]">Jose Rizal</p>
          <p className="mt-1 text-sm text-[#6d6256]">Education, travels, and the Propaganda Movement.</p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#3d342c]">
          {FOOTER_LINKS.map((link) => (
            <button key={link.id} onClick={() => onNavigate(link.id)} className="hover:text-[#1c140c]">
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </footer>
  );
};
