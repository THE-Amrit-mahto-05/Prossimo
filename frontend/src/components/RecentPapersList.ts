import React, { useEffect } from 'react';
import { h } from '../utils/h';
import { useRecentPapers } from '../hooks/useRecentPapers';

export function RecentPapersList({ refreshTrigger }: { refreshTrigger?: any }) {
    const { papers, isLoading, refresh } = useRecentPapers();

    useEffect(() => {
        if (refreshTrigger) refresh();
    }, [refreshTrigger, refresh]);

    if (isLoading && papers.length === 0) {
        return h('div', { style: { padding: '20px', color: 'var(--text-muted)' } }, 'Loading recent research...');
    }

    if (papers.length === 0) {
        return h('div', { 
            className: 'glass-card',
            style: { 
                padding: '40px', 
                textAlign: 'center', 
                color: 'var(--text-muted)',
                borderStyle: 'dashed'
            } 
        }, 'No research papers imported yet. Search and import to see them here!');
    }

    return h('div', { style: { marginTop: '40px' } },
        h('h2', { 
            style: { 
                fontSize: '24px', 
                marginBottom: '24px', 
                background: 'linear-gradient(to right, #fff, #888)', 
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent',
                fontWeight: '700'
            } 
        }, 'Recent Research Imports'),
        
        h('div', { 
            style: { 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
                gap: '20px' 
            } 
        },
            ...papers.map((paper, idx) => 
                h('div', { 
                    key: paper.paperId || idx, 
                    className: 'glass-card animate-fade-in',
                    style: { 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: '12px',
                        animationDelay: `${idx * 0.05}s`
                    } 
                },
                    h('div', { 
                        style: { 
                            display: 'inline-block', 
                            padding: '4px 10px', 
                            background: 'rgba(94, 106, 210, 0.1)', 
                            color: 'var(--primary)', 
                            borderRadius: '100px', 
                            fontSize: '11px', 
                            fontWeight: '600',
                            alignSelf: 'start',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                        } 
                    }, paper.industryName),

                    h('div', { 
                        style: { 
                            fontSize: '16px', 
                            fontWeight: '600', 
                            lineHeight: '1.4',
                            color: '#fff' 
                        } 
                    }, paper.title),

                    h('div', { 
                        style: { 
                            fontSize: '13px', 
                            color: 'var(--text-muted)',
                            marginTop: 'auto'
                        } 
                    }, `Holdings since ${paper.year}`)
                )
            )
        )
    );
}
