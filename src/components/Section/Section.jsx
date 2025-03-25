import "./Section.css";

export function Section({ onOpenModalClick }) {
  return (
    <section>
      <h2>Nie czekaj!</h2>
      <h3>Otwórz modal!</h3>
      <button onClick={onOpenModalClick}>Otwórz</button>
    </section>
  );
}
