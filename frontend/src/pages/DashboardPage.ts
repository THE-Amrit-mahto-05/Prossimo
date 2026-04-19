import React from 'react';
import { UploadForm } from '../components/UploadForm';
import { AnalyticsDashboard } from '../components/AnalyticsDashboard';
import { h } from '../utils/h';

export function DashboardPage() {
    return h('div', { 
        className: 'animate-fade-in',
        style: { 
            display: 'grid', 
            gridTemplateColumns: '350px 1fr', 
            gap: '32px',
            alignItems: 'start'
        } 
    },
        h('section', { style: { position: 'sticky', top: '100px' } }, 
            h(UploadForm)
        ),
        h('section', null, 
            h(AnalyticsDashboard)
        )
    );
}
