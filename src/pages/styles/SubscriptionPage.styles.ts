import {styled} from "styled-components";
import {Select} from "../../components/ui/Select";

export const Container = styled.div`
    max-width: 800px;
`;


export const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 1.3rem;

`;

export const Breadcrumbs = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-bottom: 28px;
    font-size: 14px;
    color: #666;


    a {
        color: #2358A2;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const SubscriptionInfo = styled.div`
    margin-bottom: 34px;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    color: #000000;

`;

export const FormGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 105px;

    margin-bottom: 15px;
`;

export const Label = styled.div`
    font-size: 14px;
    color: #000;
    margin-bottom: 8px;

`;

export const StyledSelect = styled(Select)`
    width: 200px;
`;


export const PriceInfo = styled.div`
    margin: 20px 0 24px 175px;
    font-size: 14px;
`;


export const Price = styled.div`
    font-size: 14px;
    font-weight: 700;
    margin-top: 8px;

    margin-bottom: 29px;
`;