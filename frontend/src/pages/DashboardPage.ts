import React from 'react';
import { UploadForm } from '../components/UploadForm';
import { AnalyticsDashboard } from '../components/AnalyticsDashboard';
import { h } from '../utils/h';

export function DashboardPage() {
    return h('div', { style: { display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '40px' } },
        h(UploadForm),
        h(AnalyticsDashboard)
    );
}
