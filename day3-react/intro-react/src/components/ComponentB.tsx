interface ComponentBProps {
  nama: string;
}

const ComponentB = ({nama}: ComponentBProps) => {
  return (
    <div>
      <h1 className="hijau">Welcome, {nama}</h1>
    </div>
  );
};

export default ComponentB;
