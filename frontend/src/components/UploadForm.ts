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

    return h('form', { onSubmit: handleSubmit, style: { display: 'flex', flexDirection: 'column', gap: '10px', background: '#f9f9f9', padding: '20px', borderRadius: '8px' } },
        h('h3', null, 'Upload Research Paper'),

        error ? h('div', { style: { color: 'red', marginBottom: '10px' } }, error) : null,
        lastUploaded ? h('div', { style: { color: 'green', marginBottom: '10px' } }, `Success! ID: ${lastUploaded.paperId}`) : null,

        h(FormField, { label: 'Paper Title', value: title, onChange: (e: any) => setTitle(e.target.value) }),
        h(FormField, { label: 'Publication Year', value: year, type: 'number', onChange: (e: any) => setYear(Number(e.target.value)) }),
        h(FormField, { label: 'Industry ID', value: industryId, onChange: (e: any) => setIndustryId(e.target.value) }),

        h(Button, { text: 'Submit Paper', type: 'submit', isLoading: isLoading })
    );
}
