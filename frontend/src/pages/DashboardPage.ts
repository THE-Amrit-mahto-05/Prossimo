import * as React from 'react';
const { useState } = React;
import { UploadForm } from '../components/UploadForm';
import { AnalyticsDashboard } from '../components/AnalyticsDashboard';
import { ResearchSearch } from '../components/ResearchSearch';
import { RecentPapersList } from '../components/RecentPapersList';
import { h } from '../utils/h';

export function DashboardPage() {
    const [refreshTrigger, setRefreshTrigger] = useState(0);

    const triggerRefresh = () => setRefreshTrigger(prev => prev + 1);

    return h('div', { 
        className: 'animate-fade-in',
        style: { 
            display: 'grid', 
            gridTemplateColumns: 'minmax(350px, 400px) 1fr', 
            gap: '40px',
            alignItems: 'start'
        } 
    },
        h('section', { style: { position: 'sticky', top: '100px' } }, 
            h(ResearchSearch, { onImportSuccess: triggerRefresh }),
            h(UploadForm, { onUploadSuccess: triggerRefresh })
        ),
        h('section', null, 
            h(AnalyticsDashboard, { refreshTrigger }),
            h(RecentPapersList, { refreshTrigger })
        )
    );
}
