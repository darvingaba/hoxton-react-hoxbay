import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Product = {
    id: number;
    title: string;
    price: number;
    categoryId: number;
    image: string;
    description: string;
}
type Products = Product[];

export function AllProducts() {
  let [products, setProducts] = useState<Products>([]);
  


    useEffect(() => {
        fetch("http://localhost:4000/products")
          .then((response) => response.json())
          .then((data) => setProducts(data));
    }, []);
  return (
    <div className="products-container">
      <ul className="products-container__list">
        {products.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
          <li
            key={product.id} className="product-item">
            <img src={product.image} alt="product" />
            <h3>{product.title}</h3>
          </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
