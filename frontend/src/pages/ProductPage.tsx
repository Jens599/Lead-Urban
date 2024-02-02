import HeroProduct from "@/components/HeroProduct";
import LandingCards from "@/components/LandingCards";
import Spacer from "@/components/Spacer";
import img from "@/assets/IMG-20231230-WA0005.jpg";
import ProductCard from "@/components/ProductCard";
import Title from "./../components/Title";

import { products } from "@/data/products";
import productCTA from "./../components/ProductCTA";
import ProductCTA from "./../components/ProductCTA";

const ProductPage = () => {
  return (
    <div>
      <div>
        <HeroProduct />
        <Spacer size={2} />
        <div className="container">
          <LandingCards
            title="Lorem ipsum dolor sit"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ipsam aspernatur sunt eaque facere deleniti?"
            img={img}
            link="Lorem ipsum dolor sit"
          />
          <Spacer />
          <Title title="Simple enough for any user, powerful enough for fast-growing businesses" />
          <Spacer />
          <div className="grid place-content-center gap-8 md:container md:grid-cols-2 lg:grid-cols-3 ">
            {products.map((product) => (
              <ProductCard
                icon={product.icon}
                title={product.title}
                subtitle={product.subtitle}
                Premium={product.Premium}
                list={product.list}
                link={product.link}
              />
            ))}
          </div>
        </div>
      </div>
      <Spacer />
      <ProductCTA />
    </div>
  );
};

export default ProductPage;
