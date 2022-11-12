import styles from '../../../styles/Notes.module.css';
import {db} from "../page";

async function getNote(noteId: string) {
	const client = await fetch(`${db.route}/api/collections/${db.collectionName}/records/${noteId}`, {cache: 'no-store'});
	return client.json();
}


export default async function NotePage({ params }: any) {
	const note = await getNote(params.id);

	return (
		<div>
			<div className={styles.note}>
				<h2>{note.title}</h2>
				<h5>{note.content}</h5>
				<p>{note.created}</p>
			</div>
		</div>
	);
}