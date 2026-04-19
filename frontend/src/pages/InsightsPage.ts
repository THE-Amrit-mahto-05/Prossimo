import React from 'react';
import { AnalyticsDashboard } from '../components/AnalyticsDashboard';
import { h } from '../utils/h';

export function InsightsPage() {
    return h('div', { className: 'animate-fade-in' },
        h('div', { style: { marginBottom: '32px' } },
            h('h1', { style: { fontSize: '32px', fontWeight: 'bold', marginBottom: '8px' } }, 'Research Insights'),
            h('p', { style: { color: 'var(--text-muted)' } }, 'Comprehensive breakdown of your market holdings and industry distribution.')
        ),
        h(AnalyticsDashboard)
    );
}
