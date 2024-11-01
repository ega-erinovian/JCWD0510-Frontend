import { useRef, useState } from "react";
import { IoTrash } from "react-icons/io5";
import "./App.css";
import { useAppSelector } from "./redux/hooks";
import { useDispatch } from "react-redux";
import { addTodo, checkList, deleteTodo } from "./redux/slices/todoList";

interface Todos {
  name: string;
  isChecked: boolean;
}

function App() {
  const { todos } = useAppSelector((state) => state.todos);
  const dispatch = useDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  // const [todos, setTodos] = useState<Todos[]>([]);
  const [todo, setTodo] = useState<string>("");

  // Fungsi untuk menambah data todos
  const handleAddTodo = () => {
    if (inputRef.current?.value.trim() !== "") {
      // Memasukkan data baru ke state todos
      // setTodos((prev) => [...prev, { name: todo, isChecked: false }]);

      dispatch(addTodo({ name: todo, isChecked: false }));
    } else {
      alert("You're doing nothing?! Get a job!")
    }

    // Me-reset input dan state todo
    if (inputRef.current) {
      inputRef.current.value = "";
      setTodo("");
    }
  };

  // Fungsi untuk checklist todos
  const handleCheck = (index: number, value: boolean) => {
    // const temp = [...todos];
    // temp[index].isChecked = !temp[index].isChecked;
    // setTodos(temp);

    dispatch(checkList({ index, value }));
  };

  // Fungsi untuk menghapus elemen todos
  const handleDelete = (index: number) => {
    // const temp: Todos[] = [...todos];
    // temp.splice(index, 1);
    // setTodos(temp);

    dispatch(deleteTodo(index));
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

  return (
    <>
      <div className="container m-auto w-full text-center text-white pt-32">
        <h1 className="font-bold text-4xl mb-20">Chores ToDo List</h1>
        <div className="w-[500px] m-auto">
          {todos.length > 0 ? (
            todos.map((todo, index) => (
              <div key={index} className="flex justify-between items-center mb-8">
                <input
                  type="checkbox"
                  onChange={(e) => handleCheck(index, e.target.checked)}
                  className="rounded-sm border border-green-400 bg-[#1b202c] focus:ring-0 focus:border-none checked:bg-green-400 hover:cursor-pointer"
                />
                <label
                  style={
                    todo.isChecked ? { textDecoration: "line-through" } : {}
                  }
                >
                  {todo.name}
                </label>
                <button
                  onClick={() => handleDelete(index)}
                  className="rounded border border-gray-500 hover:border-red-400 p-2"
                >
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
            style={{ display: "flex", marginTop: "30px", gap: "10px" }}
          >
            <input
              className="w-full border border-gray-600 rounded bg-[#1b202c] focus:border-gray-300 focus:ring-0"
              type="text"
              onChange={(e) => setTodo(e.target.value)}
              ref={inputRef}
            />
            <button
              className="bg-[#89cff2] hover:bg-[#7ab9d8] py-2 px-5 rounded text-black font-bold"
              onClick={handleAddTodo}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
