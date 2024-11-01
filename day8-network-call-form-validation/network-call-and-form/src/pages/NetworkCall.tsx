import { useEffect, useState } from "react";
import axios from "axios";

interface Superhero {
  id: number;
  name: string;
  power: string;
}

const NetworkCall = () => {
  const [superheroes, setSuperheroes] = useState<Superhero[]>([]);
  const [superhero, setSuperhero] = useState<Superhero | null>(null);

  console.log("Ini superhero dari id 2: ", superhero);

  // Mengambil banyak data
  const getSuperheroes = async () => {
    try {
      const response = await fetch("http://localhost:8000/superheroes");
      const superheroes = await response.json();

      setSuperheroes(superheroes);
    } catch (error) {
      console.log(error);
    }
  };

  // Mengambil satu data
  const getSuperhero = async () => {
    try {
      const response = await axios.get("http://localhost:8000/superheroes/");
      setSuperhero(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Menambahkan data baru
  const createSuperhero = async () => {
    try {
      const superhero = await axios.post("http://localhost:8000/superheroes", {
        name: "Siska",
        power: "Memikat hati pria",
      });

      getSuperheroes();

      console.log(superhero);
    } catch (error) {
      console.log(error);
    }
  };

  const updateSuperhero = async () => {
    try {
      const superhero = await axios.patch(
        "http://localhost:8000/superheroes/1",
        {
          name: "Vina",
        }
      );

      getSuperheroes();

      console.log(superhero);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteSuperhero = async () => {
    try {
      const superhero = await axios.delete(
        "http://localhost:8000/superheroes/1"
      );

      getSuperheroes();

      console.log(superhero);
    } catch (error) {
      console.log(error);
    }
  };

  // Memanggil API saat melakukan render pertama kali
  useEffect(() => {
    getSuperheroes();
    getSuperhero();
  }, []);

  return (
    <div>
      {superheroes.map((superhero) => (
        <div key={superhero.id}>
          <h3>#{superhero.id}</h3>
          <h1>Name: {superhero.name}</h1>
          <p>Power: {superhero.power}</p>
          <br />
        </div>
      ))}
      <div>
        <button onClick={createSuperhero}>Create</button>
        <button onClick={updateSuperhero}>Update</button>
        <button onClick={deleteSuperhero}>Delete</button>
      </div>
    </div>
  );
};

export default NetworkCall;
