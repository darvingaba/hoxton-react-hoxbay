import { useState,useEffect } from "react";
import {useParams} from "react-router-dom";

type Product = {
    id: number;
    title: string;
    price: number;
    categoryId: number;
    image: string;
    description: string;
    quantity: number;
}

export function OneItem(){


    const [item, setItem] = useState< Product>({} as Product);
    const params = useParams();


    useEffect(() => {
        fetch(`http://localhost:4000/products/${params.id}`)
          .then((response) => response.json())
          .then((data) => setItem(data));
    }, []);

    function updateServer(){
        fetch("http://localhost:4000/basket", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: item.title,
                price: item.price,
                categoryId: item.categoryId,
                image: item.image,
                description: item.description,
            }),
        });
    }


    return (
      <div className="product-detail">
        <div>
          <img src={item.image} />
          <h3>{item.title}</h3>
        </div>
        <div className="product-detail__side">
          <p>{item.description}</p>
          <button
            onClick={() => {

                fetch(`http://localhost:4000/products/${params.id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        quantity: (item.quantity + 1),
                    }),
                })
            }}
                
          >Add to cart</button>
        </div>
      </div>
    );
}