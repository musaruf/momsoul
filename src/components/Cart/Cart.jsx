import {
  Wrapper,
  Title,
  Top,
  Bottom,
  TopButton,
  TopText,
  TopTexts,
  Info,
  Summary,
  Product,
  ProductDetail,
  Image,
  Details,
  ProductName,
  ProductSize,
  ProductId,
  PriceDetail,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  Hr,
} from "./style";
import p2 from "../../Images/p2.jpg";
import Sueys from "../../Images/Sueys.jpg";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Cart = () => {
  return (
    <Wrapper>
      <Title>YOUR BAG</Title>
      <Top>
        <TopButton>CONTINUE SHOPPING</TopButton>
        <TopTexts>
          <TopText>Shopping Bag (2)</TopText>
          <TopText>Your Wishlist (0)</TopText>
        </TopTexts>
        <TopButton type="filled">CHECKOUT NOW</TopButton>
      </Top>
      <Bottom>
        <Info>
          <Product>
            <ProductDetail>
              <Image src={p2} />
              <Details>
                <ProductName>
                  <b>Product:</b> SANDALWOOD SOAP
                </ProductName>
                <ProductId>
                  <b>ID:</b> 9372876481
                </ProductId>
                <ProductSize>
                  <b>Size:</b> Medium
                </ProductSize>
              </Details>
            </ProductDetail>
            <PriceDetail>
              <ProductAmountContainer>
                <AddIcon />
                <ProductAmount>2</ProductAmount>
                <RemoveIcon />
              </ProductAmountContainer>
              <ProductPrice>₹ 300</ProductPrice>
            </PriceDetail>
          </Product>
          <Hr />
          <Product>
            <ProductDetail>
              <Image src={Sueys} />
              <Details>
                <ProductName>
                  <b>Product:</b> SAFFRON SOAP
                </ProductName>
                <ProductId>
                  <b>ID:</b> 9372876324
                </ProductId>
                <ProductSize>
                  <b>Size:</b> Medium
                </ProductSize>
              </Details>
            </ProductDetail>
            <PriceDetail>
              <ProductAmountContainer>
                <AddIcon />
                <ProductAmount>2</ProductAmount>
                <RemoveIcon />
              </ProductAmountContainer>
              <ProductPrice>₹ 300</ProductPrice>
            </PriceDetail>
          </Product>
        </Info>
        <Summary>Summary</Summary>
      </Bottom>
    </Wrapper>
  );
};

export default Cart;
