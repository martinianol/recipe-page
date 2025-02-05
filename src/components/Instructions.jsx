import styled from "styled-components";
import {
  Section,
  SectionTitle,
  ListOrdered,
  ListItem as ListItemCommons,
  Bold,
} from "./common/Common";

const Instructions = () => {
  return (
    <Section>
      <SectionTitle>Instructions</SectionTitle>
      <ListOrdered>
        <ListItem>
          <Bold>Beat the eggs</Bold>: In a bowl, beat the eggs with a pinch of
          salt and pepper until they are well mixed. You can add a tablespoon of
          water or milk for a fluffier texture.
        </ListItem>
        <ListItem>
          <Bold>Heat the pan</Bold>: Place a non-stick frying pan over medium
          heat and add butter or oil.
        </ListItem>
        <ListItem>
          <Bold>Cook the omelette</Bold>: Once the butter is melted and
          bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly
          coat the surface.
        </ListItem>
        <ListItem>
          <Bold>Add fillings (optional)</Bold>: When the eggs begin to set at
          the edges but are still slightly runny in the middle, sprinkle your
          chosen fillings over one half of the omelette.
        </ListItem>
        <ListItem>
          <Bold>Fold and serve</Bold>: As the omelette continues to cook,
          carefully lift one edge and fold it over the fillings. Let it cook for
          another minute, then slide it onto a plate.
        </ListItem>
        <ListItem>
          <Bold>Enjoy</Bold>: Serve hot, with additional salt and pepper if
          needed.
        </ListItem>
      </ListOrdered>
    </Section>
  );
};

export default Instructions;

const ListItem = styled(ListItemCommons)`
  padding-left: 20px;
  color: ${({ theme }) => theme.colors.stone[600]};

  &::marker {
    ${({ theme }) => theme.typography["text-preset-4"]}
    font-weight: bold;
    color: ${({ theme }) => theme.colors.brown[800]};
  }
`;
