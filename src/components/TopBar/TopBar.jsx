import { useContext, useState } from "react";
import { Button } from "../Button/Button";
import styles from "./TopBar.module.css";
import { IsLoggedInContext } from "../../context/IsLoggedInContext";

export function TopBar() {
  const [isLoggedIn, setIsLoggedIn] = useContext(IsLoggedInContext);

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>Reactowe przepisy</span>
      {isLoggedIn ? (
        <>
          <span>Zalogowany</span>
          <Button onClick={() => setIsLoggedIn(false)}>Wyloguj</Button>
        </>
      ) : (
        <Button onClick={() => setIsLoggedIn(true)}>Zaloguj</Button>
      )}
    </div>
  );
}
