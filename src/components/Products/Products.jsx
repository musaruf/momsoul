import popularProducts from "../../data/productData";
import Product from "../Product/Product";
import { Container } from "./style";

const Products = () => {
  return (
    <Container>
      {popularProducts &&
        popularProducts.map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;
