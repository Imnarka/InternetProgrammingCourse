import Head from "./components/heading/Head";
import { useState } from "react";
import * as mdb from 'mdb-ui-kit';
import '~mdb-ui-kit/css/mdb.min.css';


function App() {
  const [todos, setTodos]  = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  // const deleteTodo = (text) => {
    
  // };

  return (
    <div className="App">
      <Head />
    </div>
  );
}

export default App;
