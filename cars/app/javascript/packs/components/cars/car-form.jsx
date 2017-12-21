/** 
 * Individual Car View
 * TODO: allow form to manage and update existing cars
*/
import React from "react";

function CarForm({car, view, onClose, onCreate, onUpdate}) {
  const properties = ['make', 'model', 'color', 'year']
  if (!view.create) {
    return null;
  }
  function createCar(e) {
    e.preventDefault();
    const car = {};
    properties.forEach(prop => car[prop] = e.target[prop].value);
    onCreate(car);
  }
  const onSubmit = e => {
    return car ? onUpdate(car) : onCreate(e);
  }
  return (
    <form className="carForm dataTable" onSubmit={createCar}>
      {properties.map((prop, i) => {
        return (
          <input className="carForm__input" key={i} placeholder={prop} type="text" name={prop}/>
        )
      })}
      <button className="carForm__btn carForm__submit" type="submit">Create</button>
      <button className="carForm__btn carForm__cancel" onClick={onClose}>Cancel</button>
    </form>
  );
}

export { CarForm };