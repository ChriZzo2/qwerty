import styled, { keyframes } from 'styled-components';
import { useEffect } from 'react';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Container = styled.div<{ type: 'success' | 'error' }>`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 16px 24px;
  background: ${props => props.type === 'success' ? '#4caf50' : '#f44336'};
  color: white;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  animation: ${slideIn} 0.3s ease;
  z-index: 1000;
  font-size: 14px;
`;

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
  duration?: number;
}

export const Toast = ({ message, type, onClose, duration = 3000 }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <Container type={type}>
      {message}
    </Container>
  );
};