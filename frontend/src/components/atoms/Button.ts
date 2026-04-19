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
            style: {
                padding: '10px 15px', 
                cursor: props.isLoading ? 'not-allowed' : 'pointer', 
                background: props.isLoading ? '#ccc' : '#007BFF', 
                color: 'white', 
                border: 'none',
                borderRadius: '4px',
                fontWeight: 'bold'
            }
        }, 
        props.isLoading ? 'Processing...' : props.text
    );
}
