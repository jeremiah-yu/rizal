import React from 'react';

export type ArticleBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'img'; src: string; alt: string; caption: string; portrait?: boolean };

const base = import.meta.env.BASE_URL;

export const Article: React.FC<{ blocks: ArticleBlock[] }> = ({ blocks }) => {
  return (
    <div className="book-prose">
      {blocks.map((block, index) => {
        if (block.type === 'h2') {
          return (
            <h2
              key={index}
              className="book-heading"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === 'ul') {
          return (
            <ul key={index} className="mb-5 list-disc space-y-2 pl-6">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        if (block.type === 'img') {
          return (
            <figure key={index} className={block.portrait ? 'book-plate is-portrait' : 'book-plate'}>
              <img
                src={`${base}images/${block.src}`}
                alt={block.alt}
                className={block.portrait ? 'book-plate-portrait' : 'book-plate-img'}
              />
              <figcaption>{block.caption}</figcaption>
            </figure>
          );
        }
        return (
          <p key={index} className="mb-5">
            {block.text}
          </p>
        );
      })}
    </div>
  );
};
