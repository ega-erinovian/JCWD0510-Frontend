import WorkContent from "./WorkContent";

const Work = () => {
  const workContent = [
    {
      title: "Champs Thropy",
      date: "December-1995",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, qui beatae! Quisquam obcaecati optio cumque.",
      techs: ["Typescript"],
    },
    {
      title: "Most Kill at World War II",
      date: "January-1943",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, qui beatae! Quisquam obcaecati optio cumque.",
      techs: ["AK47", "RPG", "AWP"],
    },
    {
      title: "Purwadhika Best Student JCWD",
      date: "December-1986",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, qui beatae! Quisquam obcaecati optio cumque.",
      techs: ["HTML", "CSS", "Javascript"],
    },
  ];

  return (
    <div className="work">
      <h1 className="subtitle">Work</h1>
      <div className="work-container">
        {workContent.map((item) => (
          <WorkContent
            title={item.title}
            date={item.date}
            description={item.description}
            techs={item.techs}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
