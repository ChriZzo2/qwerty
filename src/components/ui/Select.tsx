import styled from 'styled-components';
import { IoChevronDown } from 'react-icons/io5';

interface SelectProps {
  error?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const SelectWrapper = styled.div<SelectProps>`
  position: relative;
  display: inline-block;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
`;

const StyledSelect = styled.select<SelectProps>`
  padding: 10px 17px;
  padding-right: 36px;
  font-size: 14px;
  font-weight: 700;
  border: 1px solid ${props => props.error ? '#dc3545' : '#ddd'};
  border-radius: 4px;
  transition: all 0.2s ease;
  width: 100%;
  background: white;
  cursor: pointer;
  appearance: none;
  
  &:focus {
    outline: none;
    border-color: ${props => props.error ? '#dc3545' : 'rgb(77, 105, 156)'};
    box-shadow: 0 0 0 2px ${props => props.error ? 'rgba(220, 53, 69, 0.25)' : 'rgba(77, 105, 156, 0.25)'};
  }
  
  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 12px;
  top: 60%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #666;
`;

export const Select = ({ children, ...props }: SelectProps) => (
  <SelectWrapper fullWidth={props.fullWidth}>
    <StyledSelect {...props}>
      {children}
    </StyledSelect>
    <IconWrapper>
      <IoChevronDown size={16} />
    </IconWrapper>
  </SelectWrapper>
);

export const Option = styled.option`
  padding: 8px 12px;
`;