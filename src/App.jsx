import { useState, useRef } from "react";

const App = () => {
  const [todo, setTodo] = useState([]);
  const todoVal = useRef();
  const [editedTodo, setEditedTodo] = useState(null);

  // Function to add a new todo
  const addTodo = (event) => {
    event.preventDefault();
    // Check if the input field is empty
    if (todoVal.current.value === "") {
      alert("Please add something to your todo!");
      return;
    }
    todo.push(todoVal.current.value);
    setTodo([...todo]);
    console.log(todo);

    todoVal.current.value = "";
  };

  // Function to delete a todo
  const deleteTodo = (index) => {
    console.log("todo deleted", index);
    todo.splice(index, 1);
    setTodo([...todo]);
  };

  // Function to edit a todo
  const editTodo = (index) => {
    // Prompt the user to enter the new todo
    const newTodo = prompt("Enter the new todo:");
    // Check if the user entered something
    if (newTodo === null || newTodo === "") {
      alert("Please enter something!");
      return;
    }
    // Update the todo
    todo[index] = newTodo;
    setTodo([...todo]);
    // Set the edited todo to show the updated todo
    setEditedTodo(index);
  };

  return (
    <>
      <h1 className="text">Todo App</h1>
      <form onSubmit={addTodo}>
        <input type="text" placeholder="Enter Your Todo" ref={todoVal} />
        <button type="submit">Click</button>
      </form>
      <ul>
        {/* PUTTING KEY ON THE INDEX IS NOT A GOOD PRACTICS  */}
        {todo.map((item, index) => {
          return (
            <div key={index}>
              <li>
                {editedTodo === index ? (
                  <span style={{ color: "White" }}>{item}</span>
                ) : (
                  item
                )}
              </li>
              <button onClick={() => deleteTodo(index)}>Delete</button>
              <button onClick={() => editTodo(index)}>Edit</button>
            </div>
          );
        })}
      </ul>
    </>
  );
};
export default App;
