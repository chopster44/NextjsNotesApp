import CreateNote from "./CreateNote";
import styles from "../../styles/Notes.module.css";
import Note from './Note';

export const db = {
    route: 'http://127.0.0.1:8090',
    collectionName: 'notes1'
};

async function getNotes() {
  const client = await fetch(`${db.route}/api/collections/${db.collectionName}/records`, {next: {revalidate: 1}});
  const data = await client.json();
  return data?.items as any[];
}

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div>
      <h1>Notes</h1>
      <div className={styles.grid}>
        {notes?.map((note) => {
          if (!note.hidden) {
            return <Note key={note.id} note={note} />;
          } else {
              return;
          }
        })}
		<CreateNote />
      </div>
    </div>
  );
}
