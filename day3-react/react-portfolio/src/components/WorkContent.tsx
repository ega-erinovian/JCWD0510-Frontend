interface WorkContentProps {
  title: string;
  date: string;
  description: string;
  techs: string[];
}

const WorkContent = ({ title, date, description, techs }: WorkContentProps) => {
  return (
    <div className="work-content">
      <div className="work-title">
        <h1>{title}</h1>
        <p>{date}</p>
      </div>
      <div className="work-description">
        <p>{description}</p>
        <ul>
          {techs.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkContent;
