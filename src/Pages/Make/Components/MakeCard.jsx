import React, { Component } from "react";

// Bootstrap Button
import { Button } from "react-bootstrap";

// Styles
import "./MakeCard.css";

import { inject, observer } from "mobx-react";

@inject("rootStore")
@observer
class MakeCard extends Component {
  render() {
    const { make, founded, logo, country, id } = this.props;

    const { deleteMake } = this.props.rootStore.deleteMakeStore;
    const { deleting } = this.props.rootStore.deleteMakeStore.storeData;

    return (
      <div
        style={
          deleting
            ? {
                boxShadow: "2px 2px 2px rgb(220, 53, 69,0.4)",
                borderTopLeftRadius: "5px",
              }
            : { boxShadow: "" }
        }
        className="MakeCard"
      >
        {deleting && (
          <Button onClick={() => deleteMake(id)} variant="warning">
            Delete
          </Button>
        )}

        <img src={logo} alt={make} />
        <h2>{make}</h2>
        <span>{country}</span>
        <span>{founded}</span>
      </div>
    );
  }
}
export default MakeCard;
