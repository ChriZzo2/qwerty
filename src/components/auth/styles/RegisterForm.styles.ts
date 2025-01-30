import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 8px;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 470px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  color: #666;
  font-size: 18px;
  font-weight: 600;
  margin-left: 165px;

  img {
    width: 35px;
    height: 35px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 70px;
  width: 100%;
  margin-bottom: 8px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #000;
  width: 100px;
`;

export const Input = styled.input`
  width: 300px;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #0066cc;
  }
`;

export const ErrorMessage = styled.div`
  color: #dc3545;
  font-size: 12px;
  margin-top: 4px;
  margin-left: 165px;
`;

export const LoginLink = styled(Link)`
  color: #4D699C;
  text-decoration: none;
  font-size: 14px;
  margin-top: 16px;
  text-align: center;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const FormFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-left: 30px;
`;