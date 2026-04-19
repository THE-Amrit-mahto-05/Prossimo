import React from 'react';
import { h } from '../utils/h';

const mockData = [
    { industryName: 'Technology', count: 120, avgFunding: 85 },
    { industryName: 'Healthcare', count: 90, avgFunding: 92 },
    { industryName: 'Finance', count: 42, avgFunding: 71 }
];

export function AnalyticsDashboard() {
    return h('div', { className: 'dashboard-container animate-fade-in' },
        h('h2', { style: { marginBottom: '24px', color: 'var(--text-main)', fontSize: '24px' } }, 'Market Analytics Overview'),
        h('div', { 
            style: { 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                gap: '20px' 
            } 
        },
            ...mockData.map((stat, idx) => 
                h('div', { 
                    key: idx, 
                    className: 'glass-card',
                    style: { 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: '12px',
                        borderLeft: `4px solid ${idx === 0 ? 'var(--primary)' : idx === 1 ? 'var(--secondary)' : 'var(--accent)'}`
                    } 
                },
                    h('div', null,
                        h('span', { style: { color: 'var(--text-muted)', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase' } }, 'Industry'),
                        h('h4', { style: { fontSize: '18px', marginTop: '4px' } }, stat.industryName)
                    ),
                    h('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' } },
                        h('div', null,
                            h('div', { style: { color: 'var(--text-muted)', fontSize: '12px' } }, 'Total Papers'),
                            h('div', { style: { fontSize: '20px', fontWeight: 'bold' } }, stat.count)
                        ),
                        h('div', { style: { textAlign: 'right' } },
                            h('div', { style: { color: 'var(--text-muted)', fontSize: '12px' } }, 'Avg Funding'),
                            h('div', { style: { fontSize: '20px', fontWeight: 'bold', color: 'var(--secondary)' } }, `${stat.avgFunding}%`)
                        )
                    ),
                    // Visual funding indicator (simple progress bar)
                    h('div', { 
                        style: { 
                            height: '4px', 
                            background: 'rgba(255,255,255,0.1)', 
                            borderRadius: '2px', 
                            overflow: 'hidden',
                            marginTop: '8px'
                        } 
                    },
                        h('div', { 
                            style: { 
                                height: '100%', 
                                width: `${stat.avgFunding}%`, 
                                background: 'var(--secondary)',
                                borderRadius: '2px'
                            } 
                        })
                    )
                )
            )
        )
    );
}
