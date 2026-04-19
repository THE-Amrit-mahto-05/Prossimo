import React from 'react';
import { DashboardPage } from './pages/DashboardPage';
import { h } from './utils/h';

export function App() {
    return h('div', { style: { fontFamily: 'sans-serif', margin: '40px auto', maxWidth: '800px' } },
        h('h1', { style: { textAlign: 'center', color: '#333' } }, 'Emerging Market Research Platform'),
        h('hr', { style: { margin: '20px 0' } }),
        h(DashboardPage)
    );
}
