import {
  AddContainer,
  Amount,
  AmountContainer,
  Button,
  Desc,
  Filter,
  FilterColor,
  FilterContainer,
  FilterSize,
  FilterSizeOption,
  FilterTitle,
  Image,
  ImgContainer,
  InfoContainer,
  Price,
  Title,
  Wrapper,
} from "./style";
import Sueys from "../../Images/Sueys.jpg";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const SingleProduct = () => {
  return (
    <>
      <Wrapper>
        <ImgContainer>
          <Image src={Sueys} />
        </ImgContainer>
        <InfoContainer>
          <Title>Saffron Soap</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            aliquid molestiae necessitatibus doloribus? Fuga sunt tempore minus.
            Vitae, libero mollitia voluptatum quis, possimus commodi illum
            suscipit totam deserunt non porro!
          </Desc>
          <Price>₹ 100</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Varities:</FilterTitle>
              <FilterSize>
                <FilterSizeOption>Cildren</FilterSizeOption>
                <FilterSizeOption>Men</FilterSizeOption>
                <FilterSizeOption>Women</FilterSizeOption>
              </FilterSize>
            </Filter>
            <Filter>
              <FilterTitle>Size:</FilterTitle>
              <FilterSize>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon />
              <Amount>1</Amount>
              <AddIcon />
            </AmountContainer>
            <Button>Add to cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </>
  );
};

export default SingleProduct;
