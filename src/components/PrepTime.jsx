import styled from "styled-components";

const PrepTime = () => {
  return (
    <Container>
      <Title>Preparation time</Title>
      <List>
        <ListItem>
          <Bold>Total:</Bold> Approximately 10 minutes
        </ListItem>
        <ListItem>
          <Bold>Preparation:</Bold> 5 minutes
        </ListItem>
        <ListItem>
          <Bold>Cooking:</Bold> 5 minutes
        </ListItem>
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
  list-style-position: inside;
  list-style: none;
`;

const ListItem = styled.li`
  position: relative;
  padding-left: 40px;

  &::before {
    content: "•"; 
    font-size: 24px; 
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.rose[800]};
  }
`;

const Bold = styled.span`
  font-weight: 700;
`;
