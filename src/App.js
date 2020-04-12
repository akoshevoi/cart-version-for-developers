import React from "react";
import Header from "./Header/Header";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import AddItem from "./AddItem/AddItem";
import SearchItem from "./SearchItem/SearchItem";

import "./App.css";

const itemsNames = [
  "Beef",
  "Potato",
  "Tomato",
  "Bread",
  "Apple",
  "Juice",
  "Coffee",
  "Cookies"
];

const getNewItem = itemName => ({
  id: Math.random().toString(36).substr(2, 9),
  name: itemName,
  quantity: 0
});

const itemsData = itemsNames.map(getNewItem);

class App extends React.Component {
  state = {
    items: itemsData,
    totalItemsQuantity: 0,
    searchItemsText: ""
  };

  getNewItemsData = (newItem, index) => {
    const { items } = this.state;
    const newArray = [
      ...items.slice(0, index),
      newItem,
      ...items.slice(index + 1)
    ];

    return newArray;
  };

  onDecreaseQty = index => {
    const oldItem = this.state.items[index];
    const { quantity: prevQuantity } = oldItem;

    if (prevQuantity > 0) {
      const newItem = { ...oldItem, quantity: prevQuantity - 1 };
      const newItemsData = this.getNewItemsData(newItem, index);

      this.setState(state => {
        return {
          items: newItemsData,
          totalItemsQuantity: state.totalItemsQuantity - 1
        };
      });
    }
  };

  onIncreaseQty = index => {
    const oldItem = this.state.items[index];
    const { quantity: prevQuantity } = oldItem;

    const newItem = { ...oldItem, quantity: prevQuantity + 1 };
    const newItemsData = this.getNewItemsData(newItem, index);

    this.setState(state => {
      return {
        items: newItemsData,
        totalItemsQuantity: state.totalItemsQuantity + 1
      };
    });
  };

  onAddItem = newItem => {
    this.setState(({ items }) => ({
      items: [...items, newItem]
    }));
  };

  onSearchChange = searchItemsText => {
    this.setState({ searchItemsText });
  };

  getFilteredItems = () => {
    const { items, searchItemsText } = this.state;

    return items.filter(
      ({ name }) =>
        name.toLowerCase().indexOf(searchItemsText.toLowerCase()) > -1
    );
  };

  onDeleteItem = id => {
    const { items, totalItemsQuantity } = this.state;

    const searchID = items.findIndex(items => {
      return items.id === id;
    });

    const newArray = [
      ...items.slice(0, searchID),
      ...items.slice(searchID + 1)
    ];

    const deleteQty = items[searchID].quantity;
    const newTotalItemsQuantity = totalItemsQuantity - deleteQty;

    this.setState(state => {
      return {
        items: newArray,
        totalItemsQuantity: newTotalItemsQuantity
      };
    });
  };

  render() {
    const {
      state: { items, totalItemsQuantity, searchItemsText },
      getFilteredItems,
      onSearchChange,
      onDecreaseQty,
      onIncreaseQty,
      onAddItem,
      onDeleteItem
    } = this;

    return (
      <div className="cart">
        <SearchItem onSearchChange={onSearchChange} />
        <table>
          <Header />
          <Content
            items={searchItemsText ? getFilteredItems() : items}
            onDecreaseQty={onDecreaseQty}
            onIncreaseQty={onIncreaseQty}
            onDeleteItem={onDeleteItem}
          />
          <Footer totalItemsQuantity={totalItemsQuantity} />
        </table>
        <AddItem onAddItem={itemName => onAddItem(getNewItem(itemName))} />
      </div>
    );
  }
}

export default App;
