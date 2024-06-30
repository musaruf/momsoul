import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import ProductList from "../../components/ProductList/ProductList";
import { Container } from "./style";

const Category = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <ProductList />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Category;
