import React from "react";

import "./AddItem.css";

class AddItem extends React.Component {
  state = {
    name: ""
  };

  onChangeName = e => {
    this.setState({
      name: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onAddItem(this.state.name);
    this.setState({
      name: ""
    });
  };

  render() {
    return (
      <form className="add-item-form" onSubmit={this.onSubmit}>
        <input
          className="add-item-input"
          type="text"
          onChange={this.onChangeName}
          value={this.state.name}
        />
        <button className="btn-add-item">Add Item</button>
      </form>
    );
  }
}

export default AddItem;
