import React from "react";
import {
  Center,
  ContactItem,
  Container,
  Desc,
  Left,
  List,
  ListItem,
  Logo,
  Payment,
  Right,
  SocialContainer,
  SocialIcon,
  Title,
} from "./style";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import RoomIcon from "@mui/icons-material/Room";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import PaymentImg from "../../Images/payment.png";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>MOM'S SOUL</Logo>
        <Desc>
          Mom's Soul Soaps are made with pure essential oils and no synthetic
          ingredients and is more moisturizing to you skin naturally. It is
          usually beneficial for most of skin conditions, if you or anyone in
          your family has very sensitive skin, you should definitely look into
          our Mom's Soul Soaps.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="ffffff">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TelegramIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Beauty Soap</ListItem>
          <ListItem>Foam Soap</ListItem>
          <ListItem>Baby Soap</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon style={{ marginRight: "10px" }} />
          622 Teacher's colony, Mettupalayam 641301
        </ContactItem>
        <ContactItem>
          <PhoneAndroidIcon style={{ marginRight: "10px" }} />
          +91 7010862497
        </ContactItem>
        <ContactItem>
          <MailOutlineIcon style={{ marginRight: "10px" }} />
          mehzil1827@gmail.com
        </ContactItem>
        {/* <Payment src={PaymentImg} alt="payment" /> */}
      </Right>
    </Container>
  );
};

export default Footer;
