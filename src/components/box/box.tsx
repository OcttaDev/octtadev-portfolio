"use clint";
import React from "react";

interface IBox {
  children?: React.ReactNode;
  title: string;
  paragraph: string;
}

function Box({ children, title, paragraph }: IBox) {
  return (
    <main className="flex flex-col gap-5">
      <span>{children}</span>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold text-white">{title}</h1>
        <p className="max-w-52 text-white font-sm">{paragraph}</p>
      </div>
    </main>
  );
}

export default Box;
