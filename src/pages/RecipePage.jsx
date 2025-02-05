import styled from "styled-components";
import Recipe from "../components/Recipe";
import Footer from "../components/Footer";

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

  @media (min-width: 700px) {
    min-height: auto; /* ✅ Reset height for tablet/desktop */
    justify-content: center; /* ✅ Center vertically on larger screens */
    align-items: center;
  }
`;
