import styled from 'styled-components';

interface InputProps {
    error?: boolean;
    fullWidth?: boolean;
}

export const Input = styled.input<InputProps>`
    padding: 10px 12px;
    font-size: 14px;
    border: 1px solid ${props => props.error ? '#dc3545' : '#ddd'};
    border-radius: 4px;
    transition: all 0.2s ease;
    width: ${props => props.fullWidth ? '100%' : 'auto'};

    &:focus {
        outline: none;
        border-color: ${props => props.error ? '#dc3545' : 'rgb(77, 105, 156)'};
        box-shadow: 0 0 0 2px ${props => props.error ? 'rgba(220, 53, 69, 0.25)' : 'rgba(77, 105, 156, 0.25)'};
    }

    &::placeholder {
        color: #999;
    }

    &:disabled {
        background-color: #f5f5f5;
        cursor: not-allowed;
    }
`;