import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

export function Categories() {
    const [categories, setCategories] = useState<any[]>([]);

    useEffect(() => {
        fetch("http://localhost:4000/categories")
          .then((response) => response.json())
          .then((data) => setCategories(data));
    }, []);
  return (
    <div className="categories-container">
        <ul className="categories-container__list">
            {categories.map((category) => (
              <Link to={`/categories/${category.id}`} >
                <li           
                key={category.id} 
                className="category-item">
                {category.name}
                </li>
              </Link>
            ))}
        </ul>
    </div>
  );
}
