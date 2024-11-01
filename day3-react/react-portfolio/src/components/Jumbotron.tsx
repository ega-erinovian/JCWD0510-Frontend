import Navbar from "./Navbar";

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="content">
        <div className="content-wrapper">
          <Navbar />
          <div className="content-text">
            <h1>
              Hello <br /> <span>John Do<span>e</span></span>
            </h1>
            <button className="download-btn">Download CV</button>
          </div>
        </div>
      </div>
      <div className="profile">
        <img
          src="https://images.unsplash.com/photo-1729442349367-56d783acf80a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Orang Tua"
        />
      </div>
    </div>
  );
};

export default Jumbotron;
