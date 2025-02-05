import styled from "styled-components";
import Recipe from "../components/Recipe";

const RecipePage = () => {
  return (
    <MainLayout>
      <Recipe />
    </MainLayout>
  );
};

export default RecipePage;

const MainLayout = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.stone[100]};
  justify-content: center; /* ✅ Center vertically on larger screens */
  align-items: center;
`;
