import styled from "styled-components";
const Footer = () => {
  return (
    <FooterStyled className="attribution">
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by <a href="#">Mars</a>.
    </FooterStyled>
  );
};

export default Footer;

const FooterStyled = styled.footer`
  text-align: center;
  padding: 20px;
  width: 100%;
`;
