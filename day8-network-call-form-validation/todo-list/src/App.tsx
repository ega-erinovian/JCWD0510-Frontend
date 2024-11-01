import { useEffect, useRef, useState } from "react";
import { IoTrash } from "react-icons/io5";
import "./App.css";

import axios from "axios";

interface Todos {
  id: number;
  name: string;
  isChecked: boolean;
}

function App() {
  const URL: string = "http://localhost:8000/todos/";

  const [todos, setTodos] = useState<Todos[]>([]);
  const [todo, setTodo] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  // Fetching all data
  const getAllTodo = async () => {
    try {
      const response = await axios.get(URL);
      setTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Create new todo
  const handleCreateTodo = async () => {
    try {
      const newTodo = await axios.post(URL, {
        name: todo,
        isChecked: false,
      });

      getAllTodo();

      console.log(newTodo);

      if (inputRef.current?.value) {
        inputRef.current.value = "";
        setTodo("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Fungsi untuk checklist todos
  const handleCheckTodo = async (id: number, value: boolean) => {
    try {
      const checkTodo = await axios.patch(URL + id, {
        isChecked: value,
      });

      getAllTodo();

      console.log(checkTodo);
    } catch (error) {
      console.log(error);
    }
  };

  // Fungsi untuk menghapus elemen todos
  const handleDeleteTodo = async (id: number) => {
    // dispatch(deleteTodo(index));
    try {
      const deleteTodo = await axios.delete(URL + id);

      getAllTodo();

      console.log(deleteTodo);
    } catch (error) {
      console.log(error);
    }
  };

  // Fungsi untuk menghitung todos yang dichecklist
  const handleCount = (): number => {
    // Membuat variabel penampung
    let temp: Todos[] = [];
    if (todos.length > 0) {
      // Filter akan mereturn elemen2 todos yang property isChecked nya bernilai true ke variabel penampung 'temp'
      temp = todos.filter((item) => item.isChecked === true);
    }

    return temp.length;
  };

  // This useEffect only run once
  useEffect(() => {
    getAllTodo();
  }, []);

  return (
    <>
      <div className="container m-auto w-full text-center text-white pt-32">
        <h1 className="font-bold text-4xl mb-20">Chores ToDo List</h1>
        <div className="w-[500px] m-auto">
          {todos.length > 0 ? (
            todos.map((todo) => (
              <div
                key={todo.id}
                className="flex justify-between items-center mb-8">
                <input
                  type="checkbox"
                  onChange={(e) => handleCheckTodo(todo.id, e.target.checked)}
                  className="rounded-sm border border-green-400 bg-[#1b202c] focus:ring-0 focus:border-none checked:bg-green-400 hover:cursor-pointer"
                />
                <label
                  style={
                    todo.isChecked ? { textDecoration: "line-through" } : {}
                  }>
                  {todo.name}
                </label>
                <button
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="rounded border border-gray-500 hover:border-red-400 p-2">
                  <IoTrash className="fill-red-400" />
                </button>
              </div>
            ))
          ) : (
            <h2>Empty List</h2>
          )}
          <hr className="my-10 border border-gray-700" />
          <h3 className="text-2xl font-bold">
            Done {handleCount()} Out of {todos.length}
          </h3>
          {/* Add Todo Button */}
          <div
            className="flex gap-10"
            style={{ display: "flex", marginTop: "30px", gap: "10px" }}>
            <input
              className="w-full border border-gray-600 rounded bg-[#1b202c] focus:border-gray-300 focus:ring-0"
              type="text"
              onChange={(e) => setTodo(e.target.value)}
              ref={inputRef}
            />
            <button
              className="bg-[#89cff2] hover:bg-[#7ab9d8] py-2 px-5 rounded text-black font-bold"
              onClick={handleCreateTodo}>
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
