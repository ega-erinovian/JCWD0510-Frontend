import { HiOutlineMenu } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="bg-gray-700">
      <div className="container mx-auto flex justify-between py-4 text-white">
        <h1 className="font-bold">Logo</h1>
        <ul className="hidden w-72 items-center justify-between md:flex">
          <li>About</li>
          <li>Project</li>
          <li>Contact</li>
        </ul>
        <div className="md:hidden">
          <HiOutlineMenu size={"20px"} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
