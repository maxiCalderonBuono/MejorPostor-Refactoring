import { FaBriefcase } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

export const NavBar = () => {
  return (
    <nav className="flex justify-between items-center h-16 bg-[#3196DA] relative shadow-sm pl-1">
      <div>
        <img
          src="https://res.cloudinary.com/di57h1uhf/image/upload/v1648567242/Mejor%20postor/logo2_ehp6pn.png"
          alt="Mejor postor"
          className="w-16"
        />
      </div>
      <div className="px-5 cursor-pointer sm:hidden">
        <AiOutlineMenu />
      </div>

      <div className="pr-5 hidden sm:flex">
        <a className="flex items-center px-2">
          <img
            src="https://res.cloudinary.com/di57h1uhf/image/upload/v1648579156/Mejor%20postor/gavel-solid_ohg1kj.png"
            alt="Hammer"
            className="w-5"
          />
          <span className="pl-1">Crear subasta</span>
        </a>
        <a className="flex items-center px-2">
          <FaBriefcase />
          <span className="pl-1">Mis subastas</span>
        </a>
        <a className="flex items-center px-2">
          <img
            src="https://res.cloudinary.com/di57h1uhf/image/upload/v1648579156/Mejor%20postor/group-bidding-1451857-1226852_olhpuz.png"
            alt="Pujas"
            className="w-5"
          />
          <span className="pl-1">Mis pujas</span>
        </a>
      </div>
    </nav>
  );
};
