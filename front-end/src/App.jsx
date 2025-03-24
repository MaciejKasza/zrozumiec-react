import { useCallback, useMemo, useState } from "react";
import styles from "./App.module.css";
import { Panel } from "./components/Panel/Panel";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";
import { SubPage, SubPageMemo } from "./components/SubPage/SubPage";
import { Timer } from "./components/Timer/Timer";

function App() {
  const [isPanelShown, setIsPanelShown] = useState(true);
  const [error, setError] = useState(null);

  const handleError = useCallback((e) => {
    setError(e.message);
    setTimeout(() => setError(null), 3000);
  }, []);

  // const subPage = useMemo(() => <SubPage />, []);

  return (
    <main className={styles.main}>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <button onClick={() => setIsPanelShown((prev) => !prev)}>
        {isPanelShown ? "Schowaj panel" : "Pokaż panel"}
      </button>
      {isPanelShown && <Panel onError={handleError} />}
      {/* <SubPageMemo /> */}
      <Timer />
    </main>
  );
}

export default App;
