import { styled } from "styled-components";

export const Container = styled.div`
  max-width: 800px;
`;


export const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 1.2rem;

`;

export const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 30px;
  font-size: 14px;
  color: #666;

  
  a {
    color: #4D699C;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 500px;

`;

export const FormGroup = styled.div`
  display: flex;


  gap: 70px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #333;
  width: 108px;

`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  width: 280px;
  

  &:focus {
    outline: none;
    border-color: #4D699C;
  }
  ${props => props.value && `
    border-color: #28a745;
  `}
`;

export const SuccessIcon = styled.span`
  position: absolute;
  right: 10px;
  top: 55%;
  transform: translateY(-50%);
  color: #28a745;

`;

export const InputWrapper = styled.div`
  position: relative;
`;


export const Button = styled.button`
  width: 120px;
  padding: 10px;
  background: rgb(77, 105, 156);
  color: white;
  border: none;
  border-radius: 6px;

  font-size: 14px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: rgb(67, 91, 136);
  }
`;