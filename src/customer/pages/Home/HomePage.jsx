import HomeCarousel from "../../components/HomeCarousel/HomeCarousel"
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";
import ProductCategoriesComponent from "../../components/ProductCategories/ProductCategories"

function HomePage() {
  return (
    <>
      <HomeCarousel/>
      <ProductCategoriesComponent/>
      <ProductCarousel/>
    </>
  )
}

export default HomePage;
