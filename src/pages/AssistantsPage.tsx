import logo from "../assets/baseGroup.svg";
import plus from "../assets/plus.svg"
import { Container, Header, Title, AddButton, Table, Th, Td, AssistantName, BotName, Records, StyledSpan } from "./styles/AssistantsPage.styles";



export const AssistantsPage = () => {
  const assistants = [
    {
      name: 'Наименование ассистента',
      bot: 'englishbot',
      records: '3 записи',
      date: '12.12.2024'
    },
    {
      name: 'Курсы по Django Python',
      bot: 'botscrisuperlongepterbot',
      records: '45 записей',
      date: '12.12.2024'
    },
    {
      name: 'AssistentLab',
      bot: 'botscrisuperlongepterbot',
      records: '45 записей',
      date: '12.12.2024'
    },
    {
      name: 'Опросник по английскому',
      bot: 'botscrisuperlongepterbot',
      records: '45 записей',
      date: '12.12.2024'
    }
  ];

  return (
    <Container>
      <Header>
        <Title>Мои ассистенты</Title>
        <AddButton>
          <img src={plus} alt=""/>
          <StyledSpan>Добавить ассистента</StyledSpan>

        </AddButton>
      </Header>

      <Table>
        <thead>
          <tr style={{ padding: '7px 16px' }}>
            <Th>Наименование</Th>
            <Th>Бот в телеграме</Th>
            <Th>Файлы и данные</Th>
            <Th>Дата создания</Th>
          </tr>
        </thead>
        <tbody>
          {assistants.map((assistant, index) => (
            <tr key={index}>
              <Td>
                <AssistantName>
                  {/* <img src="/path-to-assistant-icon.svg" alt="" /> */}
                  <span>{assistant.name}</span>
                </AssistantName>
              </Td>
              <Td>
                <BotName>
                  <img src={logo} alt="" />
                  <span>{assistant.bot}</span>
                </BotName>
              </Td>
              <Td>
                <Records>{assistant.records}</Records>
              </Td>
              <Td>{assistant.date}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};