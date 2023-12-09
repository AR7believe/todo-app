import { useState } from "react";
import TodoList from "./TodoList";
import "./App.css";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfItem = () => {
    setItems((oldItem) => {
      return [...oldItem, inputList];
    });
    setInputList("");
  };

  const deletedItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1 className="title">ToDo List</h1>
          <input
            type="text"
            placeholder="Add Item"
            className="inputField"
            onChange={itemEvent}
            value={inputList}
          ></input>
          <button className="addButton" onClick={listOfItem}>
            {" "}
            +{" "}
          </button>

          {/* <li>{inputList}</li> */}
          <ol>
            {items.map((itemVal, index) => (
              <TodoList
                text={itemVal}
                key={index}
                id={index}
                onSelect={deletedItems}
              />
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
