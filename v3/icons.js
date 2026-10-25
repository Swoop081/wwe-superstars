/* v3 icons: original line-art SVGs (stroke = currentColor). Wrestler art + stat icons are your own files in /assets. */
(function () {
  const S = p => '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + '</svg>';
  window.I3 = {
    chair: S('<path d="M9 3v14M9 5h13v12"/><path d="M5 17h22M8 17l-2 11M24 17l2 11"/>'),
    table: S('<path d="M4 12h24l-3-5H7z"/><path d="M7 12v14M25 12v14M7 18h18"/>'),
    ladder: S('<path d="M10 3v26M22 3v26M10 9h12M10 15h12M10 21h12"/>'),
    mic: S('<circle cx="16" cy="10" r="6"/><path d="M16 16v7M11 29h10M13 23h6"/>'),
    'dan-hibiki': S('<path d="M11 15V7a2 2 0 014 0v6h8l-1 11H11z"/><path d="M6 15h5v9H6z"/>'),
    'don-sauvage': S('<path d="M5 13l14-6v18L5 19z"/><path d="M19 12c4 0 7 1 7 4s-3 4-7 4"/><path d="M9 20l2 6h3"/>'),
    kendo: S('<path d="M6 26 26 6"/><path d="M5 27l4-1-3-3zM22 10l2 2M19 13l2 2"/>'),
    bell: S('<path d="M7 24c0-9 2-15 9-15s9 6 9 15z"/><path d="M5 24h22M16 9V5M14 28h4"/>'),
    manager: S('<circle cx="16" cy="10" r="5"/><path d="M6 28c0-8 4-11 10-11s10 3 10 11M16 17l-2 5 2 3 2-3z"/>'),
    mastermind: S('<circle cx="16" cy="13" r="8"/><path d="M12 25h8M13 29h6M13 13h6M16 10v6"/>'),
    belt: S('<ellipse cx="16" cy="16" rx="9" ry="7"/><path d="M2 16h5M25 16h5M16 11l1.5 3.5 3.5.5-2.5 2.5.6 3.5-3.1-1.7-3.1 1.7.6-3.5-2.5-2.5 3.5-.5z"/>'),
    spotlight: S('<path d="M13 4h6l1 5H12z"/><path d="M12 9 5 28h22l-7-19"/>'),
    barricade: S('<path d="M4 9h24v8H4z"/><path d="M8 17v11M24 17v11M10 13h12"/>'),
    legacy: S('<path d="M9 4h14v7a7 7 0 0 1-14 0z"/><path d="M9 7H4v2a5 5 0 0 0 5 5M23 7h5v2a5 5 0 0 1-5 5M16 18v5M10 28h12M12 23h8"/>'),
    solo: S('<circle cx="16" cy="9" r="4"/><path d="M8 28c0-7 3-10 8-10s8 3 8 10"/>'),
    tag: S('<circle cx="10" cy="10" r="3.5"/><circle cx="22" cy="10" r="3.5"/><path d="M3 27c0-6 3-9 7-9s7 3 7 9M15 27c0-6 3-9 7-9s7 3 7 9"/>'),
    divas: S('<circle cx="16" cy="9" r="4"/><path d="M8 28c2-8 4-10 8-10s6 2 8 10zM12 5l4-3 4 3"/>'),
    fight: S('<path d="M6 26 26 6"/><path d="M6 6l20 20"/><path d="M4 10l6-6M28 22l-6 6"/>'),
    ring: S('<path d="M4 8h24v16H4z"/><path d="M4 14h24M4 19h24M10 8v16M22 8v16"/>'),
    rumble: S('<circle cx="16" cy="16" r="12"/><path d="M16 8v8l5 3"/>'),
    bank: S('<rect x="6" y="12" width="20" height="14" rx="2"/><path d="M12 12V8a4 4 0 0 1 8 0v4M16 17v4"/>'),
    survivor: S('<path d="M16 3l3 8h8l-6.5 5 2.5 8-7-5-7 5 2.5-8L5 11h8z"/>'),
    campaign: S('<path d="M4 8l8-3 8 3 8-3v19l-8 3-8-3-8 3z"/><path d="M12 5v19M20 8v19"/>'),
    deck: S('<rect x="4" y="9" width="16" height="20" rx="2"/><path d="M10 6h14a2 2 0 0 1 2 2v17M16 3h12"/>'),
    cards: S('<rect x="5" y="7" width="15" height="21" rx="2.5"/><path d="M12 4h13a2.5 2.5 0 0 1 2.5 2.5V22"/>'),
    star: S('<path d="M16 3l3.5 8.5L28 12l-6.5 6 2 9L16 22.5 8.5 27l2-9L4 12l8.5-.5z"/>'),
    lock: S('<rect x="7" y="14" width="18" height="13" rx="2"/><path d="M11 14v-3a5 5 0 0 1 10 0v3"/>'),
    crown: S('<path d="M4 24h24l2-14-7 6-7-10-7 10-7-6z"/>'),
    gift: S('<rect x="4" y="12" width="24" height="16" rx="2"/><path d="M4 18h24M16 12v16"/><path d="M16 12c-6-1-8-8-3-8 3 0 3 5 3 8zm0 0c6-1 8-8 3-8-3 0-3 5-3 8z"/>'),
    puzzle: S('<path d="M6 6h8a3 3 0 1 1 6 0h6v8a3 3 0 1 0 0 6v6H6z"/>')
  };
})();
