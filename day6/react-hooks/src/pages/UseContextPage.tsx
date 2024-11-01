import { createContext, useContext, useState } from "react";

const UserContext = createContext("");

const UseContextPage = () => {
  const [user] = useState<string>("Budi");

  return (
    <UserContext.Provider value={user}>
      <ComponentChild1 />
    </UserContext.Provider>
  );
};

export default UseContextPage;

const ComponentChild1 = () => {
  return (
    <>
      <h1>Komponen Children 1</h1>
      <ComponentChild2 />
    </>
  );
};

const ComponentChild2 = () => {
  const user = useContext(UserContext);

  return <h2>Komponen Children 2: {user}</h2>;
};
