import styles from '../../../styles/Notes.module.css';
import PocketBase from 'pocketbase';

async function getNote(noteId: string) {
	const client = new PocketBase('http://127.0.0.1:8090');
	const data = await client.records.getOne('notes1', noteId);
	return data;
}


export default async function NotePage({ params }: any) {
	const note = await getNote(params.id);

	return (
		<div>
			<h1>notes/{note.id}</h1>
			<div className={styles.note}>
				<h2>{note.title}</h2>
				<h5>{note.content}</h5>
				<p>{note.created}</p>
			</div>
		</div>
	);
}