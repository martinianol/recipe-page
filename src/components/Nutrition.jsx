import { Section, SectionTitle } from "./common/Common";

const Nutrition = () => {
  return (
    <Section>
      <SectionTitle>Nutrition</SectionTitle>
      <p>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <table>
        <tbody>
          <tr>
            <td>Calories</td>
            <td>277kcal</td>
          </tr>
          <tr>
            <td>Carbs</td>
            <td>0g</td>
          </tr>
          <tr>
            <td>Protein</td>
            <td>20g</td>
          </tr>
          <tr>
            <td>Fat</td>
            <td>22g</td>
          </tr>
        </tbody>
      </table>
    </Section>
  );
};

export default Nutrition;
