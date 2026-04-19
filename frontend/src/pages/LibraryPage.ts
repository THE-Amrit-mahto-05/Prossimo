import React from 'react';
import { RecentPapersList } from '../components/RecentPapersList';
import { h } from '../utils/h';

export function LibraryPage() {
    return h('div', { className: 'animate-fade-in' },
        h('div', { style: { marginBottom: '32px' } },
            h('h1', { style: { fontSize: '32px', fontWeight: 'bold', marginBottom: '8px' } }, 'Research Library'),
            h('p', { style: { color: 'var(--text-muted)' } }, 'Your complete collection of research papers and analytics data.')
        ),
        h(RecentPapersList)
    );
}
