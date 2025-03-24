import { useEffect, useMemo, useState } from "react";
import { Button } from "../Button/Button";
import { List } from "../List/List";
import styles from "./Panel.module.css";
import { Form } from "../Form/Form";
import { FilterButton } from "../FilterButton/FilterButton";
import { getCategoryInfo } from "../../utils/getCategoryInfo";
import { Info } from "../Info/Info";

export function Panel({ onError }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // useEffect(() => {
  //   const timeout = setTimeout(() => alert("Alert"), 3000);

  //   //cleanup function - to co zwracamy w useEfekt wywołuje się przy
  //   // niszczeniu komponentu lub tuż przd podownym wywołaniem funckji
  //   // z efektu,. Można więc dokonywać czyszczenia tak aby nie wykonywały
  //   // się odłozone akcje po ty jak komponentu nie ma(np. set timeout,
  //   // połączenia z bazą itp.)
  //   return () => clearTimeout(timeout);
  // }, []);

  useEffect(() => {
    let isCanceld = false;
    const params = selectedCategory ? `?category=${selectedCategory}` : "";
    fetch(`http://localhost:3000/words${params}`)
      .then((res) => {
        if (res.ok) return res.json();
        else throw new Error("Błąd ładowania danych");
      })
      .then((res) => {
        if (!isCanceld) {
          setData(res);
          setIsLoading(false);
        }
      })
      .catch((e) => {
        onError(e);
        // setIsLoading(false);
      });

    return () => {
      isCanceld = true;
    };
  }, [selectedCategory, onError]);

  const categoryInfo = useMemo(
    () => getCategoryInfo(selectedCategory),
    [selectedCategory]
  );

  const handleFormSubmit = (data) => {
    fetch("http://localhost:3000/words", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (!selectedCategory || selectedCategory === res.category)
          setData((prev) => [...prev, res]);
      });
  };

  const handleDeleteItem = (id) => {
    fetch(`http://localhost:3000/words/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          setData((prev) => prev.filter((item) => item.id !== id));
        } else {
          throw new Error("Błąd podczas usuwania!");
        }
      })
      .catch((e) => {
        onError(e);
      });
  };

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
  };

  if (isLoading) {
    return <p>Ładownie...</p>;
  }

  return (
    <>
      <section className={styles.section}>
        <Info> {categoryInfo}</Info>
        <Form onFormSubmit={handleFormSubmit} />
        <div className={styles.filters}>
          <FilterButton
            active={selectedCategory === null}
            onClick={() => handleFilterClick(null)}
          >
            Wszystkie
          </FilterButton>
          <FilterButton
            active={selectedCategory === "noun"}
            onClick={() => handleFilterClick("noun")}
          >
            Rzeczowniki
          </FilterButton>
          <FilterButton
            active={selectedCategory === "verb"}
            onClick={() => handleFilterClick("verb")}
          >
            Czasowniki
          </FilterButton>
        </div>
        <List onDeleteItem={handleDeleteItem} data={data}></List>
      </section>
    </>
  );
}
