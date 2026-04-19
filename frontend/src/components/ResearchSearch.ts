import React, { useState } from 'react';
import { h } from '../utils/h';
import { Button } from './atoms/Button';
import { InputField } from './atoms/InputField';
import { paperService } from '../services/PaperService';
import { SuccessModal } from './molecules/SuccessModal';

export function ResearchSearch({ onImportSuccess }: { onImportSuccess?: () => void }) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<any[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const [importingId, setImportingId] = useState<string | null>(null);
    const [modalData, setModalData] = useState<{ title: string, year: number, industry: string } | null>(null);

    const handleSearch = async (e: any) => {
        e.preventDefault();
        if (!query.trim()) return;

        setIsSearching(true);
        try {
            const data = await paperService.searchPapers(query);
            setResults(data);
        } catch (err) {
            console.error('Search failed', err);
        } finally {
            setIsSearching(false);
        }
    };

    const handleImport = async (id: string) => {
        setImportingId(id);
        try {
            const paper = await paperService.importPaper(id);
            setModalData({
                title: paper.title,
                year: paper.year,
                industry: paper.industryName
            });

            if (onImportSuccess) onImportSuccess();
            setResults(prev => prev.filter(r => r.externalId !== id));
        } catch (err) {
            console.error('Import failed', err);
            alert('Failed to import paper.');
        } finally {
            setImportingId(null);
        }
    };

    return h('div', null,
        h(SuccessModal, { 
            isOpen: !!modalData, 
            onClose: () => setModalData(null),
            title: modalData?.title || '',
            year: modalData?.year || 0,
            industry: modalData?.industry || ''
        }),

        h('div', { className: 'glass-card animate-fade-in', style: { marginBottom: '32px' } },
            h('h3', { style: { marginBottom: '20px', color: 'var(--primary)' } }, 'Search Global Research'),

            h('form', { onSubmit: handleSearch, style: { display: 'flex', gap: '12px', marginBottom: '20px' } },
                h('div', { style: { flex: 1 } },
                    h(InputField, {
                        value: query,
                        onChange: (e: any) => setQuery(e.target.value),
                        placeholder: 'e.g. "Quantum machine learning"'
                    })
                ),
                h(Button, { text: 'Search', type: 'submit', isLoading: isSearching })
            ),

            results.length > 0 ? h('div', { style: { display: 'flex', flexDirection: 'column', gap: '12px' } },
                ...results.map((res, idx) =>
                    h('div', {
                        key: idx,
                        style: {
                            padding: '12px',
                            background: 'rgba(255,255,255,0.03)',
                            borderRadius: 'var(--radius-sm)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            border: '1px solid var(--border-color)'
                        }
                    },
                        h('div', { style: { flex: 1, paddingRight: '15px' } },
                            h('div', { style: { fontWeight: '600', fontSize: '14px', marginBottom: '4px' } }, res.title),
                            h('div', { style: { fontSize: '12px', color: 'var(--text-muted)' } },
                                `${res.year} • ${res.authors.slice(0, 2).join(', ')}${res.authors.length > 2 ? ' et al.' : ''}`
                            )
                        ),
                        h(Button, {
                            text: 'Import',
                            onClick: () => handleImport(res.externalId),
                            isLoading: importingId === res.externalId
                        })
                    )
                )
            ) : query && !isSearching ? h('div', { style: { color: 'var(--text-muted)', fontSize: '14px', textAlign: 'center' } }, 'No papers found.') : null
        )
    );
}
