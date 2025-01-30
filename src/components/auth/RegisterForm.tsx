import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {useState} from 'react';

import {register} from '@/store/authSlice.ts';
import {useAppDispatch} from '@/hooks/redux.ts';

import {Button} from "@/components/ui/Button.tsx";
import {Toast} from "@/components/ui/Toast.tsx";
import {
    Container,
    Form,
    Logo,
    InputContainer,
    Label,
    Input,
    ErrorMessage,
    FormFooter,
    LoginLink
} from '@/components/auth/styles/RegisterForm.styles';
import {ToastState} from "@/components/auth/types/register.types.ts";

import logo from "@/assets/baseGroup.svg";


export const RegisterForm = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {register: registerField, handleSubmit, formState: {errors}} = useForm();
    const [toast, setToast] = useState<ToastState>({
        show: false,
        message: '',
        type: 'success'
    });

    const onSubmit = async (data: any) => {
        try {
            await dispatch(register(data)).unwrap();
            setToast({
                show: true,
                message: 'Регистрация прошла успешно! Пожалуйста, проверьте свою электронную почту, чтобы подтвердить свою учетную запись.',
                type: 'success'
            });
            setTimeout(() => {
                navigate('/login');
            }, 3000);
        } catch (err: any) {
            setToast({
                show: true,
                message: err.message || 'Регистрация не удалась. Пожалуйста, попробуйте еще раз.',
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
                    onClose={() => setToast(prev => ({...prev, show: false}))}
                />
            )}
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Logo>
                    <img src={logo} alt="logo"/>
                    AssistantLab
                </Logo>

                <InputContainer>
                    <Label>Your name</Label>
                    <Input
                        type="text"
                        {...registerField('name', {required: 'Name is required'})}
                    />
                </InputContainer>

                <InputContainer>
                    <Label>Email</Label>
                    <Input
                        type="email"
                        {...registerField('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address'
                            }
                        })}
                    />
                </InputContainer>

                {(errors.name || errors.email) && (
                    <ErrorMessage>
                        {(errors.name?.message || errors.email?.message) as string}
                    </ErrorMessage>
                )}

                <Button type="submit" style={{marginLeft: '165px', width: '110px'}}>Sign up</Button>

                <FormFooter>
                    <LoginLink to="/login">Уже есть аккаунт? Войти</LoginLink>
                </FormFooter>
            </Form>
        </Container>

    );
};