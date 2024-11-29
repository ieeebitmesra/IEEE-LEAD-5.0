import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="p-5 bg-primary flex justify-end items-center sm:hidden header">
        <div className="flex flex-row text-xl gap-10 mt-5 mr-20">
          <h1 className="text-tertiary pb-4 hover:underline hover:scale-110 transition-all cursor-pointer">
            Home
          </h1>
          <h1 className="text-tertiary pb-4 hover:underline hover:scale-110 transition-all cursor-pointer">
            Projects
          </h1>

          <h1
            onClick={() => navigate(`/admin-login`)}
            className="text-tertiary pb-4 hover:underline hover:scale-110 transition-all cursor-pointer"
          >
            Login
          </h1>
        </div>
      </div>
      
    </div>
  );
}

export default Header;
