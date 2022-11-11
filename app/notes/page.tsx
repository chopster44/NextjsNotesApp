import CreateNote from "./CreateNote";
import styles from "../../styles/Notes.module.css";
import Note from './Note';
import PocketBase from "pocketbase";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

async function getNotes() {
  const client = new PocketBase("http://127.0.0.1:8090");
  const data = await client.records.getList("notes1");
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
