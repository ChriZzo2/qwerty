import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Container = styled.div`
  max-width: 800px;
`;


export const Title = styled.div`
  font-size: 20px;
    font-weight: 600;
  margin-bottom: 1.6rem;

`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.8rem;
  gap: 1.5rem;

`;

export const Label = styled.div`
  width: 200px;
    font-size: 14px;
    color: rgb(0, 0, 0);
    font-weight: 400;

`;

export const Value = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-size: 14px;
  font-weight: 400;

`;


export const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  width: 300px;

  &:focus {
    outline: none;
    border-color: #4D699C;
  }
`;


export const StyledLink = styled(Link)`
  color: #0066cc;
  text-decoration: none;
  font-size: 14px;
  

  &:hover {
    text-decoration: underline;
  }
`;

export const CheckboxGroup = styled.div`
  display: flex;
  gap: 1.4rem;
`;


export const StyledCheckbox = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  appearance: none;
  border: 1px solid #ddd;
  outline: none;

  cursor: pointer;
  position: relative;

  &:checked {
    background-color: rgb(77, 105, 156);
    border-color: rgb(77, 105, 156);
  }

  &:checked::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 12px;
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

`;

export const Email = styled.div`
  font-size: 14px;
  font-weight: 400;
`;


export const Tg = styled.div`  
  font-size: 14px;
  font-weight: 400;
  color: rgb(77, 105, 156);

`;

export const Subscription = styled.div`
  font-size: 14px;
  font-weight: 700;
`;


export const StyledSpan = styled.span`
  font-size: 14px;
  font-weight: 400;
`;