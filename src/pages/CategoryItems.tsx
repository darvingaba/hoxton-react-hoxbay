import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

type Product = {
    id: number;
    title: string;
    price: number;
    categoryId: number;
    image: string;
    description: string;
}
type Category = {
    id: number;
    name: string;
}
export function CategoryItems() {

    let [products, setProducts] = useState<Product[]>([]);
    let [category, setCategory] = useState<Category>({} as Category);
    let params = (useParams());

    useEffect(() => {
        fetch("http://localhost:4000/products")
            .then((response) => response.json())
            .then((data) => setProducts(data));
            console.log(products);
    },[]);
    useEffect(() => {
        fetch(`http://localhost:4000/categories/${params.id}`)
            .then((response) => response.json())
            .then((data) => setCategory(data));

    },[]);

    let categoryProducts = products.filter(product => product.categoryId === category.id);
    

    return (
      <div className="products-container">
        <ul className="products-container__list">
          {categoryProducts.map((product) => (
            <Link to={`/products/${product.id}`} key={product.id}>
              <li key={product.id} className="product-item">
                <img src={product.image} alt="product" />
                <h3>{product.title}</h3>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
}