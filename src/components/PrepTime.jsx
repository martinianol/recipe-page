import styled from "styled-components";

const PrepTime = () => {
  return (
    <Container>
      <Title>Preparation time</Title>
      <List>
        <li>
          <Bold>Total:</Bold> Approximately 10 minutes
        </li>
        <li>
          {" "}
          <Bold>Preparation:</Bold> 5 minutes
        </li>
        <li>Cooking: 5 minutes</li>
      </List>
    </Container>
  );
};

export default PrepTime;

const Container = styled.section`
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.rose[50]};
  border-radius: 12px;
`;

const Title = styled.h2`
  ${({ theme }) => theme.typography["text-preset-3"]}
  color: ${({ theme }) => theme.colors.rose[800]};
`;

const List = styled.ul`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  ${({ theme }) => theme.typography["text-preset-4"]}
  color: ${({ theme }) => theme.colors.stone[600]};
`;

const Bold = styled.span`
  font-weight: 700;
`;
