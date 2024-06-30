import Products from "../Products/Products";
import {
  Container,
  Filter,
  FilterContainer,
  FilterText,
  Option,
  Select,
  Title,
} from "./style";

const ProductList = () => {
  return (
    <>
      <Title>Soap's</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Products
            </Option>
            <Option>Soap</Option>
            <Option>Shower gel</Option>
            <Option>Ornaments</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Product type
            </Option>
            <Option>Bar Soap</Option>
            <Option>Bath & Body</Option>
            <Option>Liquid Hand Soap</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
    </>
  );
};

export default ProductList;
