import styled from "styled-components";

export const SectionTitle = styled.h2`
  ${({ theme }) => theme.typography["text-preset-2"]}
  color: ${({ theme }) => theme.colors.rose[800]};
`;

export const ListItem = styled.li`
  position: relative;
  padding-left: 40px;
`;

export const ListItemWithCustomBullet = styled(ListItem)`
  &::before {
    content: "•";
    font-size: 24px;
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.rose[800]};
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  ${({ theme }) => theme.typography["text-preset-4"]}
  color: ${({ theme }) => theme.colors.stone[600]};
  list-style-position: inside;
  list-style: none;
`;

export const ListOrdered = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 8px;
  ${({ theme }) => theme.typography["text-preset-4"]}
  color: ${({ theme }) => theme.colors.stone[600]};
  padding-left: 24px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.stone[150]};
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Bold = styled.span`
  font-weight: 700;
`;
