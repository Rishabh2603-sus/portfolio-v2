import { useRef, useCallback } from 'react';

/**
 * Returns a ref to attach to a card element and a mouse move handler.
 * On mouse move, the card's --x and --y CSS variables are updated to
 * the cursor's position relative to the card, driving a radial-gradient
 * spotlight in CSS via `background` or `::before`.
 */
export function useGlowCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--glow-x', `${x}px`);
    card.style.setProperty('--glow-y', `${y}px`);
    card.style.setProperty('--glow-opacity', '1');
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--glow-opacity', '0');
  }, []);

  return { cardRef, handleMouseMove, handleMouseLeave };
}
