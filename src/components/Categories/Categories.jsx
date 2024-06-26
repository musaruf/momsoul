import { styled } from "styled-components";
import categories from "../../data/categoriesData";
import CategoryItem from "../CategoryItem/CategoryItem";

const Container = styled.dev``;

const Categories = () => {
  return (
    <Container>
      {categories && categories.map((item) => <CategoryItem item={item} />)}
    </Container>
  );
};

export default Categories;
