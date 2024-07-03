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
  SummaryItemPrice,
  SummaryItemText,
  SummaryItem,
  SummaryTitle,
  SummaryButton,
} from "./style";
import p2 from "../../Images/p2.jpg";
import Sueys from "../../Images/Sueys.jpg";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <Wrapper>
      <Title>YOUR BAG</Title>
      <Top>
        <Link to="/">
          <TopButton>CONTINUE SHOPPING</TopButton>
        </Link>
        <TopTexts>
          <TopText>Shopping Bag (2)</TopText>
          <TopText>Your Wishlist (0)</TopText>
        </TopTexts>
        <TopButton type="filled">ORDER NOW</TopButton>
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
        <Summary>
          <SummaryTitle>ORDER SUMMARY</SummaryTitle>
          <SummaryItem>
            <SummaryItemText>Subtotal</SummaryItemText>
            <SummaryItemPrice>₹ 1000</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Estimated Shipping</SummaryItemText>
            <SummaryItemPrice>₹ 100</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Shipping Discount</SummaryItemText>
            <SummaryItemPrice>₹ -100</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem type="total">
            <SummaryItemText>Total</SummaryItemText>
            <SummaryItemPrice>₹ 1000</SummaryItemPrice>
          </SummaryItem>
          <SummaryButton>ORDER NOW</SummaryButton>
        </Summary>
      </Bottom>
    </Wrapper>
  );
};

export default Cart;
