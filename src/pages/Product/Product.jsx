import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import SingleProduct from "../../components/SingleProduct/SingleProduct";
import { Container } from "./style";

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <SingleProduct />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
