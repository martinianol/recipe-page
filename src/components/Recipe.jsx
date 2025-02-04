import styled from "styled-components";
import Header from "./Header";
import PrepTime from "./PrepTime";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Nutrition from "./Nutrition";

const Recipe = () => {
  return (
    <Container>
      <Header />
      <PrepTime />
      <Ingredients />
      <Instructions />
      <Nutrition />
    </Container>
  );
};

export default Recipe;

const Container = styled.article`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
`;
