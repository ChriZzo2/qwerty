import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {useState} from 'react';

import {RootState} from '@/store';
import {useAppDispatch, useAppSelector} from '@/hooks/redux.ts';
import {login} from '@/store/authSlice.ts';
import {Button} from "@/components/ui/Button.tsx";
import {Toast} from '@/components/ui/Toast';
import {ToastState} from "@/components/auth/types/register.types.ts";

import {AssistantLabTitle, BaseLogo} from "@/assets/Logos.tsx";
import {
    Container,
    Form,
    Logo,
    Label,
    Input,
    ErrorMessage,
    InputContainer,
    RegistrationLink,
    FormFooter
} from '@/components/auth/styles/LoginForm.styles';

export const LoginForm = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {isLoading} = useAppSelector((state: RootState) => state.auth);
    const [toast, setToast] = useState<ToastState>({
        show: false,
        message: '',
        type: 'success'
    });

    const {register, handleSubmit, formState: {errors}} = useForm({
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
                    onClose={() => setToast(prev => ({...prev, show: false}))}
                />
            )}
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Logo>
                    <BaseLogo/>
                    <AssistantLabTitle/>
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
                    style={{marginLeft: '165px', width: '110px'}}
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