import {styled} from "styled-components";

export const Container = styled.div`
    max-width: 1200px;
    background: white;
`;


export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;

`;

export const Title = styled.h1`
    font-size: 20px;
    font-weight: 600;
    margin: 0;

`;

export const AddButton = styled.button`
    background: rgb(77, 105, 156);

    color: white;
    border: none;
    border-radius: 6px;
    padding: 10px 22px;
    font-size: 14px;
    display: flex;
    font-weight: 600;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    &:hover {
        background: rgb(67, 91, 136);
    }
`;

export const Table = styled.table`
    background: white;
    border-radius: 4px;
    overflow: hidden;
    width: 100%;
    border-collapse: collapse;

`;

export const Th = styled.th`
    padding: 0 5px 0 15px;
    background: rgb(245, 245, 245);
    font-size: 14px;
    text-align: left;
    font-weight: normal;


    // Первая колонка (Наименование)

    &:nth-child(1) {
        width: 45%;
    }

    // Вторая колонка (Бот в телеграме)

    &:nth-child(2) {
        width: 31%;
    }

    // Третья колонка (Файлы и данные)

    &:nth-child(3) {
        width: 30%;
    }

    // Четвертая колонка (Дата создания)

    &:nth-child(4) {
        width: 10%;
    }

    @media (max-width: 768px) {
        &:nth-child(1) {
            width: 40%;
        }

        &:nth-child(2) {
            width: 25%;
        }

        &:nth-child(3) {
            width: 20%;
        }

        &:nth-child(4) {
            width: 15%;
        }
    }
`;

export const Td = styled.td`
    padding: 22px;
    font-size: 14px;
    border-bottom: 1px solid #eee;


    tr:last-child & {
        border-bottom: none;
    }
`;

export const AssistantName = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;


    img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
    }
`;

export const BotName = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    color: #666;


    img {
        width: 16px;
        height: 16px;
    }
`;

export const Records = styled.div`
    color: rgb(77, 105, 156);
`;


export const StyledSpan = styled.span`
`;