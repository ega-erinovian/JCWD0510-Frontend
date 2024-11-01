import Navbar from "./Navbar";

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div>
        <Navbar />
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1729442349367-56d783acf80a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Orang Tua" />
      </div>
    </div>
  );
};

export default Jumbotron;
