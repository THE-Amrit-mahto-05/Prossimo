import React from 'react';
import { DashboardPage } from './pages/DashboardPage';
import { h } from './utils/h';

export function App() {
    return h('div', { className: 'app-wrapper', style: { paddingBottom: '60px' } },
        // Premium Header
        h('header', { 
            className: 'glass-panel', 
            style: { 
                margin: '20px', 
                padding: '20px 40px', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                position: 'sticky',
                top: '20px',
                zIndex: 100
            } 
        },
            h('div', { style: { display: 'flex', alignItems: 'center', gap: '12px' } },
                // Logo Mark
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
                h('span', { style: { color: 'var(--primary)', fontWeight: '600', cursor: 'pointer' } }, 'Dashboard'),
                h('span', { style: { color: 'var(--text-muted)', cursor: 'pointer' } }, 'Insights'),
                h('span', { style: { color: 'var(--text-muted)', cursor: 'pointer' } }, 'Library')
            )
        ),

        // Main Content
        h('main', { style: { maxWidth: '1200px', margin: '40px auto', padding: '0 20px' } },
            h(DashboardPage)
        )
    );
}
