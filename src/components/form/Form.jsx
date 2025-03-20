import { useState } from "react";
import styles from "./Form.module.css";
import Button from "../button/Buttons";

const Form = ({ onSubmit, onClose }) => {
  const [value, setValue] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (e.target[0].value.length > 0) onSubmit(e.target[0].value);

    setValue("");
    onClose();
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button type="submit" disabled={!value}>
        Dodaj
      </Button>
      <Button onClick={onClose}>Close</Button>
    </form>
  );
};

export default Form;
