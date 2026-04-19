import React from 'react';

interface ButtonProps {
    text: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    isLoading?: boolean;
}

export function Button(props: ButtonProps) {
    const buttonType = props.type || 'button';

    return React.createElement(
        'button',
        {
            type: buttonType,
            onClick: props.onClick,
            disabled: props.isLoading,
            className: 'premium-button',
            style: {
                padding: '12px 24px',
                cursor: props.isLoading ? 'not-allowed' : 'pointer',
                background: props.isLoading
                    ? 'var(--border-color)'
                    : 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                color: 'white',
                border: 'none',
                borderRadius: 'var(--radius-sm)',
                fontWeight: '600',
                fontSize: '15px',
                letterSpacing: '0.01em',
                boxShadow: props.isLoading ? 'none' : '0 4px 15px -4px hsla(245, 80%, 65%, 0.4)',
                transform: 'translateZ(0)',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
            }
        },
        props.isLoading ? [
            React.createElement('span', { key: 'spinner', className: 'spinner' }),
            'Processing...'
        ] : props.text
    );
}

