import { useNavigate } from 'react-router-dom';
import { login } from '../../store/authSlice';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { RootState } from '../../store';
import logo from "../../assets/baseGroup.svg";
import { Button } from "../ui/Button";
import { Toast } from '../ui/Toast';
import { useState } from 'react';
import { ToastState } from './types/register.types';
import { Container, Form, Logo, Label, Input, ErrorMessage, InputContainer, RegistrationLink, FormFooter } from './styles/LoginForm.styles';



export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading } = useAppSelector((state: RootState) => state.auth);
  const [toast, setToast] = useState<ToastState>({
    show: false,
    message: '',
    type: 'success'
  });
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      await dispatch(login(data)).unwrap();
      setToast({
        show: true,
        message: 'Вход выполнен успешно! Перенаправление...',
        type: 'success'
      });
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    } catch (err: any) {
      setToast({
        show: true,
        message: err.message || 'Неверный email или пароль',
        type: 'error'
      });
    }
  };

  return (
    <Container>
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(prev => ({ ...prev, show: false }))}
        />
      )}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Logo>
          <img src={logo} alt="logo" />
          AssistantLab
        </Logo>

        <InputContainer>
          <Label>Email</Label>
          <Input
            type="email"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
          />
        </InputContainer>

        <InputContainer>
          <Label>Password</Label>
          <Input
            type="password"
            {...register('password', { 
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters'
              }
            })}
          />
        </InputContainer>

        {(errors.email || errors.password) && (
          <ErrorMessage>
            {(errors.email?.message || errors.password?.message) as string}
          </ErrorMessage>
        )}

        <Button 
          type="submit" 
          disabled={isLoading}
          style={{ marginLeft: '165px', width: '110px' }}
        >
          {isLoading ? 'Loading...' : 'Sign in'}
        </Button>

        <FormFooter>
          <RegistrationLink to="/register">
            Нет аккаунта? Зарегистрироваться
          </RegistrationLink>
        </FormFooter>
      </Form>

    </Container>
  );
};