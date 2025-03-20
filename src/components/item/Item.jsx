import { useState } from "react";

export function Item({ emoji }) {
  const [zoomed, setZoomed] = useState(false);

  return (
    <li className="bg-salmon overflow-hidden rounded-3xl px-12 py-8 text-center">
      <span
        className={`mb-10 block text-3xl transition-transform ${
          zoomed ? "scale-[2]" : ""
        }`}
      >
        {emoji}
      </span>
      <button
        className="hover:text-salmon w-[120px] cursor-pointer rounded-[5px] border border-solid border-current bg-transparent p-3 text-white transition-colors hover:bg-white"
        onClick={() => {
          setZoomed((wasZoomed) => !wasZoomed);
        }}
      >
        {zoomed ? "Oddal" : "Przybliż"}
      </button>
    </li>
  );
}
