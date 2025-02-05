import {
  Section,
  List,
  ListItemWithCustomBullet,
  SectionTitle,
} from "./common/Common";
const Ingredients = () => {
  return (
    <Section>
      <SectionTitle>Ingredients</SectionTitle>
      <List>
        <ListItemWithCustomBullet> 2-3 large eggs</ListItemWithCustomBullet>
        <ListItemWithCustomBullet>Salt, to taste</ListItemWithCustomBullet>
        <ListItemWithCustomBullet>Pepper, to taste</ListItemWithCustomBullet>
        <ListItemWithCustomBullet>
          1 tablespoon of butter or oil
        </ListItemWithCustomBullet>
        <ListItemWithCustomBullet>
          Optional fillings: cheese, diced vegetables, cooked meats, herbs
        </ListItemWithCustomBullet>
      </List>
    </Section>
  );
};

export default Ingredients;
