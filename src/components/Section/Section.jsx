import { useState } from "react";
import "./Section.css";
import { Modal } from "../Modal/Modal";
import { createPortal } from "react-dom";

export function Section() {
  const [isModalShown, setIsModalShown] = useState(false);
  const modal = createPortal(
    <Modal onClose={() => setIsModalShown(false)} />,
    document.body
  );
  return (
    <section>
      <h2>Nie czekaj!</h2>
      <h3>Otwórz modal!</h3>
      <button onClick={() => setIsModalShown(true)}>Otwórz</button>
      {isModalShown && modal}
    </section>
  );
}
