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
        { style: { display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '15px' } },
        React.createElement('label', { style: { fontWeight: 'bold', fontSize: '14px', color: '#333' } }, props.label),
        React.createElement(InputField, { 
            value: props.value, 
            onChange: props.onChange, 
            type: props.type, 
            placeholder: props.placeholder 
        })
    );
}
