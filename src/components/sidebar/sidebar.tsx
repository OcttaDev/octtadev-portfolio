"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { RxHamburgerMenu } from "react-icons/rx";

function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-transparent border-none hover:bg-transparent hover:border-none">
          <RxHamburgerMenu size={30} color="#000" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>OcttaDev</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <ul className="flex flex-col items-center gap-20 mt-10">
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
              href="https://api.whatsapp.com/send?phone=5583996032341"
              className="bg-transparent text-gray-500 hover:bg-transparent rounded-none focus:border-b-2"
            >
              Let´s Talk
            </a>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default Sidebar;
