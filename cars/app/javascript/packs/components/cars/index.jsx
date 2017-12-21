/** 
 * EntryPoint for Showing and Managing Cars
*/

import { CarList } from "./car-list";
import { CarForm } from "./car-form";
import { Car } from "./car";
import { getCars, createCar, updateCar } from "../../api/cars";
import React from "react";

class Cars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carId: 0,
      cars: [],
      view: {}
    }
  }
  componentDidMount() {
    getCars().then(({data}) => this.setState(state => {
      let view = state.view;
      view.list = true;
      return { 
        cars: data, 
        carId: null,
        view
      };
    }));
  }
  showCar(carId) {
    this.setState(({view}) => {
      view.show = true
      return { carId, view: view }
    })
  }
  showForm(carId=null) {
    this.setState(({view}) => {
      view.create = true;
      view.show = false;
      return { view, carId }
    })
  }
  hideElement(elem) {
    this.setState(({view}) => {
      view[elem] = false;
      return { view };
    })
  }
  createCar(car) {
    createCar(car).then(res => {
      this.setState(({cars}) => {
        const update = cars.concat(car);
        return {
          cars: update,
          view: {show: true, list: true, create: false},
          carId: res.id
        }
      })
    })
  }

  render() {
    const { cars, view } = this.state;
    return (
      <div className="cars">
        <h1 className="cars__title">Manage Cars</h1>
        <CarList
          cars={cars} 
          view={this.state.view} 
          onShow={carId => this.showCar(carId)} 
        />
        <Car 
          view={view} 
          car={cars.find(car => car.id === this.state.carId)} 
          onClose={() => this.hideElement('show')} 
          onEdit={() => this.showForm(this.state.carId)} 
        />
        <CarForm 
          view={view} 
          onCreate={car => this.createCar(car)}
          onUpdate={updateCar}
          onClose={() => this.hideElement('create')}  
        />
        <button className="cars__add" onClick={() => this.showForm()}>Add New +</button>
      </div>
    );
  }
};

export { Cars };