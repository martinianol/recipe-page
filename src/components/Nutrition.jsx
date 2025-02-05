import styled from "styled-components";
import { Section, SectionTitle } from "./common/Common";

const Nutrition = () => {
  return (
    <Section>
      <SectionTitle>Nutrition</SectionTitle>
      <Description>
        The table below shows nutritional values per serving without the
        additional fillings.
      </Description>
      <Table>
        <tbody>
          <TableRow>
            <TableCell left top>
              Calories
            </TableCell>
            <TableCell strong top>
              277kcal
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell left>Carbs</TableCell>
            <TableCell strong>0g</TableCell>
          </TableRow>
          <TableRow>
            <TableCell left>Protein</TableCell>
            <TableCell strong>20g</TableCell>
          </TableRow>
          <TableRow>
            <TableCell bottom left>
              Fat
            </TableCell>
            <TableCell bottom strong>
              22g
            </TableCell>
          </TableRow>
        </tbody>
      </Table>
    </Section>
  );
};

export default Nutrition;

const Description = styled.p`
  ${({ theme }) => theme.typography["text-preset-4"]}
  color:  ${({ theme }) => theme.colors.stone[600]};
  font-weight: 500;
`;

const Table = styled.table`
  border-collapse: collapse;
`;

const TableRow = styled.tr``;

const TableCell = styled.td`
  width: 50%;
  box-sizing: border-box;
  padding: ${({ left }) =>
    left ? "12px 0px 12px 32px" : "12px 0px 12px 16px"};
  ${({ bottom }) => bottom && "padding-bottom: 0px;"}
  ${({ top }) => top && "padding-top: 0px;"}
  border-bottom: ${({ bottom, theme }) =>
    bottom ? "none" : `1px solid ${theme.colors.stone[150]}`};
  font-weight: ${({ strong }) => (strong ? "bold" : "normal")};
  color: ${({ strong, theme }) =>
    strong ? theme.colors.brown[800] : "inherit"};
`;
