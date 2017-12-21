import React from "react";

function CarList({cars, view, onShow}) {
  const properties = ['make', 'model', 'color', 'year']
  if (!view.list) {
    return null;
  }
  return (
    <ul className="carList dataTable">
      <li className="dataTable__header">
        {properties.map((prop, i) => <div key={i} className="dataTable__cell">{prop}</div>)}
      </li>
      {cars.map(car => {
        return (
          <li className="dataTable__row" key={car.id} onClick={() => onShow(car.id)}>
            {properties.map((prop, i) => <div key={i} className="dataTable__cell">{car[prop]}</div>)}
          </li>
        )
      })}
    </ul>
  );
}

export { CarList };