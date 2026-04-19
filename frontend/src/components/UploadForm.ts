import React, { useState } from 'react';
import { FormField } from './molecules/FormField';
import { Button } from './atoms/Button';
import { usePapers } from '../hooks/usePapers';
import { h } from '../utils/h';

export function UploadForm() {
    const { uploadPaper, isLoading, error, lastUploaded } = usePapers();
    const [title, setTitle] = useState('');
    const [year, setYear] = useState<number>(2026);
    const [industryId, setIndustryId] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        uploadPaper({ title, year, industryId }).catch(() => { });
    };

    return h('form', { 
        onSubmit: handleSubmit, 
        className: 'glass-card animate-fade-in',
        style: { display: 'flex', flexDirection: 'column', gap: '10px' } 
    },
        h('h3', { style: { marginBottom: '20px', color: 'var(--primary)' } }, 'Upload Research Paper'),

        error ? h('div', { 
            style: { 
                background: 'rgba(255, 0, 0, 0.1)', 
                color: '#ff4d4d', 
                padding: '12px', 
                borderRadius: 'var(--radius-sm)',
                fontSize: '14px',
                border: '1px solid rgba(255, 0, 0, 0.2)',
                marginBottom: '15px'
            } 
        }, error) : null,
        
        lastUploaded ? h('div', { 
            style: { 
                background: 'rgba(0, 255, 0, 0.1)', 
                color: '#00e676', 
                padding: '12px', 
                borderRadius: 'var(--radius-sm)',
                fontSize: '14px',
                border: '1px solid rgba(0, 255, 0, 0.2)',
                marginBottom: '15px'
            } 
        }, `✨ Success! Paper ID: ${lastUploaded.paperId}`) : null,

        h(FormField, { label: 'Paper Title', value: title, onChange: (e: any) => setTitle(e.target.value), placeholder: 'Quantum Cryptography...' }),
        h(FormField, { label: 'Publication Year', value: year, type: 'number', onChange: (e: any) => setYear(Number(e.target.value)) }),
        h(FormField, { label: 'Industry ID', value: industryId, onChange: (e: any) => setIndustryId(e.target.value), placeholder: 'IND-99' }),

        h('div', { style: { marginTop: '10px' } }, 
            h(Button, { text: 'Analyze & Submit', type: 'submit', isLoading: isLoading })
        )
    );
}
