import React, { useState } from "react";
import "./style.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [newQuantity, setNewQuantity] = useState("");
  const [errors, setErrors] = useState("");

  const handleAddTodo = () => {
    if (newTodo !== "" && newQuantity !== "") {
      setTodos([
        ...todos,
        { id: Date.now(), text: newTodo, quantity: newQuantity },
      ]);
      setErrors("");
      setNewTodo("");
      setNewQuantity("");
    } else {
      setErrors("All fields are requried");
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  console.log("parent re renders");
  return (
    <div className="todo-app">
      <div className="container">
        <h1>Shopping List</h1>
        <div className="todo-inputs">
          <input
            type="text"
            className="todotitle"
            required
            placeholder="title"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <input
            className="todoqty"
            type="number"
            placeholder="Qty"
            value={newQuantity}
            onChange={(e) => setNewQuantity(e.target.value)}
          />
          <button className="addtodo" onClick={handleAddTodo}>
            Add
          </button>
        </div>
        {errors && <p className="error">{errors}</p>}
        {todos.length === 0 ? (
          <h4 className="notodo">No Todo Added Yet!!</h4>
        ) : (
          todos.map((todo, index) => {
            return (
              <div key={index} className="todolist">
                <div className="title">
                  <div className="qty">{todo.quantity}</div>
                  <p>{todo.text}</p>
                </div>
                <button
                  className="removetodo"
                  onClick={() => handleDeleteTodo(todo.id)}
                >
                  X
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Todo;
