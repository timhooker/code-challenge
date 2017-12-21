/** 
 * Individual Car View
 * 
*/

import React from 'react';

function Car({
    car,
    onEdit,
    onClose,
    view
  }) {
  if (!view.show) {
    return null;
  }
  const { make, model, color, year } = car;
  return (
    <div className="carShow">
      <h1>{model} - {color}</h1>
      <h5>{make}</h5>
      <h5>{year}</h5>
      <button onClick={onClose}>close</button>
    </div>
  )
}

export { Car };