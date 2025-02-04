import styled from "styled-components";
import omelleteImage from "../assets/images/image-omelette.jpeg";

const Header = () => {
  return (
    <HeaderStyled>
      <Image src={omelleteImage} alt="omellete on a dish" />
      <Title>Simple Omelette Recipe</Title>
      <p>
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.header`
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  display: block;
`;

const Title = styled.h1`
  background-color: ${({ theme }) => theme.colors.rose[800]};
  ${({ theme }) => theme.typography["text-preset-1"]}
`;
