import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Cart from "../../components/Cart/Cart";

import { Container } from "./style";

const CartPage = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Cart />
      <Footer />
    </Container>
  );
};

export default CartPage;
