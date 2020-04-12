import React from "react";
import "./SearchItem.css";

class SearchItem extends React.Component {
  state = {
    search: ""
  };

  onInputHandle = e => {
    const search = e.target.value;
    this.setState({ search });
    this.props.onSearchChange(search);
  };

  render() {
    return (
      <form>
        <label className="search-label">Search Item:</label>
        <input
          className="search-input"
          type="text"
          value={this.state.search}
          onChange={this.onInputHandle}
        />
      </form>
    );
  }
}

export default SearchItem;
