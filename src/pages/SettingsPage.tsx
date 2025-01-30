import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from "react";

import {useAppSelector, useAppDispatch} from '@/hooks/redux';
import {authApi} from '@/api/auth';
import {userInfo, logout} from "@/store/authSlice.ts";
import {Button} from '@/components/ui/Button.tsx';
import {Toast} from '@/components/ui/Toast';
import {ToastState} from '@/components/auth/types/register.types';

import {
    Container,
    Title,
    Row,
    Label,
    Value,
    StyledInput,
    StyledLink,
    CheckboxGroup,
    CheckboxLabel,
    Email,
    Tg,
    Subscription,
    StyledSpan,
    StyledCheckbox
} from './styles/SettingsPage.styles';

export const SettingsPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {user} = useAppSelector(state => state.auth);
    const [formData, setFormData] = useState({
        name: user?.name || '',
        tg_name: user?.tg_name || '',
        notifications_email: !!user?.notifications_email,
        notifications_tg: !!user?.notifications_tg
    });
    const [toast, setToast] = useState<ToastState>({
        show: false,
        message: '',
        type: 'success'
    });

    useEffect(() => {
        dispatch(userInfo());
    }, [dispatch]);
    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name || '',
                tg_name: user.tg_name || '',
                notifications_email: !!user.notifications_email,
                notifications_tg: !!user.notifications_tg
            });
        }
    }, [user]);

    const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [field]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        }));
    };
    console.log(formData)
    const handleSubmit = async () => {

        try {
            await authApi.updateUser({
                name: formData.name,
                tg_name: formData.tg_name,
                notifications_email: formData.notifications_email,
                notifications_tg: formData.notifications_tg
            });

            setToast({
                show: true,
                message: 'Настройки успешно сохранены',
                type: 'success'
            });

            // Refresh user info after update
            dispatch(userInfo());
        } catch (error) {
            console.error(error)
            setToast({
                show: true,
                message: 'Ошибка при сохранении настроек',
                type: 'error'
            });
        }
    };

    const handleLogout = async () => {
        try {
            await dispatch(logout()).unwrap();
            navigate('/login');
        } catch (error) {
            console.error('Logout failed', error);
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

            <Title>Мои настройки</Title>

            <Row>
                <Label>Дата регистрации</Label>
                <Value>12 июня 2024 года</Value>
            </Row>

            <Row>
                <Label>Подписка</Label>
                <Value>
                    <Subscription>1 ассистент</Subscription>
                    <StyledSpan>Оплачено до 13 января</StyledSpan>
                    <StyledLink to="/dashboard/subscription">Продлить подписку</StyledLink>
                </Value>


            </Row>


            <Row>
                <Label>Username</Label>
                <Value>
                    <Subscription>{user?.name}</Subscription>
                    <StyledLink to="#" onClick={handleLogout}>Logout</StyledLink>
                </Value>
            </Row>


            <Row>
                <Label>Email</Label>
                <Value>
                    <StyledInput
                        type="email"
                        value={user?.email || ''}
                        onChange={() => {
                        }}
                    />
                </Value>

            </Row>

            <Row>
                <Label>Пароль</Label>
                <Value>
                    <StyledLink to="/dashboard/change-password">Изменить пароль</StyledLink>
                </Value>
            </Row>

            <Row>
                <Label>Телеграм</Label>
                <Value>
                    <StyledInput
                        type="text"
                        value={formData.tg_name || ''}
                        onChange={handleInputChange('tg_name')}
                    />
                </Value>

            </Row>

            <Row>
                <Label>Уведомления системные</Label>
                <Value>
                    <CheckboxGroup>
                        <CheckboxLabel>
                            <StyledCheckbox
                                type="checkbox"
                                checked={formData.notifications_email}
                                onChange={handleInputChange('notifications_email')}
                            />
                            <Email>Email</Email>
                        </CheckboxLabel>
                        <CheckboxLabel>
                            <StyledCheckbox
                                type="checkbox"
                                checked={false}
                                onChange={() => {
                                }}
                            />
                            <Tg>botscripterbot</Tg>
                        </CheckboxLabel>

                    </CheckboxGroup>
                </Value>

            </Row>

            <Row>
                <Label>Уведомления о событиях</Label>
                <Value>
                    <CheckboxGroup>
                        <CheckboxLabel>
                            <StyledCheckbox
                                type="checkbox"
                                checked={formData.notifications_tg}
                                onChange={handleInputChange('notifications_tg')}
                            />
                            <Email>Email</Email>
                        </CheckboxLabel>
                        <CheckboxLabel>
                            <StyledCheckbox


                                type="checkbox"
                                checked={false}
                                onChange={() => {/* handle checkbox change */
                                }}
                            />
                            <Tg>botscripterbot</Tg>
                        </CheckboxLabel>
                    </CheckboxGroup>
                </Value>

            </Row>
            <Button
                variant="primary"
                size="medium"
                style={{marginLeft: '230px'}}
                onClick={handleSubmit}
            >
                Сохранить
            </Button>
        </Container>
    );
};