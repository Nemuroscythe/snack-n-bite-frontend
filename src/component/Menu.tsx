import React, { useEffect, useState } from "react";
import { deleteDish, getDish, getDishes } from "../api/DishService";
import Dish from "../model/Dish";
import DishDetail from "../model/DishDetail";

export default function Menu() {
  const [dishes, setDishes] = useState<Dish[]>([new Dish("1", "burger", 1)]);
  const [selectedDish, setSelectedDish] = useState<DishDetail>();

  useEffect(() => {
    getDishes().then((result) => setDishes(result.data));
    console.log(Object.entries(dishes));
  }, []);

  function selectHandler(dish: Dish) {
    console.debug(Object.entries(dish));
    getDish(dish.id).then((result) => setSelectedDish(result.data));
  }

  function deleteHandler() {
    let newDishes : Dish[] = [...dishes];
    console.debug("newDishes : ");
    console.debug(newDishes);

    deleteDish(selectedDish?.id).then(() =>
      setDishes(
        newDishes.filter((dish) => {
          return dish.id != selectedDish.id;
        })
      )
    );
  }

  return (
    <>
      <div className="container">
        {dishes.map((dish, index) => (
          <div className="col">
            <button key={index}  type="button" className="btn btn-light btn-block" onClick={() => selectHandler(dish)}>
              {dish.name}
            </button>
          </div>
        ))}
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Nom </span>
        <input type="text" className="form-control" placeholder="burger" value={selectedDish?.name} aria-label="Name" aria-describedby="basic-addon1"/>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Liste d'ingrédients </span>
        <input type="text" className="form-control" placeholder="Bun, Onion, Meat patty" value={selectedDish?.ingredients} aria-label="Ingredients" aria-describedby="basic-addon1"/>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Prix </span>
        <input type="text" className="form-control" placeholder="10" aria-label="UnitPrice" value={selectedDish?.unit_price} aria-describedby="basic-addon1"/>
        <span className="input-group-text">€</span>
      </div>
      <div className="dropdown">
        <button className="btn btn-secondary" type="button" aria-expanded="false">
          Créer
        </button>
        <button className="btn btn-secondary" type="button" aria-expanded="false">
          Modifier
        </button>
        <button className="btn btn-secondary" type="button" aria-expanded="false" onClick={ () => deleteHandler()}>
          Supprimer
        </button>
        
      </div>
    </>
  );
}
