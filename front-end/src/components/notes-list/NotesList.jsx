import styles from "./NotesList.module.css";
import { useState } from "react";
import { Title } from "../title/Title";
import { AddNewButton } from "../add-new-button/AddNewButton";
import { TopBar } from "../top-bar/TopBar";
import { ShortNote } from "../short-note/ShortNote";
import { Note } from "../note/Note";
import {
  Form,
  NavLink,
  Outlet,
  redirect,
  useLoaderData,
  useParams,
} from "react-router-dom";

const NotesContainer = ({ children }) => (
  <div className={styles["notes-container"]}>{children}</div>
);

const Notes = ({ children }) => (
  <div className={styles["notes-list"]} role="list">
    {children}
  </div>
);

export async function createNote({ params }) {
  return fetch("http://localhost:3000/notes", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      title: "Nowa notatka",
      body: "Treść notatki",
      folderId: Number(params.folderId),
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      return redirect(`/notes/${data.folderId}/note/${data.id}`);
    });
}

const NotesList = () => {
  const notes = useLoaderData();

  return (
    <NotesContainer>
      <Notes>
        <TopBar>
          <Title>Notatki</Title>
          <Form method="POST">
            <AddNewButton>+</AddNewButton>
          </Form>
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
