import ProductCard from "@/components/Products/ProductCard";

export interface IProduct {
  id: number;
  product_name: string;
  category: string;
  brand: string;
  price: number;
  image: string;
}

const ProdcutsPage = async () => {
  const res = await fetch("http://localhost:5000/products", {
    // cache: "force-cache" // * static side generation

    // next: {
    //     revalidate: 30,
    //     tags: ["products"],
    // }

    cache: "no-store"
  });
  const products: IProduct[] = await res.json();
  return (
    <div>
      <h1>All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProdcutsPage;
