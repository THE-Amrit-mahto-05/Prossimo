import React from 'react';
import { h } from '../utils/h';

const mockData = [
    { industryName: 'Technology', count: 120, avgFunding: 85 },
    { industryName: 'Healthcare', count: 90, avgFunding: 92 },
    { industryName: 'Finance', count: 42, avgFunding: 71 }
];

export function AnalyticsDashboard() {
    return h('div', { style: { border: '1px solid #ccc', padding: '20px', borderRadius: '8px' } },
        h('h2', null, 'Industry Analytics Dashboard'),
        h('div', { style: { display: 'flex', gap: '20px', marginTop: '20px' } },
            ...mockData.map((stat, idx) => 
                h('div', { key: idx, style: { background: '#f5f5f5', padding: '10px', minWidth: '150px' } },
                    h('h4', null, stat.industryName),
                    h('p', null, `Papers: `, h('strong', null, stat.count)),
                    h('p', null, `Avg Funding: `, h('strong', null, `${stat.avgFunding}/100`))
                )
            )
        )
    );
}
