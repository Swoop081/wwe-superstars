/* Move + menu icons: original line-art SVGs (stroke = currentColor). Stat icons stay your own artwork in /assets. */
(function () {
  const S = p => '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + '</svg>';
  window.ICONS = {
    powerslam: S('<path d="M16 3v15M9.5 11.5 16 18l6.5-6.5"/><path d="M3 27h26"/><path d="M7 23 4 19M25 23l3-4M12 24l-2-5M20 24l2-5"/>'),
    strike: S('<path d="M5 25 21 7"/><path d="M12 28 28 10"/><path d="M3 15 13 4"/><path d="M22 4l1.5 3L27 8l-3.5 1.5L22 13l-1.5-3.5L17 8l3.5-1z" fill="currentColor" stroke="none"/>'),
    suplex: S('<circle cx="16" cy="8" r="3.5"/><path d="M5 26a11 11 0 0 1 3-13M27 26a11 11 0 0 0-3-13"/><path d="M5 26l-1-5M5 26l5-1"/><path d="M12 24h8"/>'),
    dive: S('<path d="M3 6h26M3 11h26"/><path d="M9 14l14 14"/><path d="M23 20v8h-8"/>'),
    hold: S('<circle cx="12" cy="16" r="7.5"/><circle cx="20" cy="16" r="7.5"/>'),
    chair: S('<path d="M9 3v14M9 5h13v12"/><path d="M5 17h22M8 17l-2 11M24 17l2 11"/>'),
    reversal: S('<path d="M5 11h20M20 6l5 5-5 5"/><path d="M27 21H7M12 16l-5 5 5 5"/>'),
    crowd: S('<path d="M16 3l3.2 9.3L29 16l-9.8 3.7L16 29l-3.2-9.3L3 16l9.8-3.7z"/>'),
    finisher: '<svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M19 2 6 18h8l-2 12 14-17h-8z"/></svg>',
    fight: S('<path d="M6 26 26 6"/><path d="M6 6l20 20"/><path d="M4 10l6-6M28 22l-6 6"/>'),
    gauntlet: S('<path d="M16 28c-6 0-9-4-9-8 0-5 4-6 4-11 3 2 5 4 5 7 1-2 1-4 0-7 6 3 9 8 9 12 0 4-3 7-9 7z"/>'),
    goals: S('<path d="M9 4h14v7a7 7 0 0 1-14 0z"/><path d="M9 7H4v2a5 5 0 0 0 5 5M23 7h5v2a5 5 0 0 1-5 5"/><path d="M16 18v5M10 28h12M12 23h8"/>'),
    cards: S('<rect x="5" y="7" width="15" height="21" rx="2.5"/><path d="M12 4h13a2.5 2.5 0 0 1 2.5 2.5V22"/>'),
    gift: S('<rect x="4" y="12" width="24" height="16" rx="2"/><path d="M4 18h24M16 12v16"/><path d="M16 12c-6-1-8-8-3-8 3 0 3 5 3 8zm0 0c6-1 8-8 3-8-3 0-3 5-3 8z"/>')
  };
})();
