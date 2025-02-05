import styled from "styled-components";
import omelleteImage from "../assets/images/image-omelette.jpeg";

const Header = () => {
  return (
    <HeaderStyled>
      <Image src={omelleteImage} alt="omellete on a dish" />
      <Title>Simple Omelette Recipe</Title>
      <Description>
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </Description>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.header`
  width: 100%;
`;

const Image = styled.img`
  width: calc(100% + 64px);
  margin: 0 -32px;
  display: block;
  object-fit: cover;

  @media (min-width: 700px) {
    width: 100%;
    min-height: 300px;
    margin: 0 auto;
    border-radius: 12px;
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.stone[900]};
  ${({ theme }) => theme.typography["text-preset-1"]}
  margin-top: 40px;
  font-size: 36px;

  @media (min-width: 700px) {
    font-size: 40px;
  }
`;

const Description = styled.p`
  ${({ theme }) => theme.typography["text-preset-4"]}
  font-weight: 300;
  margin-top: 24px;
`;
