import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App";
import NotesList, { createNote } from "./components/notes-list/NotesList";
import { deleteNote, Note, updateNote } from "./components/note/Note";
import { createFolder } from "./components/folders-list/FoldersList";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    action: createFolder,
    shouldRevalidate: ({ formAction }) => {
      if (formAction === "/") return true;

      return false;
    },
    loader: () => {
      return fetch("http://localhost:3000/folders");
    },

    children: [
      {
        element: <NotesList />,
        path: "/notes/:folderId",
        action: createNote,
        loader: ({ params }) => {
          return fetch(
            `http://localhost:3000/notes?folderId=${params.folderId}`
          );
        },
        children: [
          {
            path: "note/:noteId",
            element: <Note />,
            action: updateNote,
            shouldRevalidate: ({ formAction }) => {
              if (formAction) return false;
              //formAction nie ma wartości jesli nie jest wykonany submit()
              // a on się wykonuje tylko przy educji, jesli wchodizmuy po raz
              // pierwszy to formAction nie ma
              return true;
            },
            loader: ({ params }) => {
              return fetch(`http://localhost:3000/notes/${params.noteId}`);
            },
            children: [
              {
                path: "delete",
                action: deleteNote,
              },
            ],
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
