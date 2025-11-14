import React from "react";
import { useParams } from "react-router-dom";
import {
  newArrivalsData,
  relatedProductData,
  topSellingData,
} from "./HomePage";
import ProductListSec from "../components/common/ProductListSec";
import BreadcrumbProduct from "../components/product-page/BreadcrumbProduct";
import Header from "../components/product-page/Header";
import Tabs from "../components/product-page/Tabs";

const data = [
  ...newArrivalsData,
  ...topSellingData,
  ...relatedProductData,
];

function ProductPage() {
  const { id } = useParams();
  const productData = data.find(
    (product) => product.id === Number(id)
  );

  if (!productData?.title) {
    return <div>Product not found</div>;
  }

  return (
    <main>
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
        <BreadcrumbProduct title={productData?.title ?? "product"} />
        <section className="mb-11">
          <Header data={productData} />
        </section>
        <Tabs />
      </div>
      <div className="mb-[50px] sm:mb-20">
        <ProductListSec title="You might also like" data={relatedProductData} />
      </div>
    </main>
  );
}

export default ProductPage;

