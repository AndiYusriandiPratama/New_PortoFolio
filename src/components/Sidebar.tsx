import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaMedium } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { LuDownloadCloud } from "react-icons/lu";
import { useTheme } from "next-themes";
import { CiCloudSun, CiCloudMoon } from "react-icons/ci";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <img
        src="https://i.pinimg.com/564x/6d/3e/b8/6d3eb8147fdcdd571952e667b6690801.jpg"
        alt="photo profile"
        className="w-32 h-32 rounded-full mx-auto"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider  dark:text-white font-kaushan sm:text-2xl md:text-xl lg:text-lg xl:text-md 2xl:text-sm ">
        Andi Yusriandi{" "}
        <span className="text-gradient-to-r from-pink-200 to-blue-300 text-blue-300">
          Pratama
        </span>
      </h3>

      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:text-blue-300">
        Fullstack Web Development
      </p>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full flex items-center justify-center gap-2  dark:text-blue-300">
        <LuDownloadCloud /> Download CV
      </p>
      {/* Addres */}
      <div className="bg-opacity-50 font-kaushan text-black dark:text-white">
        <div className="flex items-center justify-center gap-2">
          <FaLocationDot />
          <span>Makassar - Parepare, Indonesia</span>
        </div>
        <p>andiyusriandiprtm@gmail.com</p>
        <p>+62 857-5137-7259</p>
      </div>

      {/* Social Media */}
      <div className="flex items-center justify-center my-5 gap-3 bg-gray-200 py-2 rounded-full text-blue-300 md:w-full mx-auto">
        <a href="https://github.com/AndiYusriandiPratama">
          <FaGithub size={24} />
        </a>

        <a href="https://www.linkedin.com/in/andi-yusriandi-pratama-236b18206/">
          <FaLinkedin size={24} />
        </a>

        <a href="https://medium.com/@andiyusriandiprtm">
          <FaMedium size={24} />
        </a>

        <a href="https://www.instagram.com/andiyusriandiprtm/">
          <FaInstagram size={24} />
        </a>
        <a>
          <div onClick={changeTheme}>
            {theme === "light" ? (
              <div className="flex items-center justify-center">
                <CiCloudSun size={24} className="mr-1" />
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <CiCloudMoon size={24} className="mr-1 " />
              </div>
            )}
          </div>
        </a>
      </div>

      {/* Linked In */}
      <div className="flex flex-col items-center ">
        <div
          className="px-5 py-2 my-2 bg-gradient-to-r from-pink-200 to-blue-300  rounded-full w-9/12"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/andi-yusriandi-pratama-236b18206/"
            )
          }
        >
          Available To Hire
        </div>
        {/* Contact Me */}
        <div
          className="px-5 py-2 my-3 bg-gradient-to-r from-pink-200 to-blue-300  rounded-full w-9/12"
          onClick={() => window.open("mailto:andiyusriandiprtm@gmail")}
        >
          Contact Me
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
