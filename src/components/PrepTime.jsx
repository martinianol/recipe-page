import styled from "styled-components";
import {
  List,
  ListItemWithCustomBullet,
  Bold,
} from "../components/common/Common";

const PrepTime = () => {
  return (
    <Container>
      <Title>Preparation time</Title>
      <StyledList>
        <ListItemWithCustomBullet>
          <Bold>Total:</Bold> Approximately 10 minutes
        </ListItemWithCustomBullet>
        <ListItemWithCustomBullet>
          <Bold>Preparation:</Bold> 5 minutes
        </ListItemWithCustomBullet>
        <ListItemWithCustomBullet>
          <Bold>Cooking:</Bold> 5 minutes
        </ListItemWithCustomBullet>
      </StyledList>
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

const StyledList = styled(List)`
  margin-top: 16px;
`;
