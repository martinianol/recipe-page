import styled from "styled-components";
import Footer from "../components/Footer";
import Recipe from "../components/Recipe";

const RecipePage = () => {
  return (
    <MainLayout>
      <Recipe />
      <Footer />
    </MainLayout>
  );
};

export default RecipePage;

const MainLayout = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
