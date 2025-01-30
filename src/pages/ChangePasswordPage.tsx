import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';


import api from '@/api/client';
import {Toast} from '@/components/ui/Toast';
import {ToastState} from '@/components/auth/types/register.types';

import {
    Container,
    Title,
    Breadcrumb,
    Form,
    FormGroup,
    Label,
    Input,
    SuccessIcon,
    InputWrapper,
    Button
} from './styles/ChangePasswordPage.styles';
import {IoChevronForward} from 'react-icons/io5';
import {MdDone} from "react-icons/md";

interface ChangePasswordForm {
    oldPassword: string;
    newPassword: string;
}


export const ChangePasswordPage = () => {
    const {register, handleSubmit, watch} = useForm<ChangePasswordForm>();
    const [toast, setToast] = useState<ToastState>({
        show: false,
        message: '',
        type: 'success'
    });
    const navigate = useNavigate();

    const onSubmit = async (data: ChangePasswordForm) => {
        try {
            await api.put('/change_password', {
                old_password: data.oldPassword,
                password: data.newPassword,
                again_password: data.newPassword
            });

            setToast({
                show: true,
                message: 'Пароль успешно изменен',
                type: 'success'
            });

            setTimeout(() => {
                navigate('/dashboard/settings');
            }, 2000);

        } catch (error: any) {
            setToast({
                show: true,
                message: error.response?.data?.message || 'Ошибка при изменении пароля',
                type: 'error'
            });
        }
    };

    const newPassword = watch('newPassword');

    return (
        <Container>
            {toast.show && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(prev => ({...prev, show: false}))}
                />
            )}

            <Title>Мои настройки</Title>
            <Breadcrumb>
                <a href="/dashboard/settings">Мои настройки</a>
                <IoChevronForward size={14} color="#000000"/>
                <span>Изменить пароль</span>
            </Breadcrumb>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                    <Label>Старый пароль</Label>
                    <Input
                        type="password"
                        {...register('oldPassword', {required: true})}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Новый пароль</Label>
                    <InputWrapper>
                        <Input
                            type="password"
                            {...register('newPassword', {required: true})}
                        />
                        {newPassword && <SuccessIcon><MdDone size={20}/></SuccessIcon>}
                    </InputWrapper>
                </FormGroup>

                <Button
                    type="submit"
                    style={{marginLeft: '175px', marginTop: '5px'}}
                >
                    Сохранить
                </Button>
            </Form>
        </Container>
    );
};