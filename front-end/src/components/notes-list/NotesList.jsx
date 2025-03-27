import styles from "./NotesList.module.css";
import { useState } from "react";
import { Title } from "../title/Title";
import { AddNewButton } from "../add-new-button/AddNewButton";
import { TopBar } from "../top-bar/TopBar";
import { ShortNote } from "../short-note/ShortNote";
import { Note } from "../note/Note";
import { NavLink, Outlet, useLoaderData, useParams } from "react-router-dom";

const NotesContainer = ({ children }) => (
  <div className={styles["notes-container"]}>{children}</div>
);

const Notes = ({ children }) => (
  <div className={styles["notes-list"]} role="list">
    {children}
  </div>
);

const NotesList = () => {
  const notes = useLoaderData();

  return (
    <NotesContainer>
      <Notes>
        <TopBar>
          <Title>Notatki</Title>

          <AddNewButton>+</AddNewButton>
        </TopBar>

        {notes.map((note, idx) => (
          <NavLink to={`/notes/${note.folderId}/note/${note.id}`} key={idx}>
            {({ isActive }) => (
              <ShortNote
                role="listitem"
                note={note}
                active={isActive}
              ></ShortNote>
            )}
          </NavLink>
        ))}
      </Notes>
      <Outlet />
    </NotesContainer>
  );
};

export default NotesList;
