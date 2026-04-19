import React, { ChangeEvent } from 'react';

interface InputFieldProps {
    value: string | number;
    onChange: (e: ChangeEvent) => void;
    type?: string;
    placeholder?: string;
    required?: boolean;
}

export function InputField(props: InputFieldProps) {
    const inputType = props.type || 'text';
    
    return React.createElement(
        'input',
        {
            type: inputType,
            value: props.value,
            onChange: props.onChange,
            placeholder: props.placeholder,
            required: props.required,
            className: 'premium-input'
        }
    );
}
