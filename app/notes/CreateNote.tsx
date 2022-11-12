'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../styles/Notes.module.css';
import EditorBar from './EditorBar';
import { db } from './page';

export default function CreateNote() {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const router = useRouter();

	const create = async () => {
		await fetch(
			`${db.route}/api/collections/${db.collectionName}/records`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					title: title,
					content: content,
					hidden: false,
					tags: '-',
				}),
			}
		);

		setContent('');
		setTitle('');

		router.refresh();
	};
	const cancel = () => {
		setContent('');
		setTitle('');
	};

	return (
		<form className={styles.note}>
			<input
				type="text"
				placeholder="New Note Title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				className={styles.titleInput}
			/>
			<textarea
				placeholder="New Note content"
				value={content}
				onChange={(e) => setContent(e.target.value)}
				className={styles.contentInput}
			/>
			<EditorBar create={create} cancel={cancel} />
		</form>
	);
}
