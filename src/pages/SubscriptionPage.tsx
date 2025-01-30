import {Option} from '@/components/ui/Select';
import {Button} from '@/components/ui/Button';

import {IoChevronForward} from 'react-icons/io5';
import {
    Container,
    Title,
    Breadcrumbs,
    SubscriptionInfo,
    FormGroup,
    Label,
    StyledSelect,
    PriceInfo,
    Price
} from './styles/SubscriptionPage.styles';


export const SubscriptionPage = () => {
    return (
        <Container>
            <Title>Мои настройки</Title>
            <Breadcrumbs>
                <a href="/dashboard/settings">Мои настройки</a>
                <IoChevronForward size={14} color="#000000"/>
                <span>Продление подписки</span>
            </Breadcrumbs>


            <SubscriptionInfo>
                Текущая подписка оплачена до 13 января 2025
            </SubscriptionInfo>

            <FormGroup>
                <Label>Подписка</Label>
                <StyledSelect>
                    <Option value="1">1 ассистент</Option>
                    <Option value="2">2 ассистента</Option>
                    <Option value="3">3 ассистента</Option>

                </StyledSelect>
            </FormGroup>

            <FormGroup>
                <Label>Подписка</Label>
                <StyledSelect>
                    <Option value="1">1 месяц</Option>
                    <Option value="3">3 месяца</Option>
                    <Option value="6">6 месяцев</Option>
                    <Option value="12">12 месяцев</Option>

                </StyledSelect>
            </FormGroup>

            <PriceInfo>
                Текущая подписка будет продлена на 3 месяца
                <Price>Стоимость 15000 рублей</Price>
                <Button variant="primary" size="medium">
                    Оплатить
                </Button>
            </PriceInfo>


        </Container>
    );
};