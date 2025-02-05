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
  padding: 0 32px;
  overflow-y: auto;
`;
