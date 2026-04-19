import React, { useState } from 'react';
import { h } from './utils/h';
import { DashboardPage, InsightsPage, LibraryPage } from './pages';

type Tab = 'dashboard' | 'insights' | 'library';

export function App() {
    const [currentTab, setCurrentTab] = useState<Tab>('dashboard');

    const renderContent = () => {
        switch (currentTab) {
            case 'insights': return h(InsightsPage);
            case 'library': return h(LibraryPage);
            default: return h(DashboardPage);
        }
    };

    return h('div', { className: 'app-wrapper', style: { paddingBottom: '60px' } },
        h('header', {
            className: 'glass-panel transition-all',
            style: {
                margin: '20px',
                padding: '16px 40px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'sticky',
                top: '20px',
                zIndex: 100
            }
        },
            h('div', {
                onClick: () => setCurrentTab('dashboard'),
                style: { display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }
            },
                h('div', {
                    style: {
                        width: '32px',
                        height: '32px',
                        background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '18px'
                    }
                }, 'P'),
                h('h1', { style: { fontSize: '20px', margin: 0, fontWeight: '700' } }, 'Prossimo')
            ),
            h('nav', { style: { display: 'flex', gap: '24px' } },
                ['dashboard', 'insights', 'library'].map(tab =>
                    h('span', {
                        key: tab,
                        onClick: () => setCurrentTab(tab as Tab),
                        className: 'transition-all',
                        style: {
                            color: currentTab === tab ? 'var(--primary)' : 'var(--text-muted)',
                            fontWeight: currentTab === tab ? '600' : '400',
                            cursor: 'pointer',
                            fontSize: '14px',
                            textTransform: 'capitalize'
                        }
                    }, tab)
                )
            )
        ),

        h('main', {
            className: 'animate-fade-in',
            style: { maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }
        },
            renderContent()
        )
    );
}
