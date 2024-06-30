import categories from "../../data/categoriesData";
import CategoryItem from "../CategoryItem/CategoryItem";
import { Container } from "./style";

const Categories = () => {
  return (
    <Container>
      {categories &&
        categories.map((item) => <CategoryItem item={item} key={item.id} />)}
    </Container>
  );
};

export default Categories;
