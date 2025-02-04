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
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.stone[900]};
  ${({ theme }) => theme.typography["text-preset-1"]}
  font-size: 36px;
  margin-top: 40px;
`;

const Description = styled.p`
  ${({ theme }) => theme.typography["text-preset-4"]}
  margin-top: 24px;
`;
