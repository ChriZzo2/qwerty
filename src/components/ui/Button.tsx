import styled from 'styled-components';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
}

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &:active {
    outline: none;
  }

  ${props => {
    switch (props.size) {
      case 'small':
        return `
          padding: 8px 16px;
          font-size: 12px;
        `;
      case 'large':
        return `
          padding: 12px 24px;
          font-size: 16px;
        `;
      case 'medium':
        return `
          padding: 10px 20px;
          font-size: 14px;
        `;
      default:
        return `
          padding: 10px 30px;
          font-size: 14px;
        `;
    }
  }}
  ${props => props.fullWidth && `
    width: 100%;
  `}
  ${props => {
    switch (props.variant) {
      case 'secondary':
        return `
          background: white;
          border: 1px solid #e0e0e0;
          color: #333;
          
          &:hover {
            background: #f5f5f5;
          }
        `;
      case 'ghost':
        return `
          background: transparent;
          border: none;
          color: #4D699C;
          
          &:hover {
            background: rgba(77, 105, 156, 0.1);
          }
        `;
      default:
        return `
          background: rgb(77, 105, 156);
          border: none;
          color: white;
          
          &:hover {
            background: rgb(67, 91, 136);
          }
        `;
    }
  }}
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;