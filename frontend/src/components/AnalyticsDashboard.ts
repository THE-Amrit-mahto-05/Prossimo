import React, { useEffect } from 'react';
import { h } from '../utils/h';
import { useAnalytics } from '../hooks/useAnalytics';

const fallbackData = [
    { industryName: 'Technology (Example)', count: 0, avgFunding: 85 },
    { industryName: 'Healthcare (Example)', count: 0, avgFunding: 92 },
    { industryName: 'Finance (Example)', count: 0, avgFunding: 71 }
];

export function AnalyticsDashboard({ refreshTrigger }: { refreshTrigger?: any }) {
    const { stats, isLoading, refresh } = useAnalytics();

    useEffect(() => {
        if (refreshTrigger) refresh();
    }, [refreshTrigger, refresh]);

    const displayData = stats.length > 0 ? stats : fallbackData;

    return h('div', { className: 'dashboard-container animate-fade-in' },
        h('h2', { style: { marginBottom: '24px', color: 'var(--text-main)', fontSize: '24px' } }, 'Market Analytics Overview'),
        h('div', {
            style: {
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '20px'
            }
        },
            ...displayData.map((stat, idx) =>
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
                        h('h4', { style: { fontSize: '18px', marginTop: '4px' } },
                            (stat.industryName && stat.industryName !== 'Unknown')
                                ? stat.industryName
                                : 'General Research'
                        )
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
