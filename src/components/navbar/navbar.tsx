"use cliente";

import Sidebar from "../sidebar/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

function NavBar() {
  const handleClickNavegate = (path: string) => {
    location.href = path;
  };
  return (
    <main className="flex justify-around items-center h-20">
      <Avatar>
        <AvatarImage src="octta.png" />
        <AvatarFallback>OcttaDev</AvatarFallback>
      </Avatar>
      <ul className="hidden lg:flex items-center gap-20 ">
        <a
          href="#home"
          className="bg-transparent text-gray-500 hover:bg-transparent rounded-none focus:border-b-2"
        >
          Home
        </a>
        <a
          href="#about-me"
          className="bg-transparent text-gray-500 hover:bg-transparent rounded-none focus:border-b-2"
        >
          About-me
        </a>
        <a
          href="#projects"
          className="bg-transparent text-gray-500 hover:bg-transparent rounded-none focus:border-b-2"
        >
          Projects
        </a>
        <a
          href="#"
          className="bg-transparent text-gray-500 hover:bg-transparent rounded-none focus:border-b-2"
        >
          Let´s Talk
        </a>
      </ul>
      <div className="flex lg:hidden">
        <Sidebar />
      </div>
    </main>
  );
}

export default NavBar;
