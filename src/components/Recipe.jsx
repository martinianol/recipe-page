import styled from "styled-components";
import Header from "./Header";
import PrepTime from "./PrepTime";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Nutrition from "./Nutrition";
import { Divider } from "./common/Common";

const Recipe = () => {
  return (
    <Container>
      <Header />
      <PrepTime />
      <Ingredients />
      <Divider />
      <Instructions />
      <Divider />
      <Nutrition />
    </Container>
  );
};

export default Recipe;

const Container = styled.article`
  display: flex;
  flex-direction: column;
  gap: 32px;
  flex: 1;
  padding: 0 32px 32px;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.white};

  @media (min-width: 700px) {
    max-width: 616px;
    padding: 40px;
    border-radius: 24px;
  }

  @media (min-width: 1000px) {
    max-width: 736px;
  }
`;
