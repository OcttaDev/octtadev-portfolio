"use client";

interface IContainer {
  title: string;
  paragraph: string;
  path?: string;
  download?: boolean;
  imageUrl?: string;
}

function Container({ title, paragraph, path, download, imageUrl }: IContainer) {
  return (
    <main className="flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-0 p-5 bg-white  w-full rounded-3xl shadow-2xl shadow-black/30">
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-2xl text-gray-500 font-semibold">{title}</h1>
        <p className="text-sm text-gray-500 font-semibold max-w-xl">
          {paragraph}
        </p>
        {download ? (
          <a
            href={path}
            download={path}
            className="mt-10 bg-zinc-900 w-20 h-9 flex justify-center items-center text-white rounded-md hover:cursor-pointer"
          >
            Visitar
          </a>
        ) : (
          <a
            href={path}
            target="_blank"
            className="mt-10 bg-zinc-900 w-20 h-9 flex justify-center items-center text-white rounded-md hover:cursor-pointer"
          >
            Visitar
          </a>
        )}
      </div>
      <div>
        <img src={imageUrl} alt="" className="w-80" />
      </div>
    </main>
  );
}

export default Container;
