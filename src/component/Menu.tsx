import React, { useEffect, useState } from "react";
import { getDishes } from "../api/DishService";
import Dish from "../model/Dish";

export default function Menu() {
  const [dishes, setDishes] = useState<Dish[]>([new Dish("1", "burger", 1)]);

  useEffect(() => {
    getDishes().then((result) => setDishes(result.data));
    console.log(Object.entries(dishes));
  }, []);

  return (
    <>
      <div className="container">
        {dishes.map((dish, index) => (
          <div className="col">
            <button key={index}  type="button" className="btn btn-light btn-block">
              {dish.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
