import React, { useEffect, useState } from "react";
import { createDish, deleteDish, getDish, getDishes, updateDish } from "../api/DishService";
import Dish from "../model/Dish";
import DishDetail from "../model/DishDetail";

export default function Menu() {
  const [dishes, setDishes] = useState<Dish[]>([new Dish("1", "burger", 1)]);
  const [selectedDish, setSelectedDish] = useState<DishDetail>();

  useEffect(() => {
    getDishes().then((result) => setDishes(result.data));
    console.log(Object.entries(dishes));
  }, []);

  const onChangeHandler = (event) => {
    let { value, name } = event.target;
    console.warn(event.target);
    if (name == "ingredients") {
      name = name.split(",");
    }
    validateField(name, value);
    setSelectedDish({ ...selectedDish, [name]: value });
    console.log(selectedDish);
  };

  function selectHandler(dish: Dish) {
    console.debug(Object.entries(dish));
    getDish(dish.id).then((result) => setSelectedDish(result.data));
  }

  const createHandler = (event) => {

    let newDishes: Dish[] = [...dishes];
    newDishes.push(
      new Dish(selectedDish?.id, selectedDish?.name, selectedDish?.unit_price)
    );

    createDish(selectedDish)
      .then(() => console.log("Successfully created dish"))
      .then(() => setDishes(newDishes));
  };

  const updateHandler = (event) => {
    event.preventDefault();

    let newDishes: Dish[] = [...dishes];
    newDishes = newDishes.filter((dish) => {
      return dish.id != selectedDish.id;
    });
    newDishes.push(
      new Dish(selectedDish?.id, selectedDish?.name, selectedDish?.unit_price)
    );

    updateDish(selectedDish)
      .then(() => console.log("Successfully updated dish"))
      .then(() => setDishes(newDishes));
  };

  const deleteHandler = () => {
    let newDishes: Dish[] = [...dishes];
    console.debug("newDishes : ");
    console.debug(newDishes);

    deleteDish(selectedDish?.id).then(() =>
      setDishes(
        newDishes.filter((dish) => {
          return dish.id != selectedDish.id;
        })
      )
    );
  };

  function validateField(name: any, value: any) {
    if (name == "unit_price") {
      let unitPriceErrorMessage = document.getElementById("unit_price error");
      let createButton = document.getElementById("createButton");
      let updateButton = document.getElementById("updateButton");
      
      if (value <= 0) {
        console.warn("The unit price is negative or equal to 0.");
        unitPriceErrorMessage.hidden = false;
        updateButton.disabled = true;
        createButton.disabled = true;
        return;
      }
      unitPriceErrorMessage.hidden = true;
      updateButton.disabled = false;
      createButton.disabled = false;
    }
  }

  return (
    <>
      <div className="container">
        {dishes.map((dish, index) => (
          <div className="col">
            <button
              key={index}
              type="button"
              className="btn btn-light btn-block w-100"
              onClick={() => selectHandler(dish)}
            >
              {dish.name}
            </button>
          </div>
        ))}
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Nom{" "}
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="burger"
          value={selectedDish?.name}
          onChange={onChangeHandler}
          name="name"
          required
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Liste d'ingrédients{" "}
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Bun, Onion, Meat patty"
          value={selectedDish?.ingredients}
          onChange={onChangeHandler}
          name="ingredients"
          required
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Prix{" "}
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="10"
          value={selectedDish?.unit_price}
          onChange={onChangeHandler}
          name="unit_price"
          required
        />
        <span className="input-group-text">€</span>
        <div
          className="error my-3 alert alert-danger"
          id="unit_price error"
          hidden={true}
        >
          <em>Le prix doit être positif et non nul !</em>
        </div>
      </div>
      <div className="dropdown">
        <button
          className="btn btn-secondary"
          id="createButton"
          type="button"
          aria-expanded="false"
          onClick={createHandler}
        >
          Créer
        </button>
        <button
          className="btn btn-secondary"
          id="updateButton"
          type="button"
          aria-expanded="false"
          onClick={updateHandler}
        >
          Modifier
        </button>
        <button
          className="btn btn-secondary"
          type="button"
          aria-expanded="false"
          onClick={deleteHandler}
        >
          Supprimer
        </button>
      </div>
    </>
  );
}
