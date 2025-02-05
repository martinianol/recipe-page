import styled from "styled-components";
const Footer = () => {
  return (
    <FooterStyled className="attribution">
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noopener noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        href="https://github.com/martinianol"
        target="_blank"
        rel="noopener noreferrer"
      >
        Mars
      </a>
      .
    </FooterStyled>
  );
};

export default Footer;

const FooterStyled = styled.footer`
  text-align: center;
  padding: 20px;
  width: 100%;
  margin-top: auto;
  background: white;

  @media (min-width: 600px) {
    background: transparent; /* ✅ Matches body background on larger screens */
  }
`;
