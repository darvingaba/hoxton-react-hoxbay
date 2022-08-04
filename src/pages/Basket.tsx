import { useEffect, useState } from "react";


type Product = {
    id: number;
    title: string;
    price: number;
    categoryId: number;
    image: string;
    description: string;
    quantity: number;
}
type Products = Product[];


export function Basket(){

    let [products, setProducts] = useState<Products>([]);
    let [quantity, setQuantity] = useState<number>(0);

    // function getInputValue(){
    //     let inputValue = parseInt(document.getElementById("input").value);
    //     console.log(`${inputValue} the value of the input`);
    //     return inputValue;
    // }


    function getTotal(){
        let total = 0;
        products.forEach(product => {
            total += product.price * product.quantity;
        });
        return total;
    }
    let totalPrice = getTotal().toFixed(2);

        fetch("http://localhost:4000/products")
            .then((response) => response.json())
            .then((data) => setProducts(data));


        
        console.log(products);
    // useEffect(() => {
    //     fetch("http://localhost:4000/products")
    //       .then((response) => response.json())
    //       .then((data) => setProducts(data));
          
    // }, []);

    let quantityArr = [];

    for(let prod of products){
      if(prod.quantity>0){
        quantityArr.push(prod)
        console.log(prod);
      }
    }
    return (
      <div className="basket-container">
        <h2>Your Basket</h2>
        <ul>
          {quantityArr.map((product) => (
            <li key={product.id} className="basket-container__item">
              <img src={product.image} alt="product" />
              <h2 className="basket__product__title">{product.title}</h2>
              <p>
                Qty:
                  <select
                    id="amount"
                    name="amount"
                    onChange={(e) => {
                      e.preventDefault();
                      fetch(`http://localhost:4000/products/${product.id}`, {
                        method: "PATCH",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                          quantity: Number(e.target.value),
                        }),
                      });
                    }}
                    
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
              </p>
              <p>
                Item Total : {product.quantity} x {product.price} ={" "}
                {product.price * product.quantity} $
              </p>
            </li>
          ))}
        </ul>
        <p>Total: {totalPrice}</p>
      </div>
    );
}