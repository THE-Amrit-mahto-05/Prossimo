import React from 'react';
import { InputField } from '../atoms/InputField';

interface FormFieldProps {
    label: string;
    value: string | number;
    onChange: (e: any) => void;
    type?: string;
    placeholder?: string;
}

export function FormField(props: FormFieldProps) {
    return React.createElement(
        'div',
        { className: 'form-field', style: { marginBottom: '20px' } },
        React.createElement('label', { 
            style: { 
                display: 'block',
                fontWeight: '500', 
                fontSize: '14px', 
                color: 'var(--text-muted)',
                marginBottom: '8px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
            } 
        }, props.label),
        React.createElement(InputField, { 
            value: props.value, 
            onChange: props.onChange, 
            type: props.type, 
            placeholder: props.placeholder 
        })
    );
}
