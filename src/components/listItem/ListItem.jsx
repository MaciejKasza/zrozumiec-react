import { useState } from "react";
import styles from "./ListItem.module.css";
import Button from "../button/Buttons";

const ListItem = ({ onDone, onDelete, id, label, done }) => {
  return (
    <li className={styles.item}>
      <p className={styles.name}>
        <span className={done ? styles.done : ""}>{label}</span>
      </p>
      {!done && <Button onClick={() => onDone(id)}>Zrobione</Button>}
      <Button onClick={() => onDelete(id)}>Usuń</Button>
    </li>
  );
};

export default ListItem;
