import React from "react";
import { User, UserCircleGear } from "phosphor-react";

const LoginTab = () => {
  const handleClick = () => {
    // Redirect logic here
    window.location.href = "/profile"; // Redirect to the profile page
  };

  return (
    <div className="flex gap-3 fixed top-5 right-10 items-center">
      <div
        className="flex items-center gap-1"
        onClick={handleClick} // Handle click on the username
        style={{ cursor: "pointer" }}
      >
        <p className="hover:underline  hover:text-green-800 transition-colors">
          USER101
        </p>
        <UserCircleGear
          size={20}
          className="translate-y-0.5 text-green-800 bg-green-100 w-8 h-8 p-1 rounded-full"
          onClick={handleClick} // Handle click on the user icon
        />
      </div>
      <div className="max-w-max bg-slate-200 py-1 px-4 rounded-md">
        <p>Logout</p>
      </div>
    </div>
  );
};

export default LoginTab;
