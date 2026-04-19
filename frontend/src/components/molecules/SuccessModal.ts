import React from 'react';
import { h } from '../../utils/h';
import { Button } from '../atoms/Button';

export interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    year: number;
    industry: string;
}

export function SuccessModal({ isOpen, onClose, title, year, industry }: SuccessModalProps) {
    if (!isOpen) return null;

    return h('div', {
        style: {
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(8px)',
            padding: '20px'
        }
    },
        h('div', {
            className: 'glass-card animate-scale-up',
            style: {
                maxWidth: '500px',
                width: '100%',
                padding: '40px',
                textAlign: 'center',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
            }
        },
            h('div', {
                style: {
                    width: '64px',
                    height: '64px',
                    background: 'rgba(0, 230, 118, 0.1)',
                    color: '#00e676',
                    borderRadius: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px',
                    fontSize: '32px'
                }
            }, '✓'),

            h('h2', { style: { fontSize: '24px', fontWeight: '700', marginBottom: '8px' } }, 'Paper Imported!'),
            h('p', { style: { color: 'var(--text-muted)', marginBottom: '32px' } }, 'This research has been added to your dashboard and analytics.'),

            h('div', {
                style: {
                    textAlign: 'left',
                    background: 'rgba(255,255,255,0.03)',
                    padding: '20px',
                    borderRadius: 'var(--radius-md)',
                    marginBottom: '32px',
                    border: '1px solid var(--border-color)'
                }
            },
                h('div', { style: { marginBottom: '12px' } },
                    h('div', { style: { fontSize: '11px', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', marginBottom: '4px' } }, 'Title'),
                    h('div', { style: { fontWeight: '500', lineHeight: '1.4' } }, title)
                ),
                h('div', { style: { display: 'flex', gap: '20px' } },
                    h('div', { style: { flex: 1 } },
                        h('div', { style: { fontSize: '11px', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', marginBottom: '4px' } }, 'Year'),
                        h('div', { style: { fontWeight: '500' } }, year)
                    ),
                    h('div', { style: { flex: 1 } },
                        h('div', { style: { fontSize: '11px', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', marginBottom: '4px' } }, 'Industry'),
                        h('div', { style: { fontWeight: '600', color: 'var(--primary)' } }, industry)
                    )
                )
            ),

            h(Button, {
                text: 'Done',
                onClick: onClose,
                style: { width: '100%' }
            })
        )
    );
}
