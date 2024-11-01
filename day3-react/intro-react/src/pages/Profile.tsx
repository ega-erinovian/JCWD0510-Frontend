import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const onClickHome = () => {
    navigate("/");
  };

  return (
    <>
      <h1>Profile</h1>
      <button onClick={onClickHome}>Back to Home</button>
      <button onClick={() => navigate("/contact")}>Contact</button>
    </>
  );
};

export default Profile;
