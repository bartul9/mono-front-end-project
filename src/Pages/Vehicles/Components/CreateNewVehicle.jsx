import React, { Component } from "react";

// Component for creating new vehicle. It is modal that displays on button press

// Styles
import "./CreateNewVehicle.css";

// Bootstrap button and modal window
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// Inject and Observer from mobx
import { inject, observer } from "mobx-react";

@inject("rootStore")
@observer
class CreateNewVehicle extends Component {
  render() {
    const {
      displayingCreateNewVehicle,
    } = this.props.rootStore.mainStore.storeData;
    const { displayCreateNewVehicle } = this.props.rootStore.mainStore;
    const {
      model,
      year,
      engine,
      horsePower,
      img,
    } = this.props.rootStore.createNewVehicleStore.storeData;

    const { makes } = this.props.rootStore.makeStore.storeData;

    const {
      handleChange,
      handleSubmit,
    } = this.props.rootStore.createNewVehicleStore;
    const createNewForm = (
      <Modal
        centered
        className="CreateNewVehicle-modal"
        show={displayingCreateNewVehicle}
        onHide={displayCreateNewVehicle}
      >
        <div className="CreateNewVehicle">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="CreateNewVehicle-inputs">
              <div>
                <label htmlFor="make">Make</label>
                <select onChange={(e) => handleChange(e)} name="make" id="make">
                  <option></option>
                  {makes.map((make) => (
                    <option value={make.value} key={make.make}>
                      {make.make}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="model">Model</label>
                <input
                  onChange={(e) => handleChange(e)}
                  name="model"
                  value={model.value}
                  id="model"
                  type="text"
                />{" "}
              </div>
            </div>
            <div className="CreateNewVehicle-inputs">
              <div>
                <label htmlFor="year">Year</label>
                <input
                  onChange={(e) => handleChange(e)}
                  name="year"
                  value={year.value}
                  id="year"
                  type="number"
                  min={1900}
                  max={2020}
                />
              </div>
              <div>
                <label htmlFor="engine">Engine</label>
                <input
                  onChange={(e) => handleChange(e)}
                  name="engine"
                  value={engine.value}
                  id="engine"
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="horsepower">Horsepower</label>
                <input
                  onChange={(e) => handleChange(e)}
                  name="horsePower"
                  value={horsePower.value}
                  id="horsePower"
                  type="number"
                  min={1}
                  max={3000}
                />
              </div>
            </div>
            <div className="CreateNewVehicle-inputs-img">
              <label htmlFor="image">Image URL</label>
              <input
                onChange={(e) => handleChange(e)}
                name="img"
                value={img.value}
                id="image"
                type="url"
              />
            </div>
            <div>
              <Button onClick={displayCreateNewVehicle}>Back</Button>
              <Button type="submit" variant="success">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    );
    return displayingCreateNewVehicle && createNewForm;
  }
}
export default CreateNewVehicle;
