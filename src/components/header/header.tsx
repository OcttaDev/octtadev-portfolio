"use client";
import NavBar from "../navbar/navbar";
import { Button } from "../ui/button";

function Header() {
  return (
    <header className="flex justify-center h-full w-full" id="home">
      <div className="flex flex-col gap-10 w-[80%] h-[80%] bg-white mt-10 rounded-3xl shadow-2xl shadow-black/30">
        <NavBar />
        <div className="flex flex-col lg:flex-row justify-around items-center gap-5 w-full lg:mt-16 mt-0">
          <div className="flex flex-col gap-10 items-center lg:items-start">
            <div className="flex flex-col gap-2 text-center lg:text-start">
              <p className="text-sm *:lg:text-md">
                Olá, eu me chamo Otávio. Sou desenvovedor
              </p>
              <h1 className="text-xl lg:text-3xl font-semibold max-w-xl">
                Transformo Ideias em Experiências Digitais Memoráveis!
              </h1>
            </div>
            <div className="flex items-center gap-5">
              <a
                href="https://github.com/OcttaDev"
                target="_blank"
                className="flex justify-center items-center w-20 lg:w-32 h-9 bg-zinc-900 text-white rounded-md"
              >
                GITHUB
              </a>
              <a
                href="curriculo.pdf"
                download="curriculo.pdf"
                className="flex justify-center items-center w-20 lg:w-32 h-9 text-[10px] lg:text-sm bg-zinc-900 text-white rounded-md"
              >
                DONWLOAD CV
              </a>
            </div>
          </div>
          <div>
            <img
              src="https://avatars.githubusercontent.com/u/127272659?s=400&u=0db48f60e888625d7e378db5fe87872a26010cbe&v=4"
              alt=""
              className="w-32 lg:w-60 rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
